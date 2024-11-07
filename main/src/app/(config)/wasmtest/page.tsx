'use client'
import { useSQLite } from '@/lib/sqlite';
import { useEffect } from 'react';
export default function MyComponent() {
  const { db, error, loading } = useSQLite();

  useEffect(() => {
    if (db) {
      try {
        // Your database operations here
        db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['Test', 'test@test.com']);
        const result = db.exec('SELECT * FROM users');
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    }
  }, [db]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Your component content</div>;
}
