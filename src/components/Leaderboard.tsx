import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getLeaderboard } from '../services/leaderboardService';
import { LeaderboardEntry } from '../types';

const Leaderboard: React.FC = () => {
  const { user } = useAuth();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setEntries(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to load leaderboard';
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) return <div className="leaderboard-container"><p>Loading leaderboard...</p></div>;
  if (error) return <div className="leaderboard-container"><p className="auth-error">{error}</p></div>;

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  // Reorder for podium: 2nd, 1st, 3rd
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : [];

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      {entries.length === 0 ? (
        <div className="empty-list">
          <span className="empty-list-icon">🏅</span>
          <p>No entries yet. Start practicing to get on the board!</p>
        </div>
      ) : (
        <>
          {podiumOrder.length === 3 && (
            <div className="podium">
              {podiumOrder.map((entry, i) => {
                const rankEmojis = ['🥈', '🥇', '🥉'];
                const initials = (entry.displayName || '?').charAt(0).toUpperCase();
                return (
                  <div className="podium-item" key={entry.uid}>
                    <div className="podium-avatar">{initials}</div>
                    <div className="podium-name">{entry.displayName}</div>
                    <div className="podium-score">{entry.wordsRecited} words</div>
                    <div className="podium-block">
                      <span className="podium-rank">{rankEmojis[i]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Words Recited</th>
              </tr>
            </thead>
            <tbody>
              {(podiumOrder.length < 3 ? entries : rest).map((entry) => (
                <tr
                  key={entry.uid}
                  className={user?.uid === entry.uid ? 'current-user-row' : ''}
                >
                  <td className="rank-cell">
                    {entry.rank <= 3 ? ['🥇', '🥈', '🥉'][entry.rank - 1] : entry.rank}
                  </td>
                  <td>{entry.displayName}</td>
                  <td>{entry.wordsRecited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Leaderboard;
