import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { User } from 'firebase/auth';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, db } from '../lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  careerId?: string;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  updateCareerId: (careerId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  updateCareerId: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const { uid, email, displayName, photoURL } = currentUser;
          const userRef = doc(db, 'users', uid);
          
          // Leer datos existentes primero para no perder la carrera
          const userSnap = await getDoc(userRef);
          let existingData: any = {};
          if (userSnap.exists()) {
            existingData = userSnap.data();
          }

          const profileData: UserProfile = {
            uid,
            email,
            displayName,
            photoURL,
            careerId: existingData.careerId,
          };

          // Sólo guardamos en Firestore automáticamente si ya tienen una carrera asignada.
          // Si es un usuario nuevo, esperamos a que seleccione la carrera en el CareerSelector
          // para recién crearle su documento público en Firestore (como pidió el usuario).
          if (existingData.careerId) {
             await setDoc(userRef, profileData, { merge: true });
          }
          
          setUserProfile(profileData);
        } catch (error) {
          console.error("Error saving public profile:", error);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const updateCareerId = async (careerId: string) => {
    if (user && userProfile) {
      const userRef = doc(db, 'users', user.uid);
      const updatedProfile = { ...userProfile, careerId };
      await setDoc(userRef, updatedProfile, { merge: true });
      setUserProfile(updatedProfile);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, login, logout, updateCareerId }}>
      {children}
    </AuthContext.Provider>
  );
}
