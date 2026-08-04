import { Handle, Position } from '@xyflow/react';
import { cn } from '../lib/utils';
import { Check, Lock, BookOpen, CalendarPlus, FolderOpen, AlertCircle, Plus } from 'lucide-react';
import type { SubjectStatus } from '../hooks/useCorrelativas';

interface SubjectNodeProps {
  data: {
    id: string;
    label: string;
    status: SubjectStatus;
    attempts: number;
    onClick: (id: string) => void;
    onIncrementAttempt: (id: string) => void;
  };
}

export function SubjectNode({ data }: SubjectNodeProps) {
  const { id, label, status, attempts, onClick, onIncrementAttempt } = data;

  const baseClasses = "relative w-[240px] rounded-xl p-4 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] flex flex-col gap-3 font-sans border-2 border-transparent";
  
  const statusClasses = {
    'approved': 'bg-emerald-900/40 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-50 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
    'cursada': 'bg-gradient-to-br from-emerald-900/40 to-amber-900/40 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-50 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]',
    'available': 'glass-available text-blue-50 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
    'planned': 'bg-amber-500/20 backdrop-blur-md border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] text-amber-50 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]',
    'locked': 'glass-locked text-slate-300 grayscale-[50%]',
    'recursada': 'bg-red-900/20 border-red-500/30 text-red-100 hover:border-red-500/50'
  };

  const Icon = status === 'approved' ? Check : status === 'cursada' ? Check : status === 'planned' ? CalendarPlus : (status === 'available' || status === 'recursada') ? BookOpen : Lock;
  const iconColor = status === 'approved' ? 'text-emerald-400' : status === 'cursada' ? 'text-amber-400' : status === 'planned' ? 'text-amber-400' : (status === 'available' || status === 'recursada') ? 'text-blue-400' : 'text-slate-500';

  const driveSearchUrl = `https://drive.google.com/drive/u/0/search?q=${encodeURIComponent(label)}%20parent:1Du25znz9DURkQG82mZ5AJdRVT3c5LfR7`;

  return (
    <div className="relative">
      <div 
        className={cn(baseClasses, statusClasses[status])}
        onClick={() => onClick(id)}
      >
        <Handle 
          type="target" 
          position={Position.Left} 
          className="!bg-slate-700 !w-3 !h-3 !border-2 !border-slate-800"
        />
        
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-1 bg-black/30 rounded-md shadow-inner text-slate-300 flex items-center gap-2">
              #{id}
            </span>
            {status === 'cursada' && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-sm border border-amber-500/30">
                Cursada
              </span>
            )}
            {status === 'recursada' && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-500/20 px-2 py-0.5 rounded-sm border border-red-500/30 flex items-center gap-1">
                <AlertCircle size={10} /> Recursar
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <a 
              href={driveSearchUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-full bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/40 transition-colors flex items-center justify-center"
              title={`Buscar material de ${label} en Drive`}
            >
              <FolderOpen size={16} strokeWidth={2} />
            </a>
            <div className={cn("p-1.5 rounded-full bg-black/20", iconColor)}>
              <Icon size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div className="text-sm font-medium leading-tight min-h-[40px]">
          {label}
        </div>

        {status === 'cursada' && (
          <div 
            className="mt-1 flex items-center justify-between bg-black/30 rounded-lg p-2 border border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs text-slate-300 font-medium">Llamados a Final</span>
            <div className="flex items-center gap-3">
              <span className={cn("text-xs font-bold", attempts > 0 ? "text-amber-400" : "text-slate-400")}>
                {attempts}/3
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIncrementAttempt(id);
                }}
                className="bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 p-1 rounded-md transition-colors"
                title="Anotar final desaprobado"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        )}

        <Handle 
          type="source" 
          position={Position.Right} 
          className="!bg-slate-700 !w-3 !h-3 !border-2 !border-slate-800"
        />
      </div>
    </div>
  );
}
