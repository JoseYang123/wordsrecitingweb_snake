import React, { useState, useEffect } from "react";
import { getLeaderboard } from "../services/leaderboardService";
import { LeaderboardEntry } from "../types";

const Leaderboard: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setEntries(data);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Failed to load leaderboard";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading)
    return (
      <div className="leaderboard-container">
        <p>加载排行榜中...</p>
      </div>
    );
  if (error)
    return (
      <div className="leaderboard-container">
        <p className="auth-error">{error}</p>
      </div>
    );

  const top3 = entries.slice(0, 3);
  

  // Reorder for podium: 2nd, 1st, 3rd
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : [];

  return (
    <div className="leaderboard-container">
      <h2>🏆 排行榜</h2>
      {entries.length === 0 ? (
        <div className="empty-list">
          <span className="empty-list-icon">🏅</span>
          <p>还没有记录。开始练习来上榜吧！</p>
        </div>
      ) : (
        <>
          {podiumOrder.length === 3 && (
            <div className="podium">
              {podiumOrder.map((entry, i) => {
                const rankEmojis = ["🥈", "🥇", "🥉"];
                const initials = (entry.displayName || "?")
                  .charAt(0)
                  .toUpperCase();
                return (
                  <div className="podium-item" key={entry.uid}>
                    <div className="podium-avatar">{initials}</div>
                    <div className="podium-name">{entry.displayName}</div>
                    <div className="podium-score">
                      {entry.wordsRecited} 个单词
                    </div>
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
                <th>排名</th>
                <th>用户</th>
                <th>背诵单词数</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Leaderboard;
