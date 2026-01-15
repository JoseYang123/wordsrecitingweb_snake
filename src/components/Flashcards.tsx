import React, { useState } from 'react';
import { Book, Settings } from '../types';

interface FlashcardsProps {
  currentBook: Book;
  currentWordIndex: number;
  onNextWord: () => void;
  onPrevWord: () => void;
  onUpdateDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
  settings: Settings;
}

const Flashcards: React.FC<FlashcardsProps> = ({
  currentBook,
  currentWordIndex,
  onNextWord,
  onPrevWord,
  onUpdateDifficulty,
  settings
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const currentWord = currentBook.words[currentWordIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const playPronunciation = (text: string) => {
    if (settings.soundEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  if (!currentWord) {
    return (
      <div className="flashcard-container">
        <div className="flashcard">
          <div className="front">
            <h2>Word</h2>
            <p>No words available</p>
            <p>Please add words to this book</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="front">
            <h2>Word</h2>
            <p id="word">{currentWord.word}</p>
            <button 
              className="play-btn"
              onClick={(e) => {
                e.stopPropagation();
                playPronunciation(currentWord.word);
              }}
            >
              Play Pronunciation
            </button>
          </div>
          <div className="back">
            <h2>Definition</h2>
            <p id="definition">{currentWord.definition}</p>
            <p className="translation">{currentWord.translation}</p>
            <button 
              className="play-btn"
              onClick={(e) => {
                e.stopPropagation();
                playPronunciation(currentWord.translation);
              }}
            >
              Play Translation
            </button>
          </div>
        </div>
      </div>
      <div className="flashcard-buttons">
        <button id="prev-btn" onClick={onPrevWord}>
          Previous
        </button>
        <button id="flip-btn" onClick={handleFlip}>
          Flip
        </button>
        <button id="next-btn" onClick={onNextWord}>
          Next
        </button>
      </div>
      <div className="difficulty-buttons">
        <button 
          id="easy-btn" 
          className="difficulty easy"
          onClick={() => onUpdateDifficulty('easy')}
        >
          Easy
        </button>
        <button 
          id="medium-btn" 
          className="difficulty medium"
          onClick={() => onUpdateDifficulty('medium')}
        >
          Medium
        </button>
        <button 
          id="hard-btn" 
          className="difficulty hard"
          onClick={() => onUpdateDifficulty('hard')}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default Flashcards;