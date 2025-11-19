
import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { MOCK_USER, MOCK_FRIENDS } from './constants';
import type { User, Message, Theme, Language } from './types';
import { generateChatReply } from './services/geminiService';

import SplashScreen from './components/screens/SplashScreen';
import LoginScreen from './components/screens/LoginScreen';
import Layout from './components/Layout';
import HomeScreen from './components/screens/HomeScreen';
import ChallengeScreen from './components/screens/ChallengeScreen';
import FriendsScreen from './components/screens/FriendsScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ChatScreen from './components/screens/ChatScreen';
import SettingsScreen from './components/screens/SettingsScreen';

interface AuthContextType {
  user: User | null;
  theme: Theme;
  language: Language;
  login: (email: string, pass: string, name: string) => void;
  logout: () => void;
  addScore: (score: number) => void;
  followUser: () => void;
  updateUserProfile: (name: string, avatarUrl: string) => void;
  sendMessage: (receiverId: string, text: string) => void;
  getMessages: (friendId: string) => Message[];
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguageState] = useState<Language>('id');

  const login = (email: string, pass: string, name: string) => {
    const newUser: User = {
        ...MOCK_USER,
        name: name || email.split('@')[0],
        email: email, 
        id: `user-${Date.now()}`,
        totalScore: 0,
        karaokeStreak: 0,
        followers: 0,
        following: 0,
        globalRank: 9999
    } as User; 
    
    console.log(`Logging in with ${email} as ${newUser.name}`);
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    setMessages([]);
  };

  const addScore = (points: number) => {
    setUser(prev => {
        if (!prev) return null;
        const newScore = prev.totalScore + points;
        const newStreak = prev.karaokeStreak + 1; 
        const newRank = Math.max(1, 9999 - Math.floor(newScore / 100)); 

        return {
            ...prev,
            totalScore: newScore,
            karaokeStreak: newStreak,
            globalRank: newRank
        };
    });
  };

  const followUser = () => {
      setUser(prev => {
          if (!prev) return null;
          return {
              ...prev,
              following: prev.following + 1
          };
      });
  };

  const updateUserProfile = (name: string, avatarUrl: string) => {
      setUser(prev => {
          if (!prev) return null;
          return {
              ...prev,
              name,
              avatarUrl
          };
      });
  };

  const sendMessage = (receiverId: string, text: string) => {
      if (!user) return;
      
      // 1. Add User's Message
      const newMessage: Message = {
          id: `msg-${Date.now()}`,
          senderId: user.id,
          receiverId: receiverId,
          text,
          timestamp: Date.now()
      };
      setMessages(prev => [...prev, newMessage]);

      // 2. Trigger AI Reply
      // Find friend name for persona (default to 'Teman' if not found or searching global)
      const friend = MOCK_FRIENDS.find(f => f.id === receiverId) || { name: receiverId.replace('global-', '') || 'Teman' };
      const friendName = friend.name;

      // Simulate delay for realism
      setTimeout(async () => {
          try {
              const replyText = await generateChatReply(friendName, text, language);
              
              const replyMessage: Message = {
                  id: `msg-reply-${Date.now()}`,
                  senderId: receiverId, // The friend sends the reply
                  receiverId: user.id,
                  text: replyText,
                  timestamp: Date.now()
              };
              
              setMessages(prev => [...prev, replyMessage]);
          } catch (error) {
              console.error("Failed to generate reply");
          }
      }, 1500 + Math.random() * 1000); // 1.5s to 2.5s delay
  };

  const getMessages = (friendId: string) => {
      if (!user) return [];
      return messages.filter(msg => 
          (msg.senderId === user.id && msg.receiverId === friendId) ||
          (msg.senderId === friendId && msg.receiverId === user.id)
      ).sort((a, b) => a.timestamp - b.timestamp);
  };

  const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setLanguage = (lang: Language) => {
      setLanguageState(lang);
  };

  const value = useMemo(() => ({ 
      user, theme, language, login, logout, addScore, followUser, updateUserProfile, sendMessage, getMessages, toggleTheme, setLanguage 
  }), [user, theme, language, messages]);

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
                                    <Route path="chat/:friendId" element={<ChatScreen />} />
                                    <Route path="profile" element={<ProfileScreen />} />
                                    <Route path="settings" element={<SettingsScreen />} />
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
        <AuthContent />
    </AuthProvider>
  );
};

// Extract content to use useAuth hook for theme class application
const AuthContent: React.FC = () => {
    const { theme } = useAuth();
    
    return (
        <div className={`w-full h-full min-h-screen bg-gray-100 ${theme === 'dark' ? 'dark' : ''}`}>
             <div className="max-w-md mx-auto h-screen bg-purple-50 dark:bg-slate-900 shadow-lg overflow-hidden transition-colors duration-300">
                <HashRouter>
                    <AnimatedRoutes />
                </HashRouter>
            </div>
        </div>
    );
}

export default App;
