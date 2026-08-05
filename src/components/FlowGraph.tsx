import { useEffect, useRef, useState, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  BackgroundVariant,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { LayoutList, CheckSquare, Gauge, ChevronUp, ChevronDown, GraduationCap } from 'lucide-react';

import { SubjectNode } from './SubjectNode';
import { GradeModal } from './GradeModal';
import { useCorrelativas } from '../hooks/useCorrelativas';
import { getCarreraById } from '../data/carreras';
import { cn } from '../lib/utils';

const nodeTypes = {
  subject: SubjectNode,
};

const COLUMN_WIDTH = 320;
const ROW_HEIGHT = 120;

interface FlowGraphProps {
  viewingFriendId?: string | null;
  syncingFriendId?: string | null;
  guestCareerId?: string | null;
}

export function FlowGraph({ viewingFriendId, syncingFriendId, guestCareerId }: FlowGraphProps) {
  const { 
    mode, 
    setMode,
    subjectProgress,
    getStatus, 
    handleNodeClick,
    incrementAttempt,
    updateSubjectRecord,
    deleteSubjectRecord,
    progressPercentage, 
    totalApproved, 
    totalSubjects, 
    getRecommendations,
    getSemesterDifficulty,
    planEstudios,
    careerId,
    syncFriendPlannedIds,
    plannedIds,
    canApprove
  } = useCorrelativas(viewingFriendId, guestCareerId, syncingFriendId);
  
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGradeNode, setSelectedGradeNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const recommendations = getRecommendations();
  const difficulty = getSemesterDifficulty();
  const lastCareerIdRef = useRef(careerId);

  const handleNodeClickWrapper = useCallback((id: string) => {
    if (viewingFriendId) return;
    const status = getStatus(id);
    if (mode === 'approve' && (status === 'cursada' || status === 'approved' || status === 'recursada')) {
      setSelectedGradeNode(id);
    } else {
      handleNodeClick(id);
    }
  }, [mode, getStatus, handleNodeClick, viewingFriendId]);

  const approvedSubjects = Object.values(subjectProgress).filter(p => p.status === 'approved');
  const sumGrades = approvedSubjects.reduce((acc, curr) => acc + (curr.finalGrade || 7), 0);
  const promedio = approvedSubjects.length > 0 ? (sumGrades / approvedSubjects.length).toFixed(2) : 'N/A';

  // Calculate layout and generate nodes/edges whenever status changes
  useEffect(() => {
    const saved = localStorage.getItem(`correlativas-node-positions-v3-${careerId}`);
    const savedPositions: Record<string, { x: number, y: number }> = saved ? JSON.parse(saved) : {};

    const careerChanged = lastCareerIdRef.current !== careerId;
    if (careerChanged) {
      lastCareerIdRef.current = careerId;
    }

    setNodes((currentNodes) => {
      if (currentNodes.length === 0 || careerChanged) {
        // Group by column
        const columns: Record<number, typeof planEstudios> = {};
        planEstudios.forEach(materia => {
          const col = (materia.anio - 1) * 2 + (materia.cuatrimestre - 1);
          if (!columns[col]) columns[col] = [];
          columns[col].push(materia);
        });

        const maxCol = Math.max(...Object.keys(columns).map(Number), -1);
        const yPositions: Record<string, number> = {};
        const newNodes: any[] = [];
        const occupiedSlots: Record<number, Set<number>> = {};

        for (let col = 0; col <= maxCol; col++) {
          const materiasInCol = columns[col] || [];
          if (!occupiedSlots[col]) occupiedSlots[col] = new Set();
          
          // Pre-sort to process nodes with dependencies first if we wanted to,
          // but just sorting by average Y is good so they grab their desired slots first.
          materiasInCol.sort((a, b) => {
             const getAvgY = (mat: typeof a) => {
                const depsY = mat.correlativas
                  .map(corrId => yPositions[corrId])
                  .filter(y => y !== undefined);
                if (depsY.length === 0) return -1;
                return depsY.reduce((sum, val) => sum + val, 0) / depsY.length;
             };
             return getAvgY(a) - getAvgY(b);
          });

          // Assign Y positions using the nearest available slot
          materiasInCol.forEach((materia) => {
            let desiredSlot = 0;
            const depsY = materia.correlativas
                  .map(corrId => yPositions[corrId])
                  .filter(y => y !== undefined);
            
            if (depsY.length > 0) {
               desiredSlot = Math.round(depsY.reduce((sum, val) => sum + val, 0) / depsY.length);
            }
            
            // Find nearest available slot
            let slot = desiredSlot;
            let offset = 0;
            while (true) {
               if (!occupiedSlots[col].has(desiredSlot + offset) && (desiredSlot + offset) >= 0) {
                  slot = desiredSlot + offset;
                  break;
               }
               if (offset > 0) {
                  if (!occupiedSlots[col].has(desiredSlot - offset) && (desiredSlot - offset) >= 0) {
                     slot = desiredSlot - offset;
                     break;
                  }
               }
               offset++;
            }
            
            occupiedSlots[col].add(slot);
            yPositions[materia.id] = slot;

            const position = savedPositions[materia.id] || {
              x: col * COLUMN_WIDTH,
              y: slot * ROW_HEIGHT,
            };

            let syncStatus: 'match' | 'friend_planned' | undefined = undefined;
            if (syncingFriendId && syncFriendPlannedIds.has(materia.id)) {
               syncStatus = plannedIds.has(materia.id) ? 'match' : 'friend_planned';
            }

            newNodes.push({
              id: materia.id,
              type: 'subject',
              position,
              targetPosition: 'left',
              sourcePosition: 'right',
              data: {
                id: materia.id,
                label: materia.label,
                status: getStatus(materia.id),
                attempts: subjectProgress[materia.id]?.attempts || 0,
                syncStatus,
                canApprove: canApprove(materia.id),
                onClick: handleNodeClickWrapper,
                onIncrementAttempt: incrementAttempt,
                onHover: setHoveredNode,
              },
            });
          });
        }
        return newNodes;
      } else {
        // Update existing nodes to preserve positions
        return currentNodes.map((node) => {
          const materia = planEstudios.find((m) => m.id === node.id);
          if (!materia) return node;

          let syncStatus: 'match' | 'friend_planned' | undefined = undefined;
          if (syncingFriendId && syncFriendPlannedIds.has(materia.id)) {
             syncStatus = plannedIds.has(materia.id) ? 'match' : 'friend_planned';
          }

          return {
            ...node,
            targetPosition: 'left',
            sourcePosition: 'right',
            data: {
              ...node.data,
              status: getStatus(materia.id),
              attempts: subjectProgress[materia.id]?.attempts || 0,
              syncStatus,
              canApprove: canApprove(materia.id),
              onClick: handleNodeClickWrapper,
              onIncrementAttempt: incrementAttempt,
              onHover: setHoveredNode,
            },
          };
        });
      }
    });

    const newEdges = planEstudios.flatMap((materia) =>
      materia.correlativas.map((corrId) => {
        const sourceStatus = getStatus(corrId);
        const targetStatus = getStatus(materia.id);
        
        let strokeColor = '#334155'; // default slate-700
        let animated = false;

        if (sourceStatus === 'approved') {
          if (targetStatus === 'approved') {
            strokeColor = '#22c55e'; // green
          } else if (targetStatus === 'cursada') {
            strokeColor = '#10b981'; // emerald
          } else if (targetStatus === 'available' || targetStatus === 'recursada') {
            strokeColor = '#3b82f6'; // blue
            animated = true;
          } else if (targetStatus === 'planned') {
            strokeColor = '#f59e0b'; // amber
            animated = true;
          } else {
             strokeColor = '#64748b'; // slate-500
          }
        } else if (sourceStatus === 'cursada') {
          if (targetStatus === 'cursada') {
            strokeColor = '#f59e0b'; // amber
          } else if (targetStatus === 'available' || targetStatus === 'recursada') {
            strokeColor = '#8b5cf6'; // violet
            animated = true;
          } else if (targetStatus === 'planned') {
            strokeColor = '#f59e0b'; // amber
            animated = true;
          } else {
             strokeColor = '#64748b'; // slate-500
          }
        } else if (sourceStatus === 'planned' && targetStatus === 'planned') {
           strokeColor = '#f59e0b'; // amber
        }

        return {
          id: `e-${corrId}-${materia.id}`,
          source: corrId,
          target: materia.id,
          animated,
          style: { 
            stroke: strokeColor,
            strokeWidth: sourceStatus === 'approved' || sourceStatus === 'cursada' || sourceStatus === 'planned' ? 2 : 1.5,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: strokeColor,
          },
        };
      })
    );

    setEdges(newEdges);
  }, [getStatus, handleNodeClick, incrementAttempt, subjectProgress, setNodes, setEdges, planEstudios, careerId]);

  // Handle hover effect
  useEffect(() => {
    setNodes((nds) => nds.map((node) => {
      if (!hoveredNode) {
        return { ...node, style: { ...node.style, opacity: 1, transition: 'opacity 0.2s' } };
      }
      
      const hoveredMateria = planEstudios.find(m => m.id === hoveredNode);
      const isHovered = node.id === hoveredNode;
      const isBackward = hoveredMateria?.correlativas.includes(node.id) || false;
      const isForward = planEstudios.find(m => m.id === node.id)?.correlativas.includes(hoveredNode) || false;
      
      const isHighlighted = isHovered || isBackward || isForward;
      
      return {
        ...node,
        style: {
          ...node.style,
          opacity: isHighlighted ? 1 : 0.2,
          transition: 'opacity 0.2s'
        }
      };
    }));

    setEdges((eds) => eds.map((edge) => {
      if (!hoveredNode) {
        return { ...edge, style: { ...edge.style, opacity: 1, transition: 'opacity 0.2s' } };
      }
      
      const isConnected = edge.source === hoveredNode || edge.target === hoveredNode;
      
      return {
        ...edge,
        style: {
          ...edge.style,
          opacity: isConnected ? 1 : 0.1,
          transition: 'opacity 0.2s'
        }
      };
    }));
  }, [hoveredNode, planEstudios, setNodes, setEdges]);

  // Save positions when they change (e.g. from dragging)
  useEffect(() => {
    if (nodes.length > 0) {
      const positions: Record<string, { x: number, y: number }> = {};
      let hasChanges = false;
      
      const storageKey = `correlativas-node-positions-v3-${careerId}`;
      const saved = localStorage.getItem(storageKey);
      const savedPositions = saved ? JSON.parse(saved) : {};

      nodes.forEach((node) => {
        positions[node.id] = node.position;
        if (!savedPositions[node.id] || 
            savedPositions[node.id].x !== node.position.x || 
            savedPositions[node.id].y !== node.position.y) {
          hasChanges = true;
        }
      });

      if (hasChanges) {
        localStorage.setItem(storageKey, JSON.stringify(positions));
      }
    }
  }, [nodes, careerId]);

  const carrera = getCarreraById(careerId);

  return (
    <div className="w-full h-full flex flex-col bg-slate-950">
      <header className="absolute bottom-2 left-2 right-2 sm:bottom-auto sm:right-auto sm:top-4 sm:left-4 z-20 glass rounded-2xl p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 sm:min-w-[320px] sm:max-w-[350px] max-h-[80dvh] sm:max-h-[calc(100dvh-2rem)] shadow-2xl border border-slate-700/50 transition-all duration-300">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent truncate pr-2">
            {carrera?.name || 'Cargando...'}
          </h1>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {isSidebarOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
        
        <div className={cn(
          "flex-col gap-3 sm:gap-4 overflow-y-auto sm:flex",
          isSidebarOpen ? "flex" : "hidden"
        )}>
          <div className="flex bg-slate-800/80 p-1 rounded-lg shrink-0">
            <button 
              onClick={() => setMode('approve')}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2 px-3 rounded-md transition-all",
                mode === 'approve' ? "bg-slate-700 text-green-400 shadow-sm" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <CheckSquare size={14} /> Aprobar
            </button>
            <button 
              onClick={() => setMode('plan')}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2 px-3 rounded-md transition-all",
                mode === 'plan' ? "bg-slate-700 text-amber-400 shadow-sm" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <LayoutList size={14} /> Planificar
            </button>
          </div>
        
        {mode === 'approve' && (
          <div className="flex flex-col gap-3 mt-1">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs text-slate-300 font-medium">
                <span>Progreso de la carrera</span>
                <span>{totalApproved} / {totalSubjects} ({progressPercentage}%)</span>
              </div>
              <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <GraduationCap size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Promedio General</span>
                <span className="text-xl font-bold text-slate-200">{promedio}</span>
              </div>
            </div>
          </div>
        )}

        {mode === 'plan' && (
          <div className="flex flex-col gap-3 mt-1 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-amber-400" />
              <span className="text-sm font-semibold text-slate-200">Dificultad del Cuatrimestre</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400">Total puntos: {difficulty.score}</span>
              <span className="text-sm font-bold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-md inline-block w-fit">
                {difficulty.label}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight mt-1">
              Haz clic en materias habilitadas para sumarlas a tu plan y ver cómo cambia la dificultad estimada.
            </p>
          </div>
        )}

        {recommendations.length > 0 && mode === 'approve' && (
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-700/50 mt-1">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Materias Recomendadas</span>
            <div className="flex flex-col gap-2">
              {recommendations.map(rec => (
                <div key={rec.id} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-2 text-sm border border-slate-700/50">
                  <span className="text-slate-200 truncate pr-2" title={rec.label}>{rec.label}</span>
                  <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md whitespace-nowrap" title="Materias que desbloquea en el futuro">
                    +{rec.unlocksCount} desbl.
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </header>

      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          minZoom={0.4}
          maxZoom={1.5}
          panOnScroll={true}
          zoomOnPinch={true}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#334155" variant={BackgroundVariant.Dots} gap={24} size={2} />
          <Controls 
            position="bottom-right"
            className="!bg-slate-900 !border-slate-600 !fill-white shadow-2xl [&>button]:!bg-slate-800 [&>button]:!border-slate-700 hover:[&>button]:!bg-indigo-600 transition-colors sm:mb-4 sm:mr-4 mb-2 mr-2" 
          />
        </ReactFlow>
      </div>

      {selectedGradeNode && (
        <GradeModal
          subjectName={planEstudios.find(m => m.id === selectedGradeNode)?.label || ''}
          subjectState={subjectProgress[selectedGradeNode] || { status: 'cursada', attempts: 0 }}
          canApprove={canApprove(selectedGradeNode)}
          onSave={(updates) => updateSubjectRecord(selectedGradeNode, updates)}
          onReset={() => deleteSubjectRecord(selectedGradeNode)}
          onClose={() => setSelectedGradeNode(null)}
        />
      )}
    </div>
  );
}
