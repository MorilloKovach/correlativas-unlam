import { useState } from 'react';
import { useFriends } from '../hooks/useFriends';
import { Users, UserPlus, Search, Check, X, Eye, Loader2, X as CloseIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import type { FriendProfile } from '../hooks/useFriends';
import { useAuth } from '../contexts/AuthContext';

interface FriendsPanelProps {
  onClose: () => void;
  onViewFriend: (friendUid: string, friendName: string) => void;
}

export function FriendsPanel({ onClose, onViewFriend }: FriendsPanelProps) {
  const { user } = useAuth();
  const { friends, requests, searchUserByEmail, sendFriendRequest, acceptRequest, rejectRequest, removeFriend } = useFriends();
  
  const [tab, setTab] = useState<'friends' | 'requests' | 'search'>('friends');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchResult, setSearchResult] = useState<FriendProfile | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail) return;
    if (searchEmail.toLowerCase() === user?.email?.toLowerCase()) {
      setSearchError('No puedes buscarte a ti mismo.');
      setSearchResult(null);
      return;
    }
    
    setIsSearching(true);
    setSearchError('');
    setRequestSent(false);
    
    const result = await searchUserByEmail(searchEmail);
    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
      setSearchError('No se encontró ningún usuario con ese email.');
    }
    setIsSearching(false);
  };

  const handleSendRequest = async () => {
    if (!searchResult) return;
    const success = await sendFriendRequest(searchResult.uid);
    if (success) {
      setRequestSent(true);
    } else {
      setSearchError('Hubo un error al enviar la solicitud.');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-800/50">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Users size={20} className="text-indigo-400" />
            Amigos
          </h2>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-slate-700 transition-colors">
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900">
          <button 
            className={cn("flex-1 py-3 text-sm font-semibold transition-colors border-b-2", tab === 'friends' ? "border-indigo-500 text-indigo-400" : "border-transparent text-slate-400 hover:text-slate-200")}
            onClick={() => setTab('friends')}
          >
            Mis Amigos ({friends.length})
          </button>
          <button 
            className={cn("flex-1 py-3 text-sm font-semibold transition-colors border-b-2 flex justify-center items-center gap-2", tab === 'requests' ? "border-amber-500 text-amber-400" : "border-transparent text-slate-400 hover:text-slate-200")}
            onClick={() => setTab('requests')}
          >
            Solicitudes 
            {requests.length > 0 && (
              <span className="bg-amber-500 text-amber-950 text-[10px] px-1.5 py-0.5 rounded-full">{requests.length}</span>
            )}
          </button>
          <button 
            className={cn("flex-1 py-3 text-sm font-semibold transition-colors border-b-2", tab === 'search' ? "border-emerald-500 text-emerald-400" : "border-transparent text-slate-400 hover:text-slate-200")}
            onClick={() => setTab('search')}
          >
            Buscar
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          
          {tab === 'friends' && (
            <div className="flex flex-col gap-3">
              {friends.length === 0 ? (
                <div className="text-center text-slate-500 mt-10">
                  <Users size={40} className="mx-auto mb-3 opacity-20" />
                  <p>Aún no has agregado amigos.</p>
                </div>
              ) : (
                friends.map(friend => (
                  <div key={friend.uid} className="flex items-center justify-between p-3 bg-slate-800/40 border border-slate-800 rounded-xl">
                    <div className="flex items-center gap-3">
                      <img src={friend.photoURL || `https://ui-avatars.com/api/?name=${friend.displayName}`} alt={friend.displayName} className="w-10 h-10 rounded-full border border-slate-700" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-200 text-sm">{friend.displayName}</span>
                        <span className="text-xs text-slate-400">{friend.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          onViewFriend(friend.uid, friend.displayName);
                          onClose();
                        }}
                        className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                        title="Ver progreso"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => removeFriend(friend.uid)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        title="Eliminar amigo"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {tab === 'requests' && (
            <div className="flex flex-col gap-3">
              {requests.length === 0 ? (
                <div className="text-center text-slate-500 mt-10">
                  <UserPlus size={40} className="mx-auto mb-3 opacity-20" />
                  <p>No tienes solicitudes pendientes.</p>
                </div>
              ) : (
                requests.map(req => (
                  <div key={req.fromUid} className="flex items-center justify-between p-3 bg-amber-900/10 border border-amber-900/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <img src={req.photoURL || `https://ui-avatars.com/api/?name=${req.displayName}`} alt={req.displayName} className="w-10 h-10 rounded-full border border-slate-700" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-200 text-sm">{req.displayName}</span>
                        <span className="text-xs text-slate-400">Quiere ser tu amigo</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => acceptRequest(req)}
                        className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                        title="Aceptar"
                      >
                        <Check size={16} />
                      </button>
                      <button 
                        onClick={() => rejectRequest(req.fromUid)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        title="Rechazar"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {tab === 'search' && (
            <div className="flex flex-col gap-4">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input 
                  type="email" 
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  placeholder="Email del usuario..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSearching}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center min-w-[40px]"
                >
                  {isSearching ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                </button>
              </form>

              {searchError && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">
                  {searchError}
                </div>
              )}

              {searchResult && (
                <div className="flex items-center justify-between p-4 bg-slate-800 border border-slate-700 rounded-xl mt-2 animate-in slide-in-from-bottom-2">
                  <div className="flex items-center gap-3">
                    <img src={searchResult.photoURL || `https://ui-avatars.com/api/?name=${searchResult.displayName}`} alt={searchResult.displayName} className="w-12 h-12 rounded-full border border-slate-600" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-100">{searchResult.displayName}</span>
                      <span className="text-xs text-slate-400">{searchResult.email}</span>
                    </div>
                  </div>
                  
                  {friends.some(f => f.uid === searchResult.uid) ? (
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-md">Ya son amigos</span>
                  ) : requestSent ? (
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md border border-emerald-500/30">Solicitud enviada</span>
                  ) : (
                    <button 
                      onClick={handleSendRequest}
                      className="flex items-center gap-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-lg transition-colors shadow-lg shadow-emerald-900/20"
                    >
                      <UserPlus size={14} />
                      Agregar
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
