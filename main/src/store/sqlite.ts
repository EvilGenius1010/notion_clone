// src/lib/sqlite.ts
import initSqlJs, { Database } from 'sql.js';

// Define proper types for our singleton variables
let SQL: typeof initSqlJs | null = null;
let db: Database | null = null;

export async function initDatabase(): Promise<Database|null> {
  if (db) return db;

  try {
    SQL = await initSqlJs({
      locateFile: (_file: string) => `/sql-wasm.wasm`
    });

    db = new SQL.Database();

    // Initialize your database schema
    // db.run(`
    //   CREATE TABLE IF NOT EXISTS users (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     name TEXT,
    //     email TEXT UNIQUE
    //   );
    // `);

    return db;
  } catch (err) {
    console.error('Failed to initialize SQL.js:', err);
    throw err;
  }
}

// Properly typed React hook
import { useState, useEffect } from 'react';

interface SQLiteHook {
  db: Database | null;
  error: Error | null;
  loading: boolean;
}

export function useSQLiteNormalHook(): SQLiteHook {
  const [database, setDatabase] = useState<Database | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    async function initialize() {
      try {
        const database = await initDatabase();
        if (mounted) {
          setDatabase(database);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    initialize();

    return () => {
      mounted = false;
    };
  }, []);

  return { db: database, error, loading };
}

export function useSQLiteRead(data: string) {
  //sanitise SQL query
  const { db } = useSQLite();
  if (db) {
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['Test', 'test@test.com']);
  }


}

export function useSQLite(){
  
}
