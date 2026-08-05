import { useState } from 'react';
import { FlowGraph } from './components/FlowGraph';
import { useAuth } from './contexts/AuthContext';
import { FriendsPanel } from './components/FriendsPanel';
import { CareerSelector } from './components/CareerSelector';
import { LogOut, Loader2, Users, ArrowLeft, BookOpen, GraduationCap } from 'lucide-react';
import { getCarreraById } from './data/carreras';

function App() {
  const { user, userProfile, loading, login, logout } = useAuth();
  const [isFriendsPanelOpen, setIsFriendsPanelOpen] = useState(false);
  const [viewingFriend, setViewingFriend] = useState<{uid: string, name: string} | null>(null);
  const [syncingFriend, setSyncingFriend] = useState<{uid: string, name: string} | null>(null);
  const [isChangingCareer, setIsChangingCareer] = useState(false);
  
  // Guest mode state
  const [guestCareerId, setGuestCareerId] = useState<string | null>(null);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);

  // Mostrar el selector de carrera si el usuario está logueado, ya cargó su perfil y no tiene una carrera,
  // o si hizo click en "Cambiar Carrera"
  const needsCareerSelection = user && userProfile && !userProfile.careerId;
  const showCareerSelector = needsCareerSelection || isChangingCareer || isGuestSelectorOpen;

  const activeCareerId = userProfile?.careerId || guestCareerId;
  const currentCareerName = activeCareerId ? getCarreraById(activeCareerId)?.name : null;

  // Si no hay usuario y no hay carrera de invitado seleccionada, mostramos la Landing Page
  if (!loading && !user && !guestCareerId && !isGuestSelectorOpen) {
    return (
      <main className="w-screen h-[100dvh] overflow-hidden relative bg-slate-950 flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        
        <div className="relative z-10 max-w-3xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-slate-900/50 border border-slate-800 shadow-2xl mb-4">
            <GraduationCap className="w-16 h-16 text-emerald-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tight">
            Correlativas UNLaM
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Organiza tu carrera, planifica tus próximos cuatrimestres y sigue tu progreso académico de forma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={login}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 border border-slate-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Iniciar con Google</span>
            </button>
            
            <button 
              onClick={() => setIsGuestSelectorOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold rounded-2xl border border-slate-700 transition-all hover:border-slate-500"
            >
              Entrar como invitado
            </button>
          </div>
          
          <p className="text-xs text-slate-500 pt-8">
            * El progreso como invitado no se guardará al cerrar la página.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-screen h-[100dvh] overflow-hidden relative">
      {/* Solo renderizamos el FlowGraph si tenemos una carrera seleccionada */}
      {activeCareerId && (
        <FlowGraph 
          key={activeCareerId} 
          viewingFriendId={viewingFriend?.uid} 
          syncingFriendId={syncingFriend?.uid}
          guestCareerId={guestCareerId} 
        />
      )}
      
      {/* Banner de Viendo a Amigo */}
      {viewingFriend && (
        <div className="absolute bottom-20 sm:bottom-auto sm:top-0 left-0 right-0 z-40 flex justify-center sm:mt-4 pointer-events-none">
          <div className="bg-amber-500/20 backdrop-blur-md border border-amber-500/50 text-amber-200 px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-3 sm:gap-4 shadow-2xl shadow-amber-900/20 animate-in slide-in-from-bottom-4 sm:slide-in-from-top-4 pointer-events-auto mx-4 text-center">
            <span className="font-semibold text-xs sm:text-base truncate max-w-[150px] sm:max-w-none">Viendo el mapa de {viewingFriend.name}</span>
            <button 
              onClick={() => setViewingFriend(null)}
              className="flex items-center gap-1 sm:gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-100 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              <ArrowLeft size={14} className="sm:w-4 sm:h-4" /> Volver
            </button>
          </div>
        </div>
      )}

      {/* Auth Floating Button & Friends Button */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-40 flex flex-col items-end gap-2 sm:gap-3">
        {loading ? (
          <div className="p-3 rounded-full bg-slate-900/50 backdrop-blur border border-slate-700 shadow-xl flex items-center justify-center">
            <Loader2 className="animate-spin text-slate-400" size={20} />
          </div>
        ) : user ? (
          <>
            <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700 shadow-xl rounded-full p-1.5 pr-4">
              <img 
                src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=random`} 
                alt="Avatar" 
                className="w-8 h-8 rounded-full border border-slate-600"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-200">{user.displayName}</span>
                <span className="text-[10px] text-green-400 truncate max-w-[120px]">
                  {currentCareerName || 'Progreso en la nube'}
                </span>
              </div>
              <div className="flex items-center gap-1 ml-2 border-l border-slate-700 pl-2">
                <button 
                  onClick={() => setIsChangingCareer(true)}
                  className="p-1.5 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-blue-400"
                  title="Cambiar de Carrera"
                >
                  <BookOpen size={16} />
                </button>
                <button 
                  onClick={logout}
                  className="p-1.5 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-red-400"
                  title="Cerrar sesión"
                >
                  <LogOut size={16} />
                </button>
              </div>
            </div>
            
            {/* Botón de Amigos */}
            <button 
              onClick={() => setIsFriendsPanelOpen(true)}
              className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-slate-700 shadow-xl rounded-full p-2 sm:px-4 sm:py-2 hover:bg-slate-800 transition-colors text-slate-200"
              title="Amigos"
            >
              <Users size={16} className="text-indigo-400" />
              <span className="hidden sm:inline text-sm font-semibold">Amigos</span>
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700 shadow-xl rounded-full p-1.5 pr-4">
             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
                <Users size={14} className="text-slate-400" />
             </div>
             <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-200">Invitado</span>
                <span className="text-[10px] text-amber-400 truncate max-w-[120px]">
                  {currentCareerName || 'Sin progreso guardado'}
                </span>
             </div>
             <div className="flex items-center gap-1 ml-2 border-l border-slate-700 pl-2">
                <button 
                  onClick={() => setIsGuestSelectorOpen(true)}
                  className="p-1.5 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-blue-400"
                  title="Cambiar de Carrera"
                >
                  <BookOpen size={16} />
                </button>
                <button 
                  onClick={() => {
                     setGuestCareerId(null);
                     setIsGuestSelectorOpen(false);
                  }}
                  className="p-1.5 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-red-400"
                  title="Salir"
                >
                  <LogOut size={16} />
                </button>
              </div>
          </div>
        )}
      </div>

      {isFriendsPanelOpen && (
        <FriendsPanel 
          onClose={() => setIsFriendsPanelOpen(false)}
          onViewFriend={(uid, name) => {
            setViewingFriend({ uid, name });
            setSyncingFriend(null);
          }}
          onSyncFriend={(uid, name) => {
            setSyncingFriend({ uid, name });
            setViewingFriend(null);
            setIsFriendsPanelOpen(false);
          }}
        />
      )}

      {showCareerSelector && (
        <CareerSelector 
          isChangeMode={isChangingCareer} 
          onComplete={() => setIsChangingCareer(false)}
          onCancel={() => {
             setIsChangingCareer(false);
             setIsGuestSelectorOpen(false);
          }}
          isGuest={!user}
          onGuestComplete={(careerId) => {
             setGuestCareerId(careerId);
             setIsGuestSelectorOpen(false);
          }}
        />
      )}
    </main>
  );
}

export default App;
