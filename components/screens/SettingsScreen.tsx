
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../App';
import { TRANSLATIONS } from '../../constants';

const SettingsScreen: React.FC = () => {
    const { theme, language, toggleTheme, setLanguage } = useAuth();
    const navigate = useNavigate();
    const t = TRANSLATIONS[language];

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="flex flex-col h-full bg-purple-50 dark:bg-slate-900"
        >
            {/* Header */}
            <div className="bg-white dark:bg-slate-800 p-4 shadow-sm flex items-center space-x-4 z-10 transition-colors">
                <button onClick={() => navigate(-1)} className="text-purple-600 dark:text-purple-400 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <h2 className="font-bold text-xl text-gray-800 dark:text-white">{t.settings}</h2>
            </div>

            <div className="p-6 space-y-6">
                
                {/* Theme Setting */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 flex items-center justify-between transition-colors">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-600 dark:text-purple-400">
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            )}
                        </div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{t.darkMode}</span>
                    </div>
                    
                    <div 
                        onClick={toggleTheme}
                        className={`w-14 h-8 flex items-center bg-gray-300 dark:bg-purple-600 rounded-full p-1 cursor-pointer transition-colors duration-300`}
                    >
                        <motion.div 
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            className={`bg-white w-6 h-6 rounded-full shadow-md ${theme === 'dark' ? 'ml-auto' : ''}`}
                        />
                    </div>
                </div>

                {/* Language Setting */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 transition-colors">
                     <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                        </div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{t.language}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => setLanguage('id')}
                            className={`py-2 px-4 rounded-lg border-2 font-medium transition ${
                                language === 'id' 
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                                : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                            }`}
                        >
                            Indonesia
                        </button>
                        <button 
                            onClick={() => setLanguage('en')}
                            className={`py-2 px-4 rounded-lg border-2 font-medium transition ${
                                language === 'en' 
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                                : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                            }`}
                        >
                            English
                        </button>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default SettingsScreen;
