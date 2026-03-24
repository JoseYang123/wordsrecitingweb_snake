import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserStats } from '../services/leaderboardService';

interface UserProfileProps {
  onNavigate: (section: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigate }) => {
  const { user, logout } = useAuth();
  const [wordsRecited, setWordsRecited] = useState(0);

  useEffect(() => {
    if (user) {
      getUserStats(user.uid).then((stats) => {
        if (stats) setWordsRecited(stats.wordsRecited);
      }).catch(() => {});
    }
  }, [user]);

  if (!user) {
    return (
      <div className="user-profile-badge">
        <button className="sign-in-btn" onClick={() => onNavigate('auth')}>
          登录/注册
        </button>
      </div>
    );
  }

  const initials = (user.displayName || 'U').charAt(0).toUpperCase();

  return (
    <div className="user-profile-badge">
      <div className="user-avatar">{initials}</div>
      <span className="user-display-name">{user.displayName || '用户'}</span>
      <span className="user-words-count">📝 {wordsRecited}</span>
      <button className="logout-btn" onClick={logout}>
        退出
      </button>
    </div>
  );
};

export default UserProfile;
