
import React from 'react';
import type { User, Song, SpecialChallenge } from './types';

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


export const MOCK_USER: User = {
  id: 'user-1',
  name: 'Della',
  nim: 'D2544028',
  avatarUrl: 'https://picsum.photos/seed/della/200',
  followers: 50,
  following: 10,
  karaokeStreak: 7,
  globalRank: 23,
  totalScore: 523,
};

// Fix: Added missing 'nim' property to each friend object to satisfy the User type.
export const MOCK_FRIENDS: User[] = [
    { id: 'user-2', name: 'Yuspa', nim: 'F0000002', avatarUrl: 'https://picsum.photos/seed/yuspa/200', followers: 120, following: 30, karaokeStreak: 12, globalRank: 8, totalScore: 2007 },
    { id: 'user-3', name: 'Cien', nim: 'F0000003', avatarUrl: 'https://picsum.photos/seed/cien/200', followers: 80, following: 25, karaokeStreak: 5, globalRank: 45, totalScore: 300 },
    { id: 'user-4', name: 'Jimin', nim: 'F0000004', avatarUrl: 'https://picsum.photos/seed/jimin/200', followers: 500, following: 2, karaokeStreak: 50, globalRank: 2, totalScore: 9800 },
    { id: 'user-5', name: 'Decha', nim: 'F0000005', avatarUrl: 'https://picsum.photos/seed/decha/200', followers: 45, following: 45, karaokeStreak: 3, globalRank: 102, totalScore: 250 },
    { id: 'user-6', name: 'Anggel', nim: 'F0000006', avatarUrl: 'https://picsum.photos/seed/anggel/200', followers: 500, following: 30, karaokeStreak: 12, globalRank: 3, totalScore: 8500 },
    { id: 'user-7', name: 'Rika', nim: 'F0000007', avatarUrl: 'https://picsum.photos/seed/rika/200', followers: 90, following: 15, karaokeStreak: 10, globalRank: 33, totalScore: 1500 },
    { id: 'user-8', name: 'Ellsa', nim: 'F0000008', avatarUrl: 'https://picsum.photos/seed/ellsa/200', followers: 75, following: 50, karaokeStreak: 8, globalRank: 50, totalScore: 1100 },
];

const SILENT_MP3 = 'https://aistudios-prod-backend-resources.google.com/public/sounds/silent.mp3';

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
            { text: "I know a place", startTime: 5, endTime: 7.5 },
            { text: "It's somewhere I go when I'm alone", startTime: 8, endTime: 11.5 },
            { text: "And I know you hate it", startTime: 12, endTime: 14 },
            { text: "And I'm not a saviour", startTime: 14.5, endTime: 16.5 },
            { text: "But I'm trying to be better", startTime: 17, endTime: 20 },
            { text: "I'm trying to be better now", startTime: 20.5, endTime: 23 },
            { text: "Do you think I have forgotten?", startTime: 24, endTime: 27 },
            { text: "Do you think I have forgotten about you?", startTime: 27.5, endTime: 32 },
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
            { text: "You don't know babe", startTime: 3, endTime: 5 },
            { text: "When you hold me", startTime: 5.5, endTime: 7.5 },
            { text: "And kiss me slowly", startTime: 8, endTime: 10 },
            { text: "It's the sweetest thing", startTime: 10.5, endTime: 12.5 },
            { text: "And it don't change", startTime: 13, endTime: 15 },
            { text: "If I had it my way", startTime: 15.5, endTime: 17.5 },
            { text: "You would know that you are", startTime: 18, endTime: 20.5 },
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
            { text: "Gelap di dalam tanya", startTime: 4, endTime: 7 },
            { text: "Menyimpankan rahasianya", startTime: 7.5, endTime: 11 },
            { text: "Letih, kehabisan kata", startTime: 11.5, endTime: 15 },
            { text: "Dan kita pada akhirnya diam", startTime: 15.5, endTime: 19 },
            { text: "Bisu, tak mampu bicara", startTime: 20, endTime: 23.5 },
            { text: "Apa yang salah, tak pernah kita tahu", startTime: 24, endTime: 28 },
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
            { text: "'Cause I-I-I'm in the stars tonight", startTime: 3, endTime: 6.5 },
            { text: "So watch me bring the fire and set the night alight (hey)", startTime: 7, endTime: 11 },
            { text: "Shining through the city with a little funk and soul", startTime: 11.5, endTime: 15 },
            { text: "So I'ma light it up like dynamite, whoa-oh-oh", startTime: 15.5, endTime: 20 },
            { text: "Shoes on, get up in the morn'", startTime: 20.5, endTime: 22.5 },
            { text: "Cup of milk, let's rock and roll", startTime: 23, endTime: 25 },
            { text: "King Kong, kick the drum, rolling on like a Rolling Stone", startTime: 25.5, endTime: 29.5 },
            { text: "Sing song when I'm walking home", startTime: 30, endTime: 32.5 },
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
            { text: "It's not a comeback since we've never been gone", startTime: 2.5, endTime: 6 },
            { text: "Heads turning, careful, you'll break your neck", startTime: 6.5, endTime: 9.5 },
            { text: "Pink ice drips and drips, we're on a rampage", startTime: 10, endTime: 13.5 },
            { text: "Whip it, whip it, whip it, whip it", startTime: 14, endTime: 16 },
            { text: "Keep watching me shut it down", startTime: 16.5, endTime: 19 },
        ]
    },
];

export const SPECIAL_CHALLENGES: SpecialChallenge[] = [
    {id: 'sc1', title: 'Duet Misterius', icon: <UsersIcon className="w-8 h-8 text-purple-600" />},
    {id: 'sc2', title: 'Skala Nada Tinggi', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
    {id: 'sc3', title: 'Geotagging Lagu', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
    {id: 'sc4', title: 'Madley Estafet Misterius', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662v.513a5.035 5.035 0 004.93 4.981l.006.002 2.38.08a2.25 2.25 0 012.24 2.247l.007.002v.421a5.035 5.035 0 004.93-4.981v-.513z" /></svg>},
];