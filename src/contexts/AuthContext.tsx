import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from 'firebase/auth';
import {
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle as googleLogin,
  logout as firebaseLogout,
  onAuthChange
} from '../services/authService';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await loginWithEmail(email, password);
  };

  const register = async (email: string, password: string, displayName: string) => {
    await registerWithEmail(email, password, displayName);
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
  };

  const logout = async () => {
    await firebaseLogout();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, loginWithGoogle: handleGoogleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
