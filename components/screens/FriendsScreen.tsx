
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_FRIENDS } from '../../constants';
import type { User } from '../../types';

const FriendCard: React.FC<{ user: User; onSelect: () => void }> = ({ user, onSelect }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent modal from opening
        setIsFollowing(!isFollowing);
    };

    return (
        <div onClick={onSelect} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition cursor-pointer">
            <div className="flex items-center space-x-3">
                <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover"/>
                <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                </div>
            </div>
            <button 
                onClick={handleFollow}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
                    isFollowing 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
            >
                {isFollowing ? 'Mengikuti' : 'Follow'}
            </button>
        </div>
    );
};

const FriendProfileModal: React.FC<{ user: User; onClose: () => void }> = ({ user, onClose }) => {
    const navigate = useNavigate();
    
    const handlePlayTogether = () => {
        navigate('/app/challenge/daily');
    };

    const handleSendMessage = () => {
        alert(`Fitur kirim pesan ke ${user.name} sedang dalam pengembangan dan akan segera hadir!`);
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
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-b from-purple-50 to-white w-full max-w-sm rounded-3xl shadow-2xl p-6 text-center"
            >
                <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-lg"/>
                <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h2>
                <div className="flex justify-center space-x-6 my-4 text-gray-600">
                    <div><span className="font-bold text-black">{user.followers}</span> Pengikut</div>
                    <div><span className="font-bold text-black">{user.following}</span> Mengikuti</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center my-6">
                    <div className="bg-white p-3 rounded-lg shadow-sm"><p className="text-sm text-gray-500">Karaoke Streak</p><p className="font-bold text-purple-600 text-lg">{user.karaokeStreak}</p></div>
                    <div className="bg-white p-3 rounded-lg shadow-sm"><p className="text-sm text-gray-500">Global Rank</p><p className="font-bold text-purple-600 text-lg">#{user.globalRank}</p></div>
                    <div className="bg-white p-3 rounded-lg shadow-sm col-span-2"><p className="text-sm text-gray-500">Total Skor</p><p className="font-bold text-purple-600 text-lg">{user.totalScore}</p></div>
                </div>

                <div className="flex space-x-3">
                    <button onClick={handlePlayTogether} className="flex-1 bg-purple-600 text-white font-bold py-3 rounded-full hover:bg-purple-700 transition">Main Bersama</button>
                    <button onClick={handleSendMessage} className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-300 transition">Kirim Pesan</button>
                </div>
            </motion.div>
        </motion.div>
    );
};


const FriendsScreen: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFriend, setSelectedFriend] = useState<User | null>(null);

    const filteredFriends = MOCK_FRIENDS.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 pt-12 h-full"
        >
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Teman</h1>
            
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Cari teman..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
            </div>
            
            <div className="space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 150px)' }}>
                {filteredFriends.map(friend => (
                    <FriendCard key={friend.id} user={friend} onSelect={() => setSelectedFriend(friend)} />
                ))}
            </div>

            <AnimatePresence>
                {selectedFriend && <FriendProfileModal user={selectedFriend} onClose={() => setSelectedFriend(null)} />}
            </AnimatePresence>
        </motion.div>
    );
};

export default FriendsScreen;