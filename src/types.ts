export interface Word {
  id: number;
  word: string;
  definition: string;
  translation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Book {
  id: number;
  name: string;
  words: Word[];
}

export interface Settings {
  studyMode: 'flashcards' | 'quiz';
  difficultyFilter: 'all' | 'easy' | 'medium' | 'hard';
  soundEnabled: boolean;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  wordsRecited: number;
  createdAt: Date;
  lastActive: Date;
}

export interface LeaderboardEntry {
  rank: number;
  uid: string;
  displayName: string;
  wordsRecited: number;
}
