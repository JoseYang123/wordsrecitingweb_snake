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

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      {entries.length === 0 ? (
        <p>No entries yet. Start practicing to get on the board!</p>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Words Recited</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
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
      )}
    </div>
  );
};

export default Leaderboard;
