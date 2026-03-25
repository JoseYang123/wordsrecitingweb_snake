import React, { useState, useEffect } from "react";
import { Book, Settings } from "../types";


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
  settings,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<
    "correct" | "incorrect" | ""
  >("");
  const currentWord = currentBook.words[currentWordIndex];

  // Reset state when current word changes
  useEffect(() => {
    setCurrentStep(1);
    setUserInput("");
    setFeedback("");
    setFeedbackType("");
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
    if (currentStep === 3) {
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
      const letters = word.split("");
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
      setFeedback("回答正确！");
      setFeedbackType("correct");

      // incrementWordsRecited(user.uid).catch(() => {});

      // Auto-advance to next word after 1 second
      setTimeout(() => {
        handleNextWord();
      }, 1000);
    } else {
      setFeedback("回答错误，请再试一次！");
      setFeedbackType("incorrect");
    }
  };

  const handleNextWord = () => {
    setCurrentStep(1);
    setUserInput("");
    setFeedback("");
    setFeedbackType("");
    onNextWord();
  };

  if (!currentWord) {
    return (
      <div className="practice-container">
        <h2>互动练习</h2>
        <div className="practice-steps">
          <div className="practice-step">
            <span className="empty-list-icon">🎯</span>
            <h3>暂无单词</h3>
            <p>请先在词书中添加单词再开始练习</p>
          </div>
        </div>
      </div>
    );
  }

  const progressWidth = `${(currentStep / 3) * 100}%`;

  return (
    <div className="practice-container">
      <h2>互动练习</h2>
      <div className="practice-progress">
        <div className="practice-progress-bar">
          <div
            className="practice-progress-fill"
            style={{ width: progressWidth }}
          ></div>
        </div>
        <span className="practice-progress-label">
          第 {currentStep} 步，共 3 步
        </span>
      </div>
      <div className="practice-steps">
        {/* Step 1: Listen and Repeat */}
        <div
          className="practice-step"
          style={{ display: currentStep === 1 ? "flex" : "none" }}
        >
          <h3>第一步：听读</h3>
          <p id="practice-word">{currentWord.word}</p>
          <button
            id="play-word-btn"
            onClick={() => playPronunciation(currentWord.word)}
          >
            🔊 播放单词
          </button>
          <button id="next-to-step-2" onClick={handleNextStep}>
            下一步 →
          </button>
        </div>

        {/* Step 2: Translation */}
        <div
          className="practice-step"
          style={{ display: currentStep === 2 ? "flex" : "none" }}
        >
          <h3>第二步：翻译</h3>
          <p id="practice-translation">{currentWord.translation}</p>
          <button
            id="play-translation-btn"
            onClick={() => playPronunciation(currentWord.translation)}
          >
            🔊 播放翻译
          </button>
          <button id="next-to-step-3" onClick={handleNextStep}>
            下一步 →
          </button>
        </div>

        {/* Step 3: Type the Word */}
        <div
          className="practice-step"
          style={{ display: currentStep === 3 ? "flex" : "none" }}
        >
          <h3>第三步：拼写</h3>
          <p id="typing-hint">请拼写单词：{currentWord.word.charAt(0)}...</p>
          <input
            type="text"
            id="word-input"
            placeholder="在此输入单词"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleCheckAnswer();
              }
            }}
          />
          <button id="check-word-btn" onClick={handleCheckAnswer}>
            ✅ 检查答案
          </button>
          <button
            id="play-letters-btn"
            onClick={() => playWordLetters(currentWord.word)}
          >
            🔤 播放字母
          </button>
          {feedback && (
            <p
              id="feedback"
              className={
                feedbackType === "correct"
                  ? "feedback-correct"
                  : feedbackType === "incorrect"
                    ? "feedback-incorrect"
                    : ""
              }
            >
              {feedback}
            </p>
          )}
          <button id="next-word-btn" onClick={handleNextWord}>
            下一个单词 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
