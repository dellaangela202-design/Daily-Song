
import React from 'react';
import type { User, Song, SpecialChallenge, Language } from './types';

// Translations Dictionary
export const TRANSLATIONS = {
  id: {
    greeting: "Hai",
    welcomeNew: "Ayo mulai tantangan pertamamu!",
    welcomeBack: "Siap untuk tantangan hari ini?",
    dailyChallenge: "Tantangan Harian",
    specialChallenge: "Tantangan Khusus",
    findFriends: "Cari Teman",
    home: "Beranda",
    friends: "Teman",
    profile: "Profil",
    settings: "Pengaturan",
    darkMode: "Mode Gelap",
    language: "Bahasa",
    logout: "Keluar",
    community: "Komunitas",
    suggestions: "Saran Teman",
    searchPlaceholder: "Cari teman...",
    follow: "Ikuti",
    following: "Mengikuti",
    followers: "Pengikut",
    score: "Skor",
    startSinging: "Mulai Bernyanyi",
    back: "Kembali"
  },
  en: {
    greeting: "Hi",
    welcomeNew: "Let's start your first challenge!",
    welcomeBack: "Ready for today's challenge?",
    dailyChallenge: "Daily Challenge",
    specialChallenge: "Special Challenge",
    findFriends: "Find Friends",
    home: "Home",
    friends: "Friends",
    profile: "Profile",
    settings: "Settings",
    darkMode: "Dark Mode",
    language: "Language",
    logout: "Logout",
    community: "Community",
    suggestions: "Friend Suggestions",
    searchPlaceholder: "Search friends...",
    follow: "Follow",
    following: "Following",
    followers: "Followers",
    score: "Score",
    startSinging: "Start Singing",
    back: "Back"
  }
};

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.535-1.84 2.66-2.435m-7.5 0a4.5 4.5 0 119 0m-9 0a4.5 4.5 0 00-9 0m9 0c0-.53.038-1.04.108-1.54M9 18.75v-2.187c0-.597.237-1.17.659-1.591l.206-.206a.5.5 0 01.707 0l3.747 3.747a.5.5 0 010 .707l-.206.206a2.121 2.121 0 01-1.591.659v4.5M9 18.75a4.5 4.5 0 01-4.5-4.5M9 18.75a4.5 4.5 0 004.5-4.5m-4.5 4.5L9 14.25" />
  </svg>
);

export const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const MusicNoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V7.5A2.25 2.25 0 0013.5 6h-3a2.25 2.25 0 00-2.25 2.25v1.5m1.5 6.375V16.5m0 0v-1.5m0 1.5v-1.5m0 0l3.75-1.039a2.25 2.25 0 001.632-2.163z" />
  </svg>
);

export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5l-.259 1.035a3.375 3.375 0 00-2.456 2.456L14.25 18l1.035.259a3.375 3.375 0 002.456 2.456L18 21.75l.259-1.035a3.375 3.375 0 002.456-2.456L21.75 18l-1.035-.259a3.375 3.375 0 00-2.456-2.456z" />
    </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M15 19.128L18 18.5" />
    </svg>
);


// User baru dimulai dengan data kosong dan tanpa ranking
export const MOCK_USER: User = {
  id: 'user-new-001',
  name: 'Pengguna Baru',
  nim: '-',
  avatarUrl: 'https://picsum.photos/seed/newuser/200',
  followers: 0,
  following: 0,
  karaokeStreak: 0,
  globalRank: 0, // 0 menunjukkan belum memiliki peringkat (Unranked)
  totalScore: 0,
};

// We keep friends as "Suggestions" or "Community"
export const MOCK_FRIENDS: User[] = [
    { id: 'user-2', name: 'Yuspa', nim: 'F0000002', avatarUrl: 'https://picsum.photos/seed/yuspa/200', followers: 120, following: 30, karaokeStreak: 12, globalRank: 8, totalScore: 2007 },
    { id: 'user-3', name: 'Cien', nim: 'F0000003', avatarUrl: 'https://picsum.photos/seed/cien/200', followers: 80, following: 25, karaokeStreak: 5, globalRank: 45, totalScore: 300 },
    { id: 'user-4', name: 'Jimin', nim: 'F0000004', avatarUrl: 'https://picsum.photos/seed/jimin/200', followers: 500, following: 2, karaokeStreak: 50, globalRank: 2, totalScore: 9800 },
    { id: 'user-5', name: 'Decha', nim: 'F0000005', avatarUrl: 'https://picsum.photos/seed/decha/200', followers: 45, following: 45, karaokeStreak: 3, globalRank: 102, totalScore: 250 },
    { id: 'user-6', name: 'Anggel', nim: 'F0000006', avatarUrl: 'https://picsum.photos/seed/anggel/200', followers: 500, following: 30, karaokeStreak: 12, globalRank: 3, totalScore: 8500 },
    { id: 'user-7', name: 'Rika', nim: 'F0000007', avatarUrl: 'https://picsum.photos/seed/rika/200', followers: 90, following: 15, karaokeStreak: 10, globalRank: 33, totalScore: 1500 },
    { id: 'user-8', name: 'Ellsa', nim: 'F0000008', avatarUrl: 'https://picsum.photos/seed/ellsa/200', followers: 75, following: 50, karaokeStreak: 8, globalRank: 50, totalScore: 1100 },
];

const SILENT_MP3 = 'https://aistudiocdn.com/media/silent.mp3';

export const MOCK_SONGS: Song[] = [
    { 
        id: 's1', 
        title: 'About You', 
        artist: 'The 1975', 
        genre: 'english', 
        coverUrl: 'https://picsum.photos/seed/aboutyou/400',
        coverArtistUrl: 'https://picsum.photos/seed/the1975/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "I know a place", startTime: 2, endTime: 4 },
            { text: "It's somewhere I go when I'm alone", startTime: 4.5, endTime: 7.5 },
            { text: "And I know you hate it", startTime: 8, endTime: 10 },
            { text: "But I'm trying to be better", startTime: 10.5, endTime: 13 },
            { text: "I'm trying to be better now", startTime: 13.5, endTime: 16 },
            { text: "Do you think I have forgotten?", startTime: 17, endTime: 20 },
            { text: "Do you think I have forgotten?", startTime: 20.5, endTime: 23 },
            { text: "Do you think I have forgotten about you?", startTime: 23.5, endTime: 28 },
            { text: "And there was something about you that now I can't remember", startTime: 29, endTime: 35 },
            { text: "It's the same damn thing that made my heart surrender", startTime: 35.5, endTime: 40 },
            { text: "And I miss you on a train, I miss you in the morning", startTime: 41, endTime: 46 },
            { text: "I never know what to think about", startTime: 47, endTime: 50 },
            { text: "I think about you", startTime: 51, endTime: 55 },
        ] 
    },
    { 
        id: 's2', 
        title: 'Best Part', 
        artist: 'Daniel Caesar ft. H.E.R.', 
        genre: 'english', 
        coverUrl: 'https://picsum.photos/seed/bestpart/400',
        coverArtistUrl: 'https://picsum.photos/seed/danielcaesar/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "You don't know babe", startTime: 2, endTime: 4 },
            { text: "When you hold me", startTime: 4.5, endTime: 6.5 },
            { text: "And kiss me slowly", startTime: 7, endTime: 9 },
            { text: "It's the sweetest thing", startTime: 9.5, endTime: 12 },
            { text: "And it don't change", startTime: 12.5, endTime: 14.5 },
            { text: "If I had it my way", startTime: 15, endTime: 17 },
            { text: "You would know that you are", startTime: 17.5, endTime: 20 },
            { text: "You're the coffee that I need in the morning", startTime: 20.5, endTime: 24 },
            { text: "You're my sunshine in the rain when it's pouring", startTime: 24.5, endTime: 28 },
            { text: "Won't you give yourself to me", startTime: 29, endTime: 32 },
            { text: "Give it all, oh", startTime: 32.5, endTime: 36 },
        ]
    },
    { 
        id: 's3', 
        title: 'Monolog', 
        artist: 'Pamungkas', 
        genre: 'pop', 
        coverUrl: 'https://picsum.photos/seed/monolog/400',
        coverArtistUrl: 'https://picsum.photos/seed/pamungkas/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "Gelap di dalam tanya", startTime: 3, endTime: 6 },
            { text: "Menyimpankan rahasianya", startTime: 6.5, endTime: 10 },
            { text: "Letih, kehabisan kata", startTime: 10.5, endTime: 14 },
            { text: "Dan kita pada akhirnya diam", startTime: 14.5, endTime: 18 },
            { text: "Bisu, tak mampu bicara", startTime: 18.5, endTime: 22 },
            { text: "Apa yang salah, tak pernah kita tahu", startTime: 22.5, endTime: 26 },
            { text: "Ada apa dengan kita?", startTime: 27, endTime: 30 },
            { text: "Mengapa kini, kau dan aku", startTime: 31, endTime: 34 },
            { text: "Makin menjauh", startTime: 35, endTime: 37 },
            { text: "Dan makin terasa asing", startTime: 38, endTime: 41 },
            { text: "Ada apa dengan kita?", startTime: 42, endTime: 46 },
        ]
    },
    { 
        id: 's4', 
        title: 'doremi', 
        artist: 'Budi Doremi', 
        genre: 'pop', 
        coverUrl: 'https://picsum.photos/seed/doremi/400',
        coverArtistUrl: 'https://picsum.photos/seed/budidoremi/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "Kau bidadari jatuh dari surga di hadapanku, ea", startTime: 2, endTime: 7 },
            { text: "Kau bidadari jatuh dari surga tepat di hatiku, ea", startTime: 7.5, endTime: 12 },
            { text: "So, I will fly to the sky to get you and you will be mine", startTime: 12.5, endTime: 17 },
            { text: "Karena kau do-do-do-re-mi-mi-mi", startTime: 17.5, endTime: 21 },
            { text: "Fa-fa-fa-sol-la-si-do-do-do-do it for me", startTime: 21.5, endTime: 25 },
            { text: "Do-do-do-re-mi-mi-mi", startTime: 25.5, endTime: 29 },
            { text: "Fa-fa-fa-sol-la-si-do-do-do-do it for me", startTime: 29.5, endTime: 33 },
        ]
    },
    { 
        id: 's5', 
        title: 'Dynamite', 
        artist: 'BTS', 
        genre: 'kpop', 
        coverUrl: 'https://picsum.photos/seed/dynamite/400',
        coverArtistUrl: 'https://picsum.photos/seed/bts/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "'Cause I-I-I'm in the stars tonight", startTime: 2, endTime: 5.5 },
            { text: "So watch me bring the fire and set the night alight", startTime: 6, endTime: 10 },
            { text: "Shining through the city with a little funk and soul", startTime: 10.5, endTime: 14 },
            { text: "So I'ma light it up like dynamite, whoa", startTime: 14.5, endTime: 18 },
            { text: "Dy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite", startTime: 18.5, endTime: 23 },
            { text: "Dy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite", startTime: 23.5, endTime: 28 },
            { text: "Shining through the city with a little funk and soul", startTime: 28.5, endTime: 32 },
            { text: "So I'ma light it up like dynamite, whoa", startTime: 32.5, endTime: 36 },
        ]
    },
    { 
        id: 's6', 
        title: 'Shut Down', 
        artist: 'BLACKPINK', 
        genre: 'kpop', 
        coverUrl: 'https://picsum.photos/seed/shutdown/400',
        coverArtistUrl: 'https://picsum.photos/seed/blackpink/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "Blackpink in your area", startTime: 1, endTime: 3 },
            { text: "Blackpink in your area", startTime: 3.5, endTime: 5.5 },
            { text: "It's not a comeback since we've never been gone", startTime: 6, endTime: 9.5 },
            { text: "Heads turning, careful, you'll break your neck", startTime: 10, endTime: 13 },
            { text: "Pink ice drips and drips, we're on a rampage", startTime: 13.5, endTime: 16.5 },
            { text: "Whip it, whip it, whip it, whip it", startTime: 17, endTime: 19 },
            { text: "Keep watching me shut it down", startTime: 19.5, endTime: 22 },
            { text: "Pull down the shutter lock the door, shut it down", startTime: 22.5, endTime: 25.5 },
            { text: "Blackpink in your area", startTime: 26, endTime: 28 },
            { text: "Shut it down", startTime: 28.5, endTime: 31 },
        ]
    },
    {
        id: 's7',
        title: 'Sial',
        artist: 'Mahalini',
        genre: 'pop',
        coverUrl: 'https://picsum.photos/seed/sial/400',
        coverArtistUrl: 'https://picsum.photos/seed/mahalini/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "Sampai saat ini tak terpikir", startTime: 2, endTime: 5 },
            { text: "Aku yang tertuju padamu", startTime: 5.5, endTime: 8 },
            { text: "Tiba-tiba saja semua berubah", startTime: 8.5, endTime: 12 },
            { text: "Sialnya ku bertemu dengan cinta semu", startTime: 12.5, endTime: 16 },
            { text: "Tertipu tutur dan caramu", startTime: 16.5, endTime: 19 },
            { text: "Seolah cinta ini takkan berakhir", startTime: 19.5, endTime: 23 },
            { text: "Sial, sialnya ku bertemu dengan cinta semu", startTime: 24, endTime: 29 },
            { text: "Tertipu tutur dan caramu", startTime: 30, endTime: 33 },
            { text: "Seolah cinta ini takkan berakhir", startTime: 34, endTime: 38 }
        ]
    },
    {
        id: 's8',
        title: 'Komang',
        artist: 'Raim Laode',
        genre: 'pop',
        coverUrl: 'https://picsum.photos/seed/komang/400',
        coverArtistUrl: 'https://picsum.photos/seed/raim/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "Dari kejauhan tergambar cerita tentang kita", startTime: 2, endTime: 6 },
            { text: "Terpisah jarak dan waktu", startTime: 6.5, endTime: 9 },
            { text: "Ingin ku ungkapkan rindu", startTime: 9.5, endTime: 12 },
            { text: "Lewat kata yang tak sempat ku ucapkan", startTime: 12.5, endTime: 16 },
            { text: "Sebab kau terlalu indah dari sekedar kata", startTime: 16.5, endTime: 20 },
            { text: "Dunia berhenti sejenak menikmati indahmu", startTime: 21, endTime: 25 },
            { text: "Dan apabila tak bersamamu", startTime: 25.5, endTime: 28 },
            { text: "Ku pastikan ku jalani dunia tak seindah kemarin", startTime: 28.5, endTime: 33 },
            { text: "Sederhana tertawamu sudah cukup", startTime: 34, endTime: 37 },
            { text: "Lengkapi sempurnanya hidupku", startTime: 37.5, endTime: 42 }
        ]
    },
    {
        id: 's9',
        title: 'As It Was',
        artist: 'Harry Styles',
        genre: 'english',
        coverUrl: 'https://picsum.photos/seed/asitwas/400',
        coverArtistUrl: 'https://picsum.photos/seed/harry/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "Holdin' me back", startTime: 1, endTime: 2.5 },
            { text: "Gravity's holdin' me back", startTime: 3, endTime: 5 },
            { text: "I want you to hold out the palm of your hand", startTime: 5.5, endTime: 9 },
            { text: "Why don't we leave it at that?", startTime: 9.5, endTime: 11 },
            { text: "Nothin' to say", startTime: 11.5, endTime: 13 },
            { text: "When everything gets in the way", startTime: 13.5, endTime: 16 },
            { text: "Seems you cannot be replaced", startTime: 16.5, endTime: 19 },
            { text: "And I'm the one who will stay, oh-oh-oh", startTime: 19.5, endTime: 23 },
            { text: "In this world, it's just us", startTime: 23.5, endTime: 26 },
            { text: "You know it's not the same as it was", startTime: 26.5, endTime: 30 },
            { text: "In this world, it's just us", startTime: 30.5, endTime: 33 },
            { text: "You know it's not the same as it was", startTime: 33.5, endTime: 37 }
        ]
    },
    {
        id: 's10',
        title: 'Cupid',
        artist: 'Fifty Fifty',
        genre: 'kpop',
        coverUrl: 'https://picsum.photos/seed/cupid/400',
        coverArtistUrl: 'https://picsum.photos/seed/fifty/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "La, la, la, la-la-la", startTime: 1, endTime: 3 },
            { text: "La, la-la-la, la, la-la-la", startTime: 3.5, endTime: 6 },
            { text: "I'm feeling lonely", startTime: 6.5, endTime: 8.5 },
            { text: "Oh, I wish I'd find a lover that could hold me", startTime: 9, endTime: 12 },
            { text: "Now I'm crying in my room", startTime: 12.5, endTime: 14.5 },
            { text: "So skeptical of love", startTime: 15, endTime: 17 },
            { text: "But still, I want more, more, more", startTime: 17.5, endTime: 20 },
            { text: "I gave a second chance to Cupid", startTime: 20.5, endTime: 23 },
            { text: "But now I'm left here feeling stupid", startTime: 23.5, endTime: 26 },
            { text: "Oh, the way he makes me feel that love isn't real", startTime: 26.5, endTime: 30 },
            { text: "Cupid is so dumb", startTime: 30.5, endTime: 33 }
        ]
    },
    {
        id: 's11',
        title: 'Flowers',
        artist: 'Miley Cyrus',
        genre: 'english',
        coverUrl: 'https://picsum.photos/seed/flowers/400',
        coverArtistUrl: 'https://picsum.photos/seed/miley/200',
        instrumentalUrl: SILENT_MP3,
        lyrics: [
            { text: "I can buy myself flowers", startTime: 2, endTime: 4.5 },
            { text: "Write my name in the sand", startTime: 5, endTime: 7 },
            { text: "Talk to myself for hours", startTime: 7.5, endTime: 10 },
            { text: "Say things you don't understand", startTime: 10.5, endTime: 13 },
            { text: "I can take myself dancing", startTime: 13.5, endTime: 16 },
            { text: "And I can hold my own hand", startTime: 16.5, endTime: 19 },
            { text: "Yeah, I can love me better than you can", startTime: 19.5, endTime: 23 },
            { text: "Can love me better", startTime: 23.5, endTime: 25 },
            { text: "I can love me better, baby", startTime: 25.5, endTime: 28 },
            { text: "Can love me better", startTime: 28.5, endTime: 30 },
            { text: "I can love me better, baby", startTime: 30.5, endTime: 33 }
        ]
    }
];

export const SPECIAL_CHALLENGES: SpecialChallenge[] = [
    {id: 'sc1', title: 'Duet Misterius', icon: <UsersIcon className="w-8 h-8 text-purple-600" />},
    {id: 'sc2', title: 'Skala Nada Tinggi', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
    {id: 'sc3', title: 'Geotagging Lagu', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
    {id: 'sc4', title: 'Madley Estafet Misterius', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662v.513a5.035 5.035 0 004.93 4.981l.006.002 2.38.08a2.25 2.25 0 012.24 2.247l.007.002v.421a5.035 5.035 0 004.93-4.981v-.513z" /></svg>},
];
