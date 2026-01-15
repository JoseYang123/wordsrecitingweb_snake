import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Flashcards from './components/Flashcards';
import Practice from './components/Practice';
import WordList from './components/WordList';
import Settings from './components/Settings';
import { Word, Book, Settings as SettingsType } from './types';

function App() {
  // State management
  const [books, setBooks] = useState<Book[]>([]);
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('flashcards');
  const [settings, setSettings] = useState<SettingsType>({
    studyMode: 'flashcards',
    difficultyFilter: 'all',
    soundEnabled: true
  });

  // Load data from local storage on component mount
  useEffect(() => {
    loadBooks();
    loadSettings();
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    saveBooks();
  }, [books]);

  useEffect(() => {
    saveSettings();
  }, [settings]);

  // Data persistence functions
  const loadBooks = () => {
    const savedBooks = localStorage.getItem('wordMasterBooks');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      // Add default book with sample words
      const defaultBooks: Book[] = [
        {
          id: 1,
          name: 'Default Book',
          words: [
            { id: 1, word: 'apple', definition: 'a round fruit with red or green skin', translation: '苹果', difficulty: 'easy' },
            { id: 2, word: 'banana', definition: 'a long curved fruit with yellow skin', translation: '香蕉', difficulty: 'easy' },
            { id: 3, word: 'computer', definition: 'an electronic device for storing and processing data', translation: '电脑', difficulty: 'medium' },
            { id: 4, word: 'programming', definition: 'the process of writing computer programs', translation: '编程', difficulty: 'hard' },
            { id: 5, word: 'algorithm', definition: 'a set of rules to be followed in calculations', translation: '算法', difficulty: 'hard' }
          ]
        }
      ];
      setBooks(defaultBooks);
      saveBooks();
    }
  };

  const saveBooks = () => {
    localStorage.setItem('wordMasterBooks', JSON.stringify(books));
  };

  const loadSettings = () => {
    const savedSettings = localStorage.getItem('wordMasterSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  };

  const saveSettings = () => {
    localStorage.setItem('wordMasterSettings', JSON.stringify(settings));
  };

  // Book management functions
  const getCurrentBook = (): Book => {
    return books[currentBookIndex] || { id: 0, name: 'No Book', words: [] };
  };

  const getCurrentWords = (): Word[] => {
    return getCurrentBook().words || [];
  };

  const createBook = (name: string) => {
    const newBook: Book = {
      id: Date.now(),
      name: name.trim(),
      words: []
    };
    setBooks([...books, newBook]);
    setCurrentBookIndex(books.length);
  };

  const selectBook = (index: number) => {
    setCurrentBookIndex(index);
    setCurrentWordIndex(0);
  };

  const renameBook = (index: number, newName: string) => {
    const updatedBooks = [...books];
    updatedBooks[index].name = newName.trim();
    setBooks(updatedBooks);
  };

  const deleteBook = (index: number) => {
    if (books.length > 1) {
      const updatedBooks = books.filter((_, i) => i !== index);
      setBooks(updatedBooks);
      if (currentBookIndex >= updatedBooks.length) {
        setCurrentBookIndex(updatedBooks.length - 1);
      }
      setCurrentWordIndex(0);
    } else {
      alert('You must have at least one word book.');
    }
  };

  // Word management functions
  const addWord = (word: Word) => {
    const updatedBooks = [...books];
    updatedBooks[currentBookIndex].words.push(word);
    setBooks(updatedBooks);
  };

  const deleteWord = (wordId: number) => {
    const updatedBooks = [...books];
    updatedBooks[currentBookIndex].words = updatedBooks[currentBookIndex].words.filter(
      word => word.id !== wordId
    );
    setBooks(updatedBooks);
    if (currentWordIndex >= updatedBooks[currentBookIndex].words.length) {
      setCurrentWordIndex(0);
    }
  };

  const editWord = (wordId: number, updatedWord: Partial<Word>) => {
    const updatedBooks = [...books];
    const wordIndex = updatedBooks[currentBookIndex].words.findIndex(
      word => word.id === wordId
    );
    if (wordIndex !== -1) {
      updatedBooks[currentBookIndex].words[wordIndex] = {
        ...updatedBooks[currentBookIndex].words[wordIndex],
        ...updatedWord
      };
      setBooks(updatedBooks);
    }
  };

  // Navigation functions
  const navigateTo = (section: string) => {
    setActiveSection(section);
  };

  // Practice mode functions
  const nextWord = () => {
    const currentWords = getCurrentWords();
    if (currentWords.length > 0) {
      setCurrentWordIndex((prevIndex) =>
        (prevIndex + 1) % currentWords.length
      );
    }
  };

  const prevWord = () => {
    const currentWords = getCurrentWords();
    if (currentWords.length > 0) {
      setCurrentWordIndex((prevIndex) =>
        (prevIndex - 1 + currentWords.length) % currentWords.length
      );
    }
  };

  const updateWordDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    const currentWords = getCurrentWords();
    if (currentWords.length > 0) {
      editWord(currentWords[currentWordIndex].id, { difficulty });
    }
  };

  // Settings functions
  const updateSettings = (newSettings: Partial<SettingsType>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <div className="app">
      <Header
        books={books}
        currentBookIndex={currentBookIndex}
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
            currentWordIndex={currentWordIndex}
            onNextWord={nextWord}
            onPrevWord={prevWord}
            onUpdateDifficulty={updateWordDifficulty}
            settings={settings}
          />
        )}
        
        {activeSection === 'practice' && (
          <Practice
            currentBook={getCurrentBook()}
            currentWordIndex={currentWordIndex}
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
      </main>
    </div>
  );
}

export default App;