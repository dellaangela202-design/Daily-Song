
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, UserCircleIcon } from '../constants';

const navItems = [
  { path: '/app/home', icon: HomeIcon, label: 'Home' },
  { path: '/app/friends', icon: UserGroupIcon, label: 'Friends' },
  { path: '/app/profile', icon: UserCircleIcon, label: 'Profile' },
];

const BottomNav: React.FC = () => {
    return (
        <nav className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 shadow-t-lg">
            <div className="flex justify-around items-center h-20 max-w-md mx-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center space-y-1 w-20 transition-all duration-300 ${isActive ? 'text-purple-600' : 'text-gray-400'}`
                        }
                    >
                        <item.icon className="w-7 h-7" />
                        <span className={`text-xs font-medium ${item.label === 'Friends' ? 'hidden' : ''}`}>{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-gradient-to-b from-purple-200 via-purple-50 to-white">
      <main className="flex-grow overflow-y-auto pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
