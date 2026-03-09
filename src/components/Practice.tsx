import React, { useState, useEffect } from 'react';
import { Book, Settings } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { incrementWordsRecited } from '../services/leaderboardService';

interface PracticeProps {
  currentBook: Book;
  currentWordIndex: number;
  onNextWord: () => void;
  settings: Settings;
}

const Practice: React.FC<PracticeProps> = ({
  currentBook,
  currentWordIndex,
  onNextWord,
  settings
}) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | ''>('');
  const currentWord = currentBook.words[currentWordIndex];

  // Reset state when current word changes
  useEffect(() => {
    setCurrentStep(1);
    setUserInput('');
    setFeedback('');
    setFeedbackType('');
  }, [currentWordIndex]);

  // Auto-play audio when step changes
  useEffect(() => {
    if (currentWord && settings.soundEnabled) {
      setTimeout(() => {
        if (currentStep === 1) {
          playPronunciation(currentWord.word);
        } else if (currentStep === 2) {
          playPronunciation(currentWord.translation);
        }
      }, 300);
    }
    if(currentStep===3)
    {
        
        playWordLetters(currentWord.word);
    }

 
  }, [currentStep, currentWord, settings.soundEnabled]);

  const playPronunciation = (text: string) => {
    if (settings.soundEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const playWordLetters = (word: string) => {
    if (settings.soundEnabled) {
      const letters = word.split('');
      letters.forEach((letter, index) => {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(letter);
          speechSynthesis.speak(utterance);
        }, index * 300);
      });
    }
  };

  const handleNextStep = () => {
 
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCheckAnswer = () => {
    if (!currentWord) return;

    const trimmedInput = userInput.trim().toLowerCase();
    const correctWord = currentWord.word.toLowerCase();

    if (trimmedInput === correctWord) {
      setFeedback('Correct! Well done!');
      setFeedbackType('correct');
      if (user) {
        incrementWordsRecited(user.uid).catch(() => {});
      }
    } else {
      setFeedback('Incorrect. Please try again!');
      setFeedbackType('incorrect');
    }
  };

  const handleNextWord = () => {
    setCurrentStep(1);
    setUserInput('');
    setFeedback('');
    setFeedbackType('');
    onNextWord();
  };

  if (!currentWord) {
    return (
      <div className="practice-container">
        <h2>Interactive Practice</h2>
        <div className="practice-steps">
          <div className="practice-step">
            <span className="empty-list-icon">🎯</span>
            <h3>No words available</h3>
            <p>Please add words to this book before starting practice</p>
          </div>
        </div>
      </div>
    );
  }

  const progressWidth = `${(currentStep / 3) * 100}%`;

  return (
    <div className="practice-container">
      <h2>Interactive Practice</h2>
      <div className="practice-progress">
        <div className="practice-progress-bar">
          <div className="practice-progress-fill" style={{ width: progressWidth }}></div>
        </div>
        <span className="practice-progress-label">Step {currentStep} of 3</span>
      </div>
      <div className="practice-steps">
        {/* Step 1: Listen and Repeat */}
        <div className="practice-step" style={{ display: currentStep === 1 ? 'flex' : 'none' }}>
          <h3>Step 1: Listen and Repeat</h3>
          <p id="practice-word">{currentWord.word}</p>
          <button 
            id="play-word-btn" 
            onClick={() => playPronunciation(currentWord.word)}
          >
            🔊 Play Word
          </button>
          <button id="next-to-step-2" onClick={handleNextStep}>
            Next Step →
          </button>
        </div>

        {/* Step 2: Translation */}
        <div className="practice-step" style={{ display: currentStep === 2 ? 'flex' : 'none' }}>
          <h3>Step 2: Translation</h3>
          <p id="practice-translation">{currentWord.translation}</p>
          <button 
            id="play-translation-btn" 
            onClick={() => playPronunciation(currentWord.translation)}
          >
            🔊 Play Translation
          </button>
          <button id="next-to-step-3" onClick={handleNextStep}>
            Next Step →
          </button>
        </div>

        {/* Step 3: Type the Word */}
        <div className="practice-step" style={{ display: currentStep === 3 ? 'flex' : 'none' }}>
          <h3>Step 3: Type the Word</h3>
          <p id="typing-hint">Type the word: {currentWord.word.charAt(0)}...</p>
          <input 
            type="text" 
            id="word-input" 
            placeholder="Type the word here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleCheckAnswer();
              }
            }}
          />
          <button 
            id="check-word-btn" 
            onClick={handleCheckAnswer}
          >
            ✅ Check Answer
          </button>
          <button 
            id="play-letters-btn" 
            onClick={() => playWordLetters(currentWord.word)}
          >
            🔤 Play Letters
          </button>
          {feedback && (
            <p 
              id="feedback" 
              className={feedbackType === 'correct' ? 'feedback-correct' : feedbackType === 'incorrect' ? 'feedback-incorrect' : ''}
            >
              {feedback}
            </p>
          )}
          <button id="next-word-btn" onClick={handleNextWord}>
            Next Word →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
