import {
  collection,
  query,
  orderBy,
  limit as firestoreLimit,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  increment
} from 'firebase/firestore';
import { db } from './firebase';
import { LeaderboardEntry, UserProfile } from '../types';

export const getLeaderboard = async (limitCount = 20): Promise<LeaderboardEntry[]> => {
  const q = query(
    collection(db, 'users'),
    orderBy('wordsRecited', 'desc'),
    firestoreLimit(limitCount)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((docSnap, index) => {
    const data = docSnap.data();
    return {
      rank: index + 1,
      uid: docSnap.id,
      displayName: data.displayName || 'Anonymous',
      wordsRecited: data.wordsRecited || 0
    };
  });
};

export const incrementWordsRecited = async (uid: string, count = 1): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    wordsRecited: increment(count)
  });
};

export const getUserStats = async (uid: string): Promise<UserProfile | null> => {
  const userRef = doc(db, 'users', uid);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  return {
    uid,
    displayName: data.displayName || 'Anonymous',
    email: data.email || '',
    wordsRecited: data.wordsRecited || 0,
    createdAt: data.createdAt?.toDate() || new Date(),
    lastActive: data.lastActive?.toDate() || new Date()
  };
};
