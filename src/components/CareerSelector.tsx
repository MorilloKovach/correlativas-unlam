import { useState } from 'react';
import { departamentos } from '../data/carreras';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, BookOpen, GraduationCap, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

interface CareerSelectorProps {
  onComplete: () => void;
  isChangeMode?: boolean; 
  onCancel?: () => void;
  isGuest?: boolean;
  onGuestComplete?: (careerId: string) => void;
}

export function CareerSelector({ onComplete, isChangeMode = false, onCancel, isGuest = false, onGuestComplete }: CareerSelectorProps) {
  const { userProfile, updateCareerId, logout } = useAuth();
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<string | null>(userProfile?.careerId || null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!selectedCareer) return;
    
    if (isGuest && onGuestComplete) {
       onGuestComplete(selectedCareer);
       return;
    }

    setLoading(true);
    await updateCareerId(selectedCareer);
    setLoading(false);
    onComplete();
  };

  const selectedDeptObj = departamentos.find(d => d.id === selectedDept);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {isChangeMode ? 'Cambiar de Carrera' : '¡Bienvenido!'}
            </h2>
            <p className="text-slate-400 mt-1 text-sm">
              {isChangeMode ? 'Selecciona tu nueva carrera. Tu progreso actual se guardará aparte.' : 'Por favor selecciona tu departamento y carrera para comenzar a organizar tus correlativas.'}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
          
          {/* Paso 1: Departamento */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-blue-400" />
              1. Selecciona tu Departamento
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {departamentos.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => {
                    setSelectedDept(dept.id);
                    setSelectedCareer(null);
                  }}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl border transition-all",
                    selectedDept === dept.id 
                      ? "bg-blue-500/10 border-blue-500/50 text-blue-400" 
                      : "bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                  )}
                >
                  <div className="font-medium">{dept.name}</div>
                  <div className="text-xs opacity-70 mt-1">{dept.carreras.length} carreras disponibles</div>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 2: Carrera */}
          {selectedDeptObj && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap size={16} className="text-emerald-400" />
                2. Selecciona tu Carrera
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDeptObj.carreras.map(carrera => (
                  <button
                    key={carrera.id}
                    onClick={() => setSelectedCareer(carrera.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-xl border transition-all",
                      selectedCareer === carrera.id 
                        ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
                        : "bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                    )}
                  >
                    <div className="font-medium">{carrera.name}</div>
                    <div className="text-xs opacity-70 mt-1">{carrera.planEstudios.length} materias en el plan</div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center">
          {isGuest ? (
            <button
              onClick={onCancel}
              className="text-slate-400 hover:text-slate-200 text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft size={16} /> Volver
            </button>
          ) : !isChangeMode ? (
            <button
              onClick={() => logout()}
              className="text-slate-400 hover:text-slate-200 text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <LogOut size={16} /> Cerrar Sesión
            </button>
          ) : (
            <button
              onClick={onCancel}
              className="text-slate-400 hover:text-slate-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Cancelar
            </button>
          )}

          <button
            onClick={handleSave}
            disabled={!selectedCareer || loading}
            className={cn(
              "px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2",
              selectedCareer && !loading
                ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            )}
          >
            {loading ? 'Guardando...' : 'Comenzar'}
          </button>
        </div>

      </div>
    </div>
  );
}
