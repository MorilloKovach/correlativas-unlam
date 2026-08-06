import { useState, useCallback, useEffect, useMemo } from 'react';
import { getCarreraById } from '../data/carreras';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export type SubjectStatus = 'approved' | 'cursada' | 'recursada' | 'available' | 'locked' | 'planned';
export type AppMode = 'approve' | 'plan';

export interface SubjectState {
  status: 'approved' | 'cursada' | 'recursada';
  attempts: number;
  p1?: number;
  p2?: number;
  finalGrade?: number;
}

export function useCorrelativas(viewingFriendId?: string | null, guestCareerId?: string | null, syncingFriendId?: string | null) {
  const { user, userProfile, loading: authLoading } = useAuth();
  const [mode, setMode] = useState<AppMode>('approve');
  const [subjectProgress, setSubjectProgress] = useState<Record<string, SubjectState>>({});
  const [plannedIds, setPlannedIds] = useState<Set<string>>(new Set());
  const [syncFriendPlannedIds, setSyncFriendPlannedIds] = useState<Set<string>>(new Set());
  const [dbLoaded, setDbLoaded] = useState(false);
  
  // Si hay guestCareerId y no hay usuario, usamos esa. Sino perfil, sino informatica.
  const initialCareerId = guestCareerId || userProfile?.careerId || 'informatica';
  const [targetCareerId, setTargetCareerId] = useState<string>(initialCareerId);

  const planEstudios = useMemo(() => {
    return getCarreraById(targetCareerId)?.planEstudios || [];
  }, [targetCareerId]);

  // Cargar datos del usuario al iniciar sesión o al cambiar de amigo
  useEffect(() => {
    if (authLoading) return;

    if (!user && guestCareerId) {
       // Es un guest. Seteamos estado inicial vacío y marcamos dbLoaded para que funcione local.
       setSubjectProgress({});
       setTargetCareerId(guestCareerId);
       setDbLoaded(true);
       return;
    }

    const targetUid = viewingFriendId || user?.uid;

    if (targetUid) {
      const loadUserData = async () => {
        try {
          const userDoc = await getDoc(doc(db, 'users', targetUid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            
            // Si tiene careerId en la BD lo usamos, si no por defecto informatica (legacy)
            const loadedCareerId = data.careerId || 'informatica';
            setTargetCareerId(loadedCareerId);

            const progressKey = `subjectProgress_${loadedCareerId}`;
            const plannedKey = `plannedIds_${loadedCareerId}`;

            if (data[progressKey]) {
              setSubjectProgress(data[progressKey]);
            } else if (loadedCareerId === 'informatica' && data.subjectProgress) {
              setSubjectProgress(data.subjectProgress);
            } else if (loadedCareerId === 'informatica' && data.approvedIds && Array.isArray(data.approvedIds)) {
              const migrated: Record<string, SubjectState> = {};
              data.approvedIds.forEach((id: string) => {
                migrated[id] = { status: 'approved', attempts: 0 };
              });
              setSubjectProgress(migrated);
            } else {
              setSubjectProgress({});
            }

            if (data[plannedKey] && Array.isArray(data[plannedKey])) {
              setPlannedIds(new Set(data[plannedKey]));
            } else {
              setPlannedIds(new Set());
            }
          } else {
             setSubjectProgress({});
             setPlannedIds(new Set());
          }
        } catch (error) {
          console.error('Error loading user data:', error);
        } finally {
          setDbLoaded(true);
        }
      };
      loadUserData();
    } else {
      setSubjectProgress({});
      setPlannedIds(new Set());
      setDbLoaded(false);
    }
  }, [user, authLoading, viewingFriendId, guestCareerId]);

  // Cuando el usuario actual cambia su carrera localmente, actualizamos el target
  useEffect(() => {
    if (!viewingFriendId && userProfile?.careerId) {
      setTargetCareerId(userProfile.careerId);
    }
  }, [userProfile?.careerId, viewingFriendId]);

  // Cargar plan del amigo sincronizado si existe
  useEffect(() => {
    if (syncingFriendId && targetCareerId) {
      const loadSyncFriend = async () => {
        try {
          const docRef = await getDoc(doc(db, 'users', syncingFriendId));
          if (docRef.exists()) {
            const data = docRef.data();
            const plannedKey = `plannedIds_${targetCareerId}`;
            if (data[plannedKey] && Array.isArray(data[plannedKey])) {
              setSyncFriendPlannedIds(new Set(data[plannedKey]));
            } else {
              setSyncFriendPlannedIds(new Set());
            }
          }
        } catch (error) {
          console.error("Error loading sync friend data:", error);
        }
      };
      loadSyncFriend();
    } else {
      setSyncFriendPlannedIds(new Set());
    }
  }, [syncingFriendId, targetCareerId]);

  // Guardar en Firestore cada vez que cambia el progreso o el plan
  useEffect(() => {
    if (user && dbLoaded && !viewingFriendId) {
      const saveUserData = async () => {
        try {
          const progressKey = `subjectProgress_${targetCareerId}`;
          const plannedKey = `plannedIds_${targetCareerId}`;
          await setDoc(doc(db, 'users', user.uid), {
            [progressKey]: subjectProgress,
            [plannedKey]: Array.from(plannedIds)
          }, { mergeFields: [progressKey, plannedKey] });
        } catch (error) {
          console.error('Error saving user data:', error);
        }
      };
      const timeoutId = setTimeout(saveUserData, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [subjectProgress, plannedIds, user, dbLoaded, viewingFriendId, targetCareerId]);
  const checkPrereqsForCourse = useCallback((subjectId: string, progressMap: Record<string, SubjectState>, level = 1): boolean => {
    const materia = planEstudios.find(m => m.id === subjectId);
    if (!materia) return true;

    return materia.correlativas.every(cId => {
      const p = progressMap[cId];
      if (!p) return false;
      
      if (level === 1) {
        if (p.status === 'cursada' && p.attempts >= 3) return false;
        if (p.status === 'recursada') return false;
      } else {
        if (p.status !== 'approved') return false;
      }
      
      return checkPrereqsForCourse(cId, progressMap, level + 1);
    });
  }, [planEstudios]);

  const checkCanApprove = useCallback((subjectId: string, progressMap: Record<string, SubjectState>): boolean => {
    const materia = planEstudios.find(m => m.id === subjectId);
    if (!materia) return true;
    return materia.correlativas.every(cId => progressMap[cId]?.status === 'approved');
  }, [planEstudios]);

  const canApprove = useCallback((subjectId: string): boolean => {
    return checkCanApprove(subjectId, subjectProgress);
  }, [subjectProgress, checkCanApprove]);

  const getStatus = useCallback((id: string): SubjectStatus => {
    const prog = subjectProgress[id];
    if (prog) {
      if (prog.status === 'approved') return 'approved';
      if (prog.status === 'recursada') return 'recursada';
      if (prog.status === 'cursada') {
        return prog.attempts >= 3 ? 'recursada' : 'cursada';
      }
    }
    
    if (plannedIds.has(id)) return 'planned';

    const materia = planEstudios.find(m => m.id === id);
    if (!materia) return 'locked';

    const hasPrereqs = checkPrereqsForCourse(id, subjectProgress);
    
    return hasPrereqs ? 'available' : 'locked';
  }, [subjectProgress, plannedIds, planEstudios, checkPrereqsForCourse]);

  const handleNodeClick = useCallback((id: string) => {
    if (viewingFriendId) return;

    if (mode === 'approve') {
      setSubjectProgress(prev => {
        const next = { ...prev };
        const prog = next[id];
        
        if (!prog) {
          const hasPrereqs = checkPrereqsForCourse(id, next);
          if (hasPrereqs) {
            next[id] = { status: 'cursada', attempts: 0 };
          }
        } else if (prog.status === 'cursada' && prog.attempts < 3) {
          const allApproved = checkCanApprove(id, next);
          
          if (allApproved) {
            next[id] = { status: 'approved', attempts: prog.attempts };
          } else {
            delete next[id];
          }
        } else {
          delete next[id];
        }

        let changed = true;
        while (changed) {
          changed = false;
          for (const subjectId of Object.keys(next)) {
            const materia = planEstudios.find(m => m.id === subjectId);
            if (materia) {
              const hasPrereqs = checkPrereqsForCourse(subjectId, next);
              if (!hasPrereqs) {
                delete next[subjectId];
                changed = true;
              } else if (next[subjectId].status === 'approved') {
                const allApproved = checkCanApprove(subjectId, next);
                if (!allApproved) {
                  next[subjectId] = { status: 'cursada', attempts: next[subjectId].attempts };
                  changed = true;
                }
              }
            }
          }
        }
        return next;
      });
      setPlannedIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } else {
      setPlannedIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          const status = getStatus(id);
          if (status === 'available' || status === 'recursada') {
            next.add(id);
          }
        }
        return next;
      });
    }
  }, [mode, getStatus, viewingFriendId, checkPrereqsForCourse, checkCanApprove]);

  const incrementAttempt = useCallback((id: string) => {
    if (viewingFriendId) return;
    setSubjectProgress(prev => {
      const prog = prev[id];
      if (prog && prog.status === 'cursada' && prog.attempts < 3) {
        const next = { ...prev };
        next[id] = { ...prog, attempts: prog.attempts + 1 };
        
        if (next[id].attempts >= 3) {
          next[id].status = 'recursada';
          let changed = true;
          while (changed) {
            changed = false;
            for (const subjectId of Object.keys(next)) {
              if (subjectId === id) continue;
              const materia = planEstudios.find(m => m.id === subjectId);
              if (materia) {
                const hasPrereqs = materia.correlativas.every(cId => {
                  const p = next[cId];
                  return p && (p.status === 'approved' || (p.status === 'cursada' && p.attempts < 3));
                });
                if (!hasPrereqs) {
                  delete next[subjectId];
                  changed = true;
                }
              }
            }
          }
        }
        return next;
      }
      return prev;
    });
  }, [viewingFriendId, planEstudios]);

  const updateSubjectRecord = useCallback((id: string, updates: Partial<SubjectState>) => {
    if (viewingFriendId) return;
    setSubjectProgress(prev => {
      const prog = prev[id];
      if (!prog) return prev;
      
      const next = { ...prev };
      next[id] = { ...prog, ...updates };

      // Si pasa a recursada (ya sea por aplazo en parcial o por intentos de final), invalidar correlativas
      if (next[id].status === 'recursada' || (next[id].status === 'cursada' && next[id].attempts >= 3)) {
         let changed = true;
         while (changed) {
           changed = false;
           for (const subjectId of Object.keys(next)) {
             if (subjectId === id) continue;
             const materia = planEstudios.find(m => m.id === subjectId);
             if (materia) {
               const hasPrereqs = materia.correlativas.every(cId => {
                 const p = next[cId];
                 return p && (p.status === 'approved' || (p.status === 'cursada' && p.attempts < 3));
               });
               if (!hasPrereqs) {
                 delete next[subjectId];
                 changed = true;
               }
             }
           }
         }
      }
      return next;
    });
  }, [viewingFriendId, planEstudios]);

  const deleteSubjectRecord = useCallback((id: string) => {
    if (viewingFriendId) return;
    setSubjectProgress(prev => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];

      // Invalidar correlativas
      let changed = true;
      while (changed) {
        changed = false;
        for (const subjectId of Object.keys(next)) {
          const materia = planEstudios.find(m => m.id === subjectId);
          if (materia) {
            const hasPrereqs = materia.correlativas.every(cId => {
              const p = next[cId];
              return p && (p.status === 'approved' || (p.status === 'cursada' && p.attempts < 3));
            });
            if (!hasPrereqs) {
              delete next[subjectId];
              changed = true;
            }
          }
        }
      }
      return next;
    });
  }, [viewingFriendId, planEstudios]);

  const getRecommendations = useCallback(() => {
    const dependentsMap: Record<string, string[]> = {};
    planEstudios.forEach(m => {
      m.correlativas.forEach(c => {
        if (!dependentsMap[c]) dependentsMap[c] = [];
        dependentsMap[c].push(m.id);
      });
    });

    const calculateWeight = (id: string, visited: Set<string> = new Set()) => {
      if (visited.has(id)) return 0;
      visited.add(id);
      
      let weight = 1;
      const dependents = dependentsMap[id] || [];
      for (const dep of dependents) {
        weight += calculateWeight(dep, visited);
      }
      return weight;
    };

    const available = planEstudios.filter(m => {
      const s = getStatus(m.id);
      return s === 'available' || s === 'recursada';
    });
    
    return available.map(m => ({
      ...m,
      unlocksCount: calculateWeight(m.id) - 1 
    })).sort((a, b) => b.unlocksCount - a.unlocksCount).slice(0, 3);
  }, [getStatus, planEstudios]);

  const getSemesterDifficulty = useCallback(() => {
    let totalScore = 0;
    Array.from(plannedIds).forEach(id => {
      const mat = planEstudios.find(m => m.id === id);
      const diff = mat?.dificultad || 'Medio';
      const scoreMap: Record<string, number> = {
        'Fácil': 1,
        'Medio-Fácil': 2,
        'Medio': 3,
        'Medio-Difícil': 4,
        'Difícil': 5,
        'Difícil Suprema': 6
      };
      totalScore += scoreMap[diff] || 3;
    });
    
    let label = "Sin materias";
    if (totalScore > 0) {
      if (totalScore <= 6) label = "Liviano 🟢";
      else if (totalScore <= 10) label = "Equilibrado 🟡";
      else if (totalScore <= 14) label = "Exigente 🟠";
      else label = "Muy Pesado ☠️";
    }

    return { score: totalScore, label };
  }, [plannedIds, planEstudios]);

  const totalApproved = Object.values(subjectProgress).filter(p => p.status === 'approved').length;
  const progressPercentage = planEstudios.length > 0 ? Math.round((totalApproved / planEstudios.length) * 100) : 0;

  const getIntermediateTitleProgress = useCallback(() => {
    const career = getCarreraById(targetCareerId);
    if (!career || !career.intermediateTitle) {
      return null;
    }

    const requiredSubjects = planEstudios.filter(m => m.anio <= 3);
    const totalRequired = requiredSubjects.length;
    
    if (totalRequired === 0) return null;

    const approvedCount = requiredSubjects.filter(m => {
      const p = subjectProgress[m.id];
      return p && p.status === 'approved';
    }).length;

    return {
      title: career.intermediateTitle,
      hasTitle: approvedCount === totalRequired,
      approvedCount,
      totalRequired,
      percentage: Math.round((approvedCount / totalRequired) * 100)
    };
  }, [targetCareerId, planEstudios, subjectProgress]);

  return {
    mode,
    setMode,
    subjectProgress,
    plannedIds,
    getStatus,
    handleNodeClick,
    incrementAttempt,
    updateSubjectRecord,
    deleteSubjectRecord,
    progressPercentage,
    getRecommendations,
    getSemesterDifficulty,
    totalApproved,
    totalSubjects: planEstudios.length,
    planEstudios,
    careerId: targetCareerId,
    syncFriendPlannedIds,
    canApprove,
    getIntermediateTitleProgress
  };
}
