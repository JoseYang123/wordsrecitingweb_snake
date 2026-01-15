import React from 'react';
import { Book } from '../types';

interface HeaderProps {
  books: Book[];
  currentBookIndex: number;
  activeSection: string;
  onSelectBook: (index: number) => void;
  onCreateBook: (name: string) => void;
  onRenameBook: (index: number, newName: string) => void;
  onDeleteBook: (index: number) => void;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  books,
  currentBookIndex,
  activeSection,
  onSelectBook,
  onCreateBook,
  onRenameBook,
  onDeleteBook,
  onNavigate
}) => {
  const handleCreateBook = () => {
    const bookName = prompt('Enter book name:');
    if (bookName) {
      onCreateBook(bookName);
    }
  };

  const handleRenameBook = () => {
    const newName = prompt('Enter new book name:');
    if (newName) {
      onRenameBook(currentBookIndex, newName);
    }
  };

  const handleDeleteBook = () => {
    if (confirm('Are you sure you want to delete this book?')) {
      onDeleteBook(currentBookIndex);
    }
  };

  return (
    <header>
      <h1>Enjoy Words 单词大师（网页版）</h1>
      <nav>
        <ul>
          <li>
            <a 
              href="#flashcards" 
              className={activeSection === 'flashcards' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('flashcards');
              }}
            >
              Flashcards
            </a>
          </li>
          <li>
            <a 
              href="#practice" 
              className={activeSection === 'practice' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('practice');
              }}
            >
              Practice
            </a>
          </li>
          <li>
            <a 
              href="#word-list" 
              className={activeSection === 'word-list' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('word-list');
              }}
            >
              Word List
            </a>
          </li>
          <li>
            <a 
              href="#settings" 
              className={activeSection === 'settings' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('settings');
              }}
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <div className="book-management">
        <select 
          id="book-selector"
          value={currentBookIndex}
          onChange={(e) => onSelectBook(parseInt(e.target.value))}
        >
          {books.map((book, index) => (
            <option key={book.id} value={index}>
              {book.name}
            </option>
          ))}
        </select>
        <button id="create-book-btn" onClick={handleCreateBook}>
          Create Book
        </button>
        <button id="rename-book-btn" onClick={handleRenameBook}>
          Rename Book
        </button>
        <button id="delete-book-btn" onClick={handleDeleteBook}>
          Delete Book
        </button>
      </div>
    </header>
  );
};

export default Header;