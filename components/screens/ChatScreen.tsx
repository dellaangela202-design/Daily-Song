
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../App';
import { MOCK_FRIENDS } from '../../constants';

const ChatScreen: React.FC = () => {
    const { friendId } = useParams<{ friendId: string }>();
    const { state } = useLocation(); // Expect friendName and friendAvatar passed in navigation state
    const navigate = useNavigate();
    const { user, sendMessage, getMessages } = useAuth();
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Resolve friend details: try passed state first, then mock lookup, then default
    const friendName = state?.friendName || MOCK_FRIENDS.find(f => f.id === friendId)?.name || "Pengguna";
    const friendAvatar = state?.friendAvatar || MOCK_FRIENDS.find(f => f.id === friendId)?.avatarUrl || "https://picsum.photos/200";

    const messages = friendId ? getMessages(friendId) : [];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim() && friendId) {
            sendMessage(friendId, inputText);
            setInputText('');
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="flex flex-col h-full bg-gray-100 absolute inset-0 z-50"
        >
            {/* Header */}
            <div className="bg-white p-4 shadow-sm flex items-center space-x-4 z-10">
                <button onClick={() => navigate(-1)} className="text-purple-600 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <img src={friendAvatar} alt={friendName} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                <div className="flex-grow">
                    <h2 className="font-bold text-gray-800 leading-tight">{friendName}</h2>
                    <p className="text-xs text-green-500 font-medium">Online</p>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.length === 0 ? (
                    <div className="text-center mt-10 opacity-50">
                        <p className="text-gray-400 text-sm">Belum ada pesan.</p>
                        <p className="text-gray-400 text-xs">Kirim pesan untuk memulai obrolan dengan {friendName}!</p>
                    </div>
                ) : (
                    messages.map((msg) => {
                        const isMe = msg.senderId === user?.id;
                        return (
                            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <div 
                                    className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                                        isMe 
                                            ? 'bg-purple-600 text-white rounded-tr-none' 
                                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                                    }`}
                                >
                                    {msg.text}
                                    <div className={`text-[10px] mt-1 text-right ${isMe ? 'text-purple-200' : 'text-gray-400'}`}>
                                        {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
                <form onSubmit={handleSend} className="flex items-center space-x-2">
                    <input 
                        type="text" 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Tulis pesan..." 
                        className="flex-grow bg-gray-100 text-gray-800 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                    <button 
                        type="submit" 
                        disabled={!inputText.trim()}
                        className="bg-purple-600 text-white p-2.5 rounded-full shadow-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default ChatScreen;
