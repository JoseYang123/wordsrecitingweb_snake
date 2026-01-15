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
      <h2>Settings</h2>
      <div className="settings-item">
        <label htmlFor="study-mode">Study Mode:</label>
        <select 
          id="study-mode" 
          value={settings.studyMode}
          onChange={handleStudyModeChange}
        >
          <option value="flashcards">Flashcards</option>
          <option value="quiz">Quiz</option>
        </select>
      </div>
      <div className="settings-item">
        <label htmlFor="difficulty-filter">Difficulty Filter:</label>
        <select 
          id="difficulty-filter" 
          value={settings.difficultyFilter}
          onChange={handleDifficultyFilterChange}
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="settings-item">
        <label htmlFor="sound-enabled">Sound Enabled:</label>
        <input 
          type="checkbox" 
          id="sound-enabled" 
          checked={settings.soundEnabled}
          onChange={handleSoundEnabledChange}
        />
      </div>
    </div>
  );
};

export default Settings;