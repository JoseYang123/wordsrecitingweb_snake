import { useState, useEffect } from 'react';
import Header from './components/Header';
import Flashcards from './components/Flashcards';
import Practice from './components/Practice';
import WordList from './components/WordList';
import Settings from './components/Settings';
import Auth from './components/Auth';
import Leaderboard from './components/Leaderboard';

import { Word, Book, Settings as SettingsType } from './types';
import { getJsonItem, setJsonItem } from './services/storageService';

const STORAGE_KEYS = {
  state: 'wordMasterState',
  books: 'wordMasterBooks',
  settings: 'wordMasterSettings'
};

const defaultSettings: SettingsType = {
  studyMode: 'flashcards',
  difficultyFilter: 'all',
  soundEnabled: true
};

const defaultBooks: Book[] = [
  {
    id: 1,
    name: '默认词书',
    words: [
      { id: 1, word: 'apple', definition: 'a round fruit with red or green skin', translation: '苹果', difficulty: 'easy' },
      { id: 2, word: 'banana', definition: 'a long curved fruit with yellow skin', translation: '香蕉', difficulty: 'easy' },
      { id: 3, word: 'computer', definition: 'an electronic device for storing and processing data', translation: '电脑', difficulty: 'medium' },
      { id: 4, word: 'programming', definition: 'the process of writing computer programs', translation: '编程', difficulty: 'hard' },
      { id: 5, word: 'algorithm', definition: 'a set of rules to be followed in calculations', translation: '算法', difficulty: 'hard' }
    ]
  }
];

interface PersistedState {
  books: Book[];
  currentBookIndex: number;
  currentWordIndex: number;
  settings: SettingsType;
}

const normalizeBookState = (
  books: Book[],
  currentBookIndex = 0,
  currentWordIndex = 0
) => {
  const safeBookIndex = books.length > 0
    ? Math.min(Math.max(currentBookIndex, 0), books.length - 1)
    : 0;
  const wordsCount = books[safeBookIndex]?.words?.length ?? 0;
  const safeWordIndex = wordsCount > 0
    ? Math.min(Math.max(currentWordIndex, 0), wordsCount - 1)
    : 0;

  return {
    books,
    currentBookIndex: safeBookIndex,
    currentWordIndex: safeWordIndex
  };
};

function AppContent() {
  // Combined state for books and related indices to ensure atomic updates
  const [bookState, setBookState] = useState({
    books: [] as Book[],
    currentBookIndex: 0,
    currentWordIndex: 0
  });
  
  const [activeSection, setActiveSection] = useState<string>('flashcards');
  const [settings, setSettings] = useState<SettingsType>(defaultSettings);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load data from local storage on component mount
  useEffect(() => {
    const initData = async () => {
      const savedState = await getJsonItem<PersistedState>(STORAGE_KEYS.state);
      if (savedState?.books?.length) {
        const normalized = normalizeBookState(
          savedState.books,
          savedState.currentBookIndex,
          savedState.currentWordIndex
        );
        setBookState(normalized);
        setSettings(savedState.settings ?? defaultSettings);
        setIsInitialized(true);
        return;
      }

      const [savedBooks, savedSettings] = await Promise.all([
        getJsonItem<Book[]>(STORAGE_KEYS.books),
        getJsonItem<SettingsType>(STORAGE_KEYS.settings)
      ]);

      if (savedBooks?.length) {
        setBookState(normalizeBookState(savedBooks, 0, 0));
      } else {
        setBookState(normalizeBookState(defaultBooks, 0, 0));
      }

      if (savedSettings) {
        setSettings(savedSettings);
      }

      setIsInitialized(true);
    };
    initData();
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;

    const persistState = async () => {
      const stateToSave: PersistedState = {
        books: bookState.books,
        currentBookIndex: bookState.currentBookIndex,
        currentWordIndex: bookState.currentWordIndex,
        settings
      };

      await Promise.all([
        setJsonItem(STORAGE_KEYS.state, stateToSave),
        setJsonItem(STORAGE_KEYS.books, bookState.books),
        setJsonItem(STORAGE_KEYS.settings, settings)
      ]);
    };

    persistState();
  }, [bookState, settings, isInitialized]);

  // Book management functions
  const getCurrentBook = (): Book => {
    return bookState.books[bookState.currentBookIndex] || { id: 0, name: '无词书', words: [] };
  };

  // Helper function removed as it's no longer used directly
  // const getCurrentWords = (): Word[] => {
  //   return getCurrentBook().words || [];
  // };

  const createBook = (name: string) => {
    const newBook: Book = {
      id: Date.now(),
      name: name.trim(),
      words: []
    };
    // Use functional update to ensure we're using the latest state
    setBookState(prev => {
      const newBooks = [...prev.books, newBook];
      return {
        books: newBooks,
        currentBookIndex: newBooks.length - 1, // Automatically select new book
        currentWordIndex: 0
      };
    });
  };

  const selectBook = (index: number) => {
    setBookState(prev => ({
      ...prev,
      currentBookIndex: index,
      currentWordIndex: 0
    }));
  };

  const renameBook = (index: number, newName: string) => {
    setBookState(prev => {
      const updatedBooks = prev.books.map((book, i) =>
        i === index ? { ...book, name: newName.trim() } : book
      );
      return {
        ...prev,
        books: updatedBooks
      };
    });
  };

  const deleteBook = (index: number) => {
    setBookState(prev => {
      if (prev.books.length > 1) {
        const updatedBooks = prev.books.filter((_, i) => i !== index);
        let newCurrentBookIndex = prev.currentBookIndex;
        
        // Adjust current book index if the deleted book was selected or before it
        if (newCurrentBookIndex >= updatedBooks.length) {
          newCurrentBookIndex = updatedBooks.length - 1;
        } else if (newCurrentBookIndex > index) {
          newCurrentBookIndex -= 1;
        }
        
        return {
          books: updatedBooks,
          currentBookIndex: newCurrentBookIndex,
          currentWordIndex: 0
        };
      } else {
        alert('You must have at least one word book.');
        return prev;
      }
    });
  };

  // Word management functions
  const addWord = (word: Word) => {
    setBookState(prev => {
      const updatedBooks = prev.books.map((book, index) => {
        if (index !== prev.currentBookIndex) return book;
        return {
          ...book,
          words: [...book.words, word]
        };
      });
      return {
        ...prev,
        books: updatedBooks
      };
    });
  };

  const deleteWord = (wordId: number) => {
    setBookState(prev => {
      const updatedBooks = prev.books.map((book, index) => {
        if (index !== prev.currentBookIndex) return book;
        return {
          ...book,
          words: book.words.filter(word => word.id !== wordId)
        };
      });

      const currentWords = updatedBooks[prev.currentBookIndex]?.words ?? [];
      const newCurrentWordIndex = currentWords.length > 0
        ? Math.min(prev.currentWordIndex, currentWords.length - 1)
        : 0;
      
      return {
        ...prev,
        books: updatedBooks,
        currentWordIndex: newCurrentWordIndex
      };
    });
  };

  const editWord = (wordId: number, updatedWord: Partial<Word>) => {
    setBookState(prev => {
      const updatedBooks = prev.books.map((book, index) => {
        if (index !== prev.currentBookIndex) return book;
        return {
          ...book,
          words: book.words.map(word =>
            word.id === wordId ? { ...word, ...updatedWord } : word
          )
        };
      });
      
      return {
        ...prev,
        books: updatedBooks
      };
    });
  };

  // Navigation functions
  const navigateTo = (section: string) => {
    setActiveSection(section);
  };

  // Practice mode functions
  const nextWord = () => {
    setBookState(prev => {
      const currentBook = prev.books[prev.currentBookIndex];
      if (!currentBook) return prev;
      
      const currentWords = currentBook.words || [];
      if (currentWords.length > 0) {
        return {
          ...prev,
          currentWordIndex: (prev.currentWordIndex + 1) % currentWords.length
        };
      }
      return prev;
    });
  };

  const prevWord = () => {
    setBookState(prev => {
      const currentBook = prev.books[prev.currentBookIndex];
      if (!currentBook) return prev;
      
      const currentWords = currentBook.words || [];
      if (currentWords.length > 0) {
        return {
          ...prev,
          currentWordIndex: (prev.currentWordIndex - 1 + currentWords.length) % currentWords.length
        };
      }
      return prev;
    });
  };

  const updateWordDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    setBookState(prev => {
      const currentBook = prev.books[prev.currentBookIndex];
      if (currentBook && prev.currentWordIndex < currentBook.words.length) {
        const updatedBooks = [...prev.books];
        const currentWord = updatedBooks[prev.currentBookIndex].words[prev.currentWordIndex];
        updatedBooks[prev.currentBookIndex].words[prev.currentWordIndex] = {
          ...currentWord,
          difficulty
        };
        
        return {
          ...prev,
          books: updatedBooks
        };
      }
      return prev;
    });
  };

  // Settings functions
  const updateSettings = (newSettings: Partial<SettingsType>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <div className="app">
      <Header
        books={bookState.books}
        currentBookIndex={bookState.currentBookIndex}
        onSelectBook={selectBook}
        onCreateBook={createBook}
        onRenameBook={renameBook}
        onDeleteBook={deleteBook}
        onNavigate={navigateTo}
        activeSection={activeSection}
      />
      
      <main>
        {activeSection === 'flashcards' && (
          <Flashcards
            currentBook={getCurrentBook()}
            currentWordIndex={bookState.currentWordIndex}
            onNextWord={nextWord}
            onPrevWord={prevWord}
            onUpdateDifficulty={updateWordDifficulty}
            settings={settings}
          />
        )}
        
        {activeSection === 'practice' && (
          <Practice
            currentBook={getCurrentBook()}
            currentWordIndex={bookState.currentWordIndex}
            onNextWord={nextWord}
            settings={settings}
          />
        )}
        
        {activeSection === 'word-list' && (
          <WordList
            currentBook={getCurrentBook()}
            onAddWord={addWord}
            onDeleteWord={deleteWord}
            onEditWord={editWord}
          />
        )}
        
        {activeSection === 'settings' && (
          <Settings
            settings={settings}
            onUpdateSettings={updateSettings}
          />
        )}

        {activeSection === 'leaderboard' && (
          <Leaderboard />
        )}

        {activeSection === 'auth' && (
          <Auth onClose={() => setActiveSection('flashcards')} />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
   
      <AppContent />
   
  );
}

export default App;