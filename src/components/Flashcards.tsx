import React, { useState } from "react";
import { Book, Settings } from "../types";

interface FlashcardsProps {
  currentBook: Book;
  currentWordIndex: number;
  onNextWord: () => void;
  onPrevWord: () => void;
  onUpdateDifficulty: (difficulty: "easy" | "medium" | "hard") => void;
  settings: Settings;
}

const Flashcards: React.FC<FlashcardsProps> = ({
  currentBook,
  currentWordIndex,
  onNextWord,
  onPrevWord,
  settings,
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
        <div className="empty-list">
          <span className="empty-list-icon">📝</span>
          <p>还没有单词，请先添加一些单词吧！</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-container">
      <div className="flashcard-counter">
        {currentWordIndex + 1} / {currentBook.words.length}
      </div>
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="front">
            <h2>单词</h2>
            <p id="word">{currentWord.word}</p>
            <button
              className="play-btn"
              onClick={(e) => {
                e.stopPropagation();
                playPronunciation(currentWord.word);
              }}
            >
              🔊 播放发音
            </button>
          </div>
          <div className="back">
            <h2>释义</h2>
            <p id="definition">{currentWord.definition}</p>
            <p className="translation">{currentWord.translation}</p>
            <button
              className="play-btn"
              onClick={(e) => {
                e.stopPropagation();
                playPronunciation(currentWord.translation);
              }}
            >
              🔊 播放翻译
            </button>
          </div>
        </div>
      </div>
      <div className="flashcard-buttons">
        <button id="prev-btn" onClick={onPrevWord}>
          ← 上一个
        </button>
        <button id="flip-btn" onClick={handleFlip}>
          🔄 翻转
        </button>
        <button id="next-btn" onClick={onNextWord}>
          下一个 →
        </button>
      </div>
      {/*     <div className="difficulty-buttons">
        <button 
          id="easy-btn" 
          className="difficulty easy"
          onClick={() => onUpdateDifficulty('easy')}
        >
          简单
        </button>
        <button 
          id="medium-btn" 
          className="difficulty medium"
          onClick={() => onUpdateDifficulty('medium')}
        >
          中等
        </button>
        <button 
          id="hard-btn" 
          className="difficulty hard"
          onClick={() => onUpdateDifficulty('hard')}
        >
          困难
        </button>
      </div> */}
    </div>
  );
};

export default Flashcards;
