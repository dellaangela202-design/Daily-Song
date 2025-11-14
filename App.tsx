
import React, { useState, useMemo, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { MOCK_USER } from './constants';
import type { User } from './types';

import SplashScreen from './components/screens/SplashScreen';
import LoginScreen from './components/screens/LoginScreen';
import Layout from './components/Layout';
import HomeScreen from './components/screens/HomeScreen';
import ChallengeScreen from './components/screens/ChallengeScreen';
import FriendsScreen from './components/screens/FriendsScreen';
import ProfileScreen from './components/screens/ProfileScreen';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, pass: string, name: string) => {
    // Mock login logic
    console.log(`Logging in with ${email}/${pass} as ${name}`);
    setUser({ ...MOCK_USER, name: name || MOCK_USER.name }); // Use provided name, or fallback to mock name
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route
                    path="/app/*"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Routes>
                                    <Route path="home" element={<HomeScreen />} />
                                    <Route path="challenge/:type" element={<ChallengeScreen />} />
                                    <Route path="friends" element={<FriendsScreen />} />
                                    <Route path="profile" element={<ProfileScreen />} />
                                </Routes>
                            </Layout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};


const App: React.FC = () => {
  return (
    <AuthProvider>
        <div className="w-full h-full min-h-screen bg-gray-100">
             <div className="max-w-md mx-auto h-screen bg-purple-50 shadow-lg overflow-hidden">
                <HashRouter>
                    <AnimatedRoutes />
                </HashRouter>
            </div>
        </div>
    </AuthProvider>
  );
};

export default App;