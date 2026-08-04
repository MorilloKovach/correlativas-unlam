import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { 
  collection, getDocs, doc, setDoc, deleteDoc, onSnapshot 
} from 'firebase/firestore';

export interface FriendProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface FriendRequest {
  fromUid: string;
  email: string;
  displayName: string;
  photoURL: string;
  status: 'pending';
}

export function useFriends() {
  const { user } = useAuth();
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [requests, setRequests] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState(true);

  // Escuchar amigos y solicitudes
  useEffect(() => {
    if (!user) {
      setFriends([]);
      setRequests([]);
      setLoading(false);
      return;
    }

    // Listener de solicitudes
    const requestsRef = collection(db, 'users', user.uid, 'requests');
    const unsubRequests = onSnapshot(requestsRef, (snapshot) => {
      const reqs: FriendRequest[] = [];
      snapshot.forEach(d => {
        reqs.push({ fromUid: d.id, ...d.data() } as FriendRequest);
      });
      setRequests(reqs);
    });

    // Listener de amigos
    const friendsRef = collection(db, 'users', user.uid, 'friends');
    const unsubFriends = onSnapshot(friendsRef, (snapshot) => {
      const frs: FriendProfile[] = [];
      snapshot.forEach(d => {
        frs.push({ uid: d.id, ...d.data() } as FriendProfile);
      });
      setFriends(frs);
      setLoading(false);
    });

    return () => {
      unsubRequests();
      unsubFriends();
    };
  }, [user]);

  const searchUsers = async (queryStr: string): Promise<FriendProfile[]> => {
    try {
      const qStrLower = queryStr.trim().toLowerCase();
      if (!qStrLower) return [];
      
      const results: FriendProfile[] = [];
      const seen = new Set<string>();

      // Para soportar búsqueda por cualquier coincidencia parcial (nombre, apellido, partes del email)
      // en Firestore sin servicios de terceros, traemos los usuarios y filtramos localmente.
      // Como es una app pequeña/mediana, el costo de reads es bajo.
      const usersSnap = await getDocs(collection(db, 'users'));
      
      usersSnap.forEach(doc => {
        const data = doc.data();
        const email = (data.email || '').toLowerCase();
        const name = (data.displayName || '').toLowerCase();
        
        if (email.includes(qStrLower) || name.includes(qStrLower)) {
          if (!seen.has(doc.id)) {
            seen.add(doc.id);
            results.push({ uid: doc.id, ...data } as FriendProfile);
          }
        }
      });

      return results;
    } catch (error) {
      console.error("Error buscando usuarios:", error);
      return [];
    }
  };

  const sendFriendRequest = async (targetUid: string) => {
    if (!user) return false;
    try {
      // Escribir en la subcolección de 'requests' del objetivo
      await setDoc(doc(db, 'users', targetUid, 'requests', user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        status: 'pending',
        timestamp: new Date().getTime()
      });
      return true;
    } catch (error) {
      console.error("Error enviando solicitud:", error);
      return false;
    }
  };

  const acceptRequest = async (req: FriendRequest) => {
    if (!user) return;
    try {
      // 1. Agregar a mis amigos
      await setDoc(doc(db, 'users', user.uid, 'friends', req.fromUid), {
        email: req.email,
        displayName: req.displayName,
        photoURL: req.photoURL
      });
      
      // 2. Agregame a los amigos del otro
      await setDoc(doc(db, 'users', req.fromUid, 'friends', user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      });

      // 3. Borrar la solicitud
      await deleteDoc(doc(db, 'users', user.uid, 'requests', req.fromUid));
    } catch (error) {
      console.error("Error aceptando solicitud:", error);
    }
  };

  const rejectRequest = async (fromUid: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'requests', fromUid));
    } catch (error) {
      console.error("Error rechazando solicitud:", error);
    }
  };

  const removeFriend = async (friendUid: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'friends', friendUid));
      await deleteDoc(doc(db, 'users', friendUid, 'friends', user.uid));
    } catch (error) {
      console.error("Error eliminando amigo:", error);
    }
  };

  return {
    friends,
    requests,
    loading,
    searchUsers,
    sendFriendRequest,
    acceptRequest,
    rejectRequest,
    removeFriend
  };
}
