
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import { TRANSLATIONS } from '../../constants';

const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 text-center transition-colors">
        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{value}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    </div>
);

const MenuItem: React.FC<{ label: string; icon: React.ReactNode; onClick?: () => void; }> = ({ label, icon, onClick }) => (
    <div onClick={onClick} className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
        <div className="text-purple-600 dark:text-purple-400">{icon}</div>
        <span className="ml-4 font-medium text-gray-700 dark:text-gray-200">{label}</span>
        <div className="flex-grow text-right">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </div>
    </div>
);

const EditProfileModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { user, updateUserProfile } = useAuth();
    const [name, setName] = useState(user?.name || '');
    const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || '');

    const handleSave = () => {
        if(name.trim() === '') {
            alert('Nama tidak boleh kosong');
            return;
        }
        updateUserProfile(name, avatarUrl);
        onClose();
    };

    const handleRandomizeAvatar = () => {
        const randomId = Math.floor(Math.random() * 1000);
        setAvatarUrl(`https://picsum.photos/seed/${randomId}/200`);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-sm"
            >
                <h3 className="text-xl font-bold text-center mb-6 dark:text-white">Edit Profil</h3>
                
                <div className="flex flex-col items-center mb-4">
                    <img src={avatarUrl} alt="Avatar Preview" className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-purple-200" />
                    <button onClick={handleRandomizeAvatar} className="text-xs text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                        Acak Avatar
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none dark:bg-slate-700 dark:text-white"
                        />
                    </div>
                </div>

                <div className="flex space-x-3 mt-6">
                    <button onClick={onClose} className="flex-1 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-white py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-500 transition">
                        Batal
                    </button>
                    <button onClick={handleSave} className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                        Simpan
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

const ProfileScreen: React.FC = () => {
    const { user, logout, language } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const t = TRANSLATIONS[language];

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleFeatureNotAvailable = () => {
        alert('Fitur ini sedang dalam pengembangan dan akan segera hadir!');
    };

    if (!user) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-8 h-full"
        >
            <div className="bg-purple-500 dark:bg-purple-800 h-40 pt-10 px-6 rounded-b-3xl transition-colors">
                <h1 className="text-2xl font-bold text-white text-center">{t.profile}</h1>
            </div>
            <div className="px-6 -mt-16">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-colors">
                    <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full border-4 border-purple-200 dark:border-purple-600 shadow-md object-cover"/>
                    <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">{user.name}</h2>
                    <div className="flex justify-center space-x-6 my-4 text-gray-600 dark:text-gray-300">
                        <div><span className="font-bold text-black dark:text-white">{user.followers}</span> {t.followers}</div>
                        <div><span className="font-bold text-black dark:text-white">{user.following}</span> {t.following}</div>
                    </div>
                    <button onClick={() => setIsEditing(true)} className="border-2 border-purple-500 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-semibold px-6 py-2 rounded-full text-sm hover:bg-purple-50 dark:hover:bg-slate-700 transition">
                        Edit profil
                    </button>
                </div>
            </div>

            <div className="px-6 mt-6">
                <div className="grid grid-cols-3 gap-4">
                    <StatCard label="Streak" value={user.karaokeStreak} />
                    <StatCard label="Rank" value={`#${user.globalRank}`} />
                    <StatCard label={t.score} value={user.totalScore} />
                </div>
            </div>

            <div className="px-6 mt-6 space-y-3">
                 <MenuItem onClick={() => navigate('/app/settings')} label={t.settings} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} />
                 <MenuItem onClick={handleLogout} label={t.logout} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>} />
            </div>

            <AnimatePresence>
                {isEditing && <EditProfileModal onClose={() => setIsEditing(false)} />}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProfileScreen;
