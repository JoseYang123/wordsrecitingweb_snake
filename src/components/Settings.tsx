import React from 'react';
import { Settings as SettingsType } from '../types';

interface SettingsProps {
  settings: SettingsType;
  onUpdateSettings: (settings: Partial<SettingsType>) => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdateSettings }) => {
  const handleStudyModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateSettings({ studyMode: e.target.value as 'flashcards' | 'quiz' });
  };

  const handleDifficultyFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateSettings({ difficultyFilter: e.target.value as 'all' | 'easy' | 'medium' | 'hard' });
  };

  const handleSoundEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSettings({ soundEnabled: e.target.checked });
  };

  return (
    <div className="settings-container">
      <h2>⚙️ 设置</h2>
      <div className="settings-item">
        <label htmlFor="study-mode">学习模式</label>
        <select 
          id="study-mode" 
          value={settings.studyMode}
          onChange={handleStudyModeChange}
        >
          <option value="flashcards">闪卡</option>
          <option value="quiz">测验</option>
        </select>
      </div>
      <div className="settings-item">
        <label htmlFor="difficulty-filter">难度筛选</label>
        <select 
          id="difficulty-filter" 
          value={settings.difficultyFilter}
          onChange={handleDifficultyFilterChange}
        >
          <option value="all">全部</option>
          <option value="easy">简单</option>
          <option value="medium">中等</option>
          <option value="hard">困难</option>
        </select>
      </div>
      <div className="settings-item">
        <label htmlFor="sound-enabled">声音</label>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            id="sound-enabled" 
            checked={settings.soundEnabled}
            onChange={handleSoundEnabledChange}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
