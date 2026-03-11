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
    const newWordValue = prompt('请输入新单词：', word.word);
    const newDefinition = prompt('请输入新释义：', word.definition);
    const newTranslation = prompt('请输入新翻译：', word.translation);
    const newDifficulty = prompt('请输入新难度（easy/medium/hard）：', word.difficulty);
    
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
    if (confirm('确定要删除这个单词吗？')) {
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
            alert(`成功导入 ${importedCount} 个单词！`);
          } else {
            alert('未找到有效单词。请使用制表符分隔格式：单词\t释义\t翻译\t难度');
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
        <h2>单词列表</h2>
        <div className="word-list-actions">
          <button id="add-word-btn" onClick={() => setIsAddModalOpen(true)}>
            + 添加单词
          </button>
          <button id="import-words-btn" onClick={importWords}>
            📥 导入单词
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
                <p className="translation">{word.translation}</p>
                <div className="difficulty-tag">
                  <span className={`difficulty-pill ${word.difficulty}`}>
                    {word.difficulty}
                  </span>
                </div>
              </div>
              <div className="word-actions">
                <button 
                  className="edit-word-btn" 
                  onClick={() => handleEditWord(word)}
                >
                  编辑
                </button>
                <button 
                  className="delete-word-btn" 
                  onClick={() => handleDeleteWord(word.id)}
                >
                  删除
                </button>
              </div>
            </li>
          ))}
        </ul>
        {currentBook.words.length === 0 && (
          <div className="empty-list">
            <span className="empty-list-icon">📖</span>
            <p>这本词书还没有单词。</p>
            <p>点击"+ 添加单词"开始吧！</p>
          </div>
        )}
      </div>

      {/* Add Word Modal */}
      {isAddModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            <h3>添加新单词</h3>
            <form id="add-word-form" onSubmit={handleAddWord}>
              <div className="form-group">
                <label htmlFor="new-word">单词：</label>
                <input 
                  type="text" 
                  id="new-word" 
                  value={newWord.word} 
                  onChange={(e) => setNewWord({ ...newWord, word: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-definition">释义：</label>
                <textarea 
                  id="new-definition" 
                  value={newWord.definition} 
                  onChange={(e) => setNewWord({ ...newWord, definition: e.target.value })} 
                  required 
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="new-translation">翻译：</label>
                <input 
                  type="text" 
                  id="new-translation" 
                  value={newWord.translation} 
                  onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-difficulty">难度：</label>
                <select 
                  id="new-difficulty" 
                  value={newWord.difficulty} 
                  onChange={(e) => setNewWord({ ...newWord, difficulty: e.target.value as 'easy' | 'medium' | 'hard' })} 
                  required 
                >
                  <option value="easy">简单</option>
                  <option value="medium">中等</option>
                  <option value="hard">困难</option>
                </select>
              </div>
              <div className="form-buttons">
                <button 
                  type="button" 
                  id="cancel-add-word" 
                  onClick={() => setIsAddModalOpen(false)}
                >
                  取消
                </button>
                <button type="submit">添加单词</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordList;
