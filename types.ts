// Fix: Import React to make React.ReactNode available.
import React from 'react';

export interface User {
  id: string;
  name: string;
  nim: string;
  avatarUrl: string;
  followers: number;
  following: number;
  karaokeStreak: number;
  globalRank: number;
  totalScore: number;
}

export interface LyricLine {
  text: string;
  startTime: number;
  endTime: number;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: 'kpop' | 'english' | 'pop';
  coverUrl: string;
  coverArtistUrl: string;
  lyrics: LyricLine[];
  instrumentalUrl: string;
}

export interface SpecialChallenge {
  id: string;
  title: string;
  icon: React.ReactNode;
}