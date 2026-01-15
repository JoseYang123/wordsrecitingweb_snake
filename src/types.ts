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
