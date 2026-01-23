import React, { useState } from 'react';
import { Book, Word } from '../types';

interface WordListProps {
  currentBook: Book;
  onAddWord: (word: Word) => void;
  onDeleteWord: (id: number) => void;
  onEditWord: (id: number, updatedWord: Partial<Word>) => void;
}

const WordList: React.FC<WordListProps> = ({
  currentBook,
  onAddWord,
  onDeleteWord,
  onEditWord
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newWord, setNewWord] = useState<Partial<Word>>({
    word: '',
    definition: '',
    translation: '',
    difficulty: 'medium'
  });

  const handleAddWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWord.word && newWord.definition && newWord.translation && newWord.difficulty) {
      const wordToAdd: Word = {
        id: Date.now(),
        word: newWord.word,
        definition: newWord.definition,
        translation: newWord.translation,
        difficulty: newWord.difficulty as 'easy' | 'medium' | 'hard'
      };
      onAddWord(wordToAdd);
      setNewWord({ word: '', definition: '', translation: '', difficulty: 'medium' });
      setIsAddModalOpen(false);
    }
  };

  const handleEditWord = (word: Word) => {
    const newWordValue = prompt('Enter new word:', word.word);
    const newDefinition = prompt('Enter new definition:', word.definition);
    const newTranslation = prompt('Enter new translation:', word.translation);
    const newDifficulty = prompt('Enter new difficulty (easy/medium/hard):', word.difficulty);
    
    if (newWordValue && newDefinition && newTranslation && newDifficulty) {
      onEditWord(word.id, {
        word: newWordValue.trim(),
        definition: newDefinition.trim(),
        translation: newTranslation.trim(),
        difficulty: newDifficulty.toLowerCase() as 'easy' | 'medium' | 'hard'
      });
    }
  };

  const handleDeleteWord = (id: number) => {
    if (confirm('Are you sure you want to delete this word?')) {
      onDeleteWord(id);
    }
  };

  const importWords = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          const lines = content.split('\n');
          let importedCount = 0;
          
          lines.forEach(line => {
            const parts = line.split('\t');
            if (parts.length >= 3) {
              const wordToAdd: Word = {
                id: Date.now() + importedCount,
                word: parts[0].trim(),
                definition: parts[1].trim(),
                translation: parts[2].trim(),
                difficulty: parts.length > 3 ? parts[3].trim().toLowerCase() as 'easy' | 'medium' | 'hard' : 'medium'
              };
              onAddWord(wordToAdd);
              importedCount++;
            }
          });
          
          if (importedCount > 0) {
            alert(`Successfully imported ${importedCount} words!`);
          } else {
            alert('No valid words found in the file. Please use tab-separated format: word\tdefinition\ttranslation\tdifficulty');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="word-list-container">
      <div className="word-list-header">
        <h2>Word List</h2>
        <div className="word-list-actions">
          <button id="add-word-btn" onClick={() => setIsAddModalOpen(true)}>
            Add Word
          </button>
          <button id="import-words-btn" onClick={importWords}>
            Import Words
          </button>
        </div>
      </div>
      <div className="word-list-content">
        <ul id="words-container">
          {currentBook.words.map(word => (
            <li key={word.id}>
              <div className="word-info">
                <h3>{word.word}</h3>
                <p>{word.definition}</p>
                <p className="translation">Translation: {word.translation}</p>
                <p className="difficulty-tag">Difficulty: {word.difficulty}</p>
              </div>
              <div className="word-actions">
                <button 
                  className="edit-word-btn" 
                  onClick={() => handleEditWord(word)}
                >
                  Edit
                </button>
                <button 
                  className="delete-word-btn" 
                  onClick={() => handleDeleteWord(word.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {currentBook.words.length === 0 && (
          <div className="empty-list">
            <p>No words in this book. Click "Add Word" to get started!</p>
          </div>
        )}
      </div>

      {/* Add Word Modal */}
      {isAddModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            <h3>Add New Word</h3>
            <form id="add-word-form" onSubmit={handleAddWord}>
              <div className="form-group">
                <label htmlFor="new-word">Word:</label>
                <input 
                  type="text" 
                  id="new-word" 
                  value={newWord.word} 
                  onChange={(e) => setNewWord({ ...newWord, word: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-definition">Definition:</label>
                <textarea 
                  id="new-definition" 
                  value={newWord.definition} 
                  onChange={(e) => setNewWord({ ...newWord, definition: e.target.value })} 
                  required 
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="new-translation">Translation:</label>
                <input 
                  type="text" 
                  id="new-translation" 
                  value={newWord.translation} 
                  onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-difficulty">Difficulty:</label>
                <select 
                  id="new-difficulty" 
                  value={newWord.difficulty} 
                  onChange={(e) => setNewWord({ ...newWord, difficulty: e.target.value as 'easy' | 'medium' | 'hard' })} 
                  required 
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="form-buttons">
                <button 
                  type="button" 
                  id="cancel-add-word" 
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit">Add Word</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordList;