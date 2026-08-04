import { useState } from 'react';
import { X, Save, AlertTriangle } from 'lucide-react';
import type { SubjectState } from '../hooks/useCorrelativas';
import { cn } from '../lib/utils';

interface GradeModalProps {
  subjectName: string;
  subjectState: SubjectState;
  onSave: (updates: Partial<SubjectState>) => void;
  onReset: () => void;
  onClose: () => void;
}

export function GradeModal({ subjectName, subjectState, onSave, onReset, onClose }: GradeModalProps) {
  const [p1, setP1] = useState<string>(subjectState.p1 ? subjectState.p1.toString() : '');
  const [p2, setP2] = useState<string>(subjectState.p2 ? subjectState.p2.toString() : '');
  const [finalGrade, setFinalGrade] = useState<string>(
    subjectState.finalGrade && (!subjectState.p1 || !subjectState.p2 || (subjectState.p1 < 7 || subjectState.p2 < 7)) 
      ? subjectState.finalGrade.toString() 
      : ''
  );

  const n1 = parseFloat(p1);
  const n2 = parseFloat(p2);
  const nf = parseFloat(finalGrade);

  const [manualPromoGrade, setManualPromoGrade] = useState<number | null>(
    subjectState.finalGrade && subjectState.finalGrade >= 7 ? subjectState.finalGrade : null
  );

  const avg = (n1 + n2) / 2;
  const hasDecimal = !isNaN(avg) && (n1 + n2) % 2 !== 0;
  
  let currentPromoGrade = avg;
  if (hasDecimal) {
    if (manualPromoGrade === Math.floor(avg) || manualPromoGrade === Math.ceil(avg)) {
      currentPromoGrade = manualPromoGrade;
    } else {
      currentPromoGrade = Math.ceil(avg);
    }
  }

  const isP1Valid = !isNaN(n1) && n1 >= 1 && n1 <= 10;
  const isP2Valid = !isNaN(n2) && n2 >= 1 && n2 <= 10;
  
  let condicion = 'Cursando';
  let requiereFinal = false;
  let esRecursante = false;
  let esPromocion = false;

  if (isP1Valid && isP2Valid) {
    if (n1 < 4 || n2 < 4) {
      condicion = 'Recursante (Aplazo en parcial)';
      esRecursante = true;
    } else if (n1 >= 7 && n2 >= 7) {
      condicion = 'Promocionada';
      esPromocion = true;
    } else {
      condicion = 'A Final';
      requiereFinal = true;
    }
  } else if ((isP1Valid && n1 < 4) || (isP2Valid && n2 < 4)) {
    condicion = 'Recursante (Aplazo en parcial)';
    esRecursante = true;
  }

  const handleSave = () => {
    const updates: Partial<SubjectState> = {};
    
    if (isP1Valid) updates.p1 = n1;
    if (isP2Valid) updates.p2 = n2;

    if (esRecursante) {
      updates.status = 'recursada';
      updates.finalGrade = undefined;
    } else if (esPromocion) {
      updates.status = 'approved';
      updates.finalGrade = currentPromoGrade;
    } else if (requiereFinal) {
      const isNfValid = !isNaN(nf) && nf >= 1 && nf <= 10;
      if (isNfValid) {
        updates.finalGrade = nf;
        if (nf >= 4) {
          updates.status = 'approved';
        } else {
          updates.status = 'cursada'; // Sigue en final
          updates.attempts = (subjectState.attempts || 0) + 1;
          if (updates.attempts >= 3) {
            updates.status = 'recursada';
          }
        }
      } else {
        updates.status = 'cursada';
        updates.finalGrade = undefined;
      }
    } else {
      updates.status = 'cursada';
    }

    onSave(updates);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-100 truncate pr-4">{subjectName}</h2>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0">
            <X size={18} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase">Parcial 1</label>
              <input 
                type="number" 
                min="1" max="10" 
                value={p1}
                onChange={e => setP1(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Ej: 7"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase">Parcial 2</label>
              <input 
                type="number" 
                min="1" max="10" 
                value={p2}
                onChange={e => setP2(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Ej: 8"
              />
            </div>
          </div>

          <div className={cn(
            "p-3 rounded-xl border flex items-center gap-3 transition-all",
            esPromocion ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
            esRecursante ? "bg-red-500/10 border-red-500/30 text-red-400" :
            requiereFinal ? "bg-amber-500/10 border-amber-500/30 text-amber-400" :
            "bg-slate-800/50 border-slate-700 text-slate-300"
          )}>
            <div className="flex-1 font-medium">{condicion}</div>
            {esPromocion && (
              <div className="flex items-center gap-2">
                {hasDecimal ? (
                  <>
                    <span className="text-xs text-emerald-500/70 mr-1 uppercase font-bold">Queda en:</span>
                    <button 
                      onClick={() => setManualPromoGrade(Math.floor(avg))}
                      className={cn("px-3 py-1 rounded-lg font-bold transition-colors", currentPromoGrade === Math.floor(avg) ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30" : "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20")}
                    >
                      {Math.floor(avg)}
                    </button>
                    <button 
                      onClick={() => setManualPromoGrade(Math.ceil(avg))}
                      className={cn("px-3 py-1 rounded-lg font-bold transition-colors", currentPromoGrade === Math.ceil(avg) ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30" : "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20")}
                    >
                      {Math.ceil(avg)}
                    </button>
                  </>
                ) : (
                  <div className="text-lg font-bold bg-emerald-500/20 px-3 py-1 rounded-lg">
                    Nota: {avg}
                  </div>
                )}
              </div>
            )}
          </div>

          {requiereFinal && (
            <div className="flex flex-col gap-1.5 animate-in slide-in-from-top-2">
              <label className="text-xs font-semibold text-amber-400 uppercase flex items-center gap-1">
                <AlertTriangle size={12} /> Nota de Final (Intento {Math.min((subjectState.attempts || 0) + 1, 3)}/3)
              </label>
              <input 
                type="number" 
                min="1" max="10" 
                value={finalGrade}
                onChange={e => setFinalGrade(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/50 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="Si ya lo rendiste..."
              />
              {(subjectState.attempts || 0) > 0 && (
                <span className="text-[10px] text-slate-500">Ya has desaprobado {subjectState.attempts} vez/veces este final.</span>
              )}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center gap-2">
          <button 
             onClick={() => {
                onReset();
                onClose();
             }}
             className="px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors"
          >
            Borrar Progreso
          </button>
          <div className="flex gap-2">
            {subjectState.status === 'cursada' && !esRecursante && !esPromocion && !requiereFinal && (
               <button 
                  onClick={() => {
                     onSave({ status: 'approved', finalGrade: 7 }); 
                     onClose();
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
               >
                 Aprobar sin notas
               </button>
            )}
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              <Save size={16} /> Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
