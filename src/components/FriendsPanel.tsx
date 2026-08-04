import { useState } from 'react';
import { useFriends } from '../hooks/useFriends';
import { Users, UserPlus, Search, Check, X, Eye, Loader2, X as CloseIcon, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';
import type { FriendProfile } from '../hooks/useFriends';
import { useAuth } from '../contexts/AuthContext';

interface FriendsPanelProps {
  onClose: () => void;
  onViewFriend: (friendUid: string, friendName: string) => void;
  onSyncFriend: (friendUid: string, friendName: string) => void;
}

export function FriendsPanel({ onClose, onViewFriend, onSyncFriend }: FriendsPanelProps) {
  const { user } = useAuth();
  const { friends, requests, searchUsers, sendFriendRequest, acceptRequest, rejectRequest, removeFriend } = useFriends();
  
  const [tab, setTab] = useState<'friends' | 'requests' | 'search'>('friends');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchResults, setSearchResults] = useState<FriendProfile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [requestsSentTo, setRequestsSentTo] = useState<Set<string>>(new Set());

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail) return;
    if (searchEmail.toLowerCase() === user?.email?.toLowerCase()) {
      setSearchError('No puedes buscarte a ti mismo.');
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    setSearchError('');
    
    const results = await searchUsers(searchEmail);
    if (results.length > 0) {
      setSearchResults(results.filter(r => r.uid !== user?.uid)); // Filter out self just in case
    } else {
      setSearchResults([]);
      setSearchError('No se encontraron usuarios.');
    }
    setIsSearching(false);
  };

  const handleSendRequest = async (targetUid: string) => {
    const success = await sendFriendRequest(targetUid);
    if (success) {
      setRequestsSentTo(prev => new Set(prev).add(targetUid));
    } else {
      setSearchError('Hubo un error al enviar la solicitud.');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-[95%] max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] max-h-[600px]"
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
                  <div key={friend.uid} className="flex flex-col gap-2 p-3 bg-slate-800/40 border border-slate-800 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={friend.photoURL || `https://ui-avatars.com/api/?name=${friend.displayName}`} alt={friend.displayName} className="w-10 h-10 rounded-full border border-slate-700" />
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-200 text-sm">{friend.displayName}</span>
                          <span className="text-xs text-slate-400">{friend.email}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFriend(friend.uid)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        title="Eliminar amigo"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button 
                        onClick={() => onSyncFriend(friend.uid, friend.displayName)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-medium rounded-lg transition-colors"
                      >
                        <RefreshCw size={14} />
                        Sincronizar
                      </button>
                      <button 
                        onClick={() => {
                          onViewFriend(friend.uid, friend.displayName);
                          onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded-lg transition-colors"
                      >
                        <Eye size={14} />
                        Ver Mapa
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
              <form onSubmit={handleSearch} className="flex flex-col gap-3">
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchEmail}
                    onChange={e => setSearchEmail(e.target.value)}
                    placeholder="Ingresá un email o nombre..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <Search className="absolute left-3 top-3 text-slate-500" size={18} />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching || !searchEmail}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {isSearching ? <Loader2 className="animate-spin" size={18} /> : <Search size={18} />}
                  Buscar
                </button>
                
                {searchError && (
                  <p className="text-red-400 text-sm text-center">{searchError}</p>
                )}
              </form>

              {searchResults.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Resultados ({searchResults.length})</h3>
                  {searchResults.map(result => {
                    const isFriend = friends.some(f => f.uid === result.uid);
                    const isSent = requestsSentTo.has(result.uid);

                    return (
                      <div key={result.uid} className="flex flex-col gap-3 p-4 bg-slate-800/40 border border-slate-700 rounded-xl animate-in slide-in-from-bottom-2">
                        <div className="flex items-center gap-3">
                          <img src={result.photoURL || `https://ui-avatars.com/api/?name=${result.displayName}`} alt={result.displayName} className="w-12 h-12 rounded-full border-2 border-slate-700" />
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-200">{result.displayName}</span>
                            <span className="text-xs text-slate-400">{result.email}</span>
                          </div>
                        </div>
                        {isFriend ? (
                          <div className="flex items-center justify-center gap-2 py-2 text-emerald-400 text-sm font-medium bg-emerald-500/10 rounded-lg">
                            <Check size={16} /> Ya son amigos
                          </div>
                        ) : isSent ? (
                          <div className="flex items-center justify-center gap-2 py-2 text-indigo-400 text-sm font-medium bg-indigo-500/10 rounded-lg">
                            <Check size={16} /> Solicitud enviada
                          </div>
                        ) : (
                          <button 
                            onClick={() => handleSendRequest(result.uid)}
                            className="flex items-center justify-center gap-2 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
                          >
                            <UserPlus size={16} /> Agregar amigo
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
