/**
 * Database Queries - Users
 * D1 database operations for user management
 */

export interface User {
  id: number;
  email: string;
  password_hash: string;
  email_verified: number;
  created_at: string;
  updated_at: string;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T = unknown>(): Promise<D1Result<T>>;
}

interface D1Result<T = unknown> {
  results?: T[];
  success: boolean;
  error?: string;
  meta?: {
    changes: number;
    last_row_id: number;
  };
}

/**
 * Find user by email
 */
export async function findUserByEmail(
  db: D1Database,
  email: string
): Promise<User | null> {
  return db
    .prepare('SELECT * FROM users WHERE email = ? COLLATE NOCASE')
    .bind(email.toLowerCase())
    .first<User>();
}

/**
 * Find user by ID
 */
export async function findUserById(
  db: D1Database,
  id: number
): Promise<User | null> {
  return db
    .prepare('SELECT * FROM users WHERE id = ?')
    .bind(id)
    .first<User>();
}

/**
 * Create a new user
 */
export async function createUser(
  db: D1Database,
  email: string,
  passwordHash: string
): Promise<number | null> {
  try {
    const result = await db
      .prepare(
        'INSERT INTO users (email, password_hash, email_verified) VALUES (?, ?, 0)'
      )
      .bind(email.toLowerCase(), passwordHash)
      .run();

    return result.meta?.last_row_id ?? null;
  } catch (error) {
    // Unique constraint violation (email already exists)
    console.error('Failed to create user:', error);
    return null;
  }
}

/**
 * Mark user email as verified
 */
export async function verifyUserEmail(
  db: D1Database,
  userId: number
): Promise<boolean> {
  const result = await db
    .prepare(
      "UPDATE users SET email_verified = 1, updated_at = datetime('now') WHERE id = ?"
    )
    .bind(userId)
    .run();

  return (result.meta?.changes ?? 0) > 0;
}

/**
 * Update user password
 */
export async function updateUserPassword(
  db: D1Database,
  userId: number,
  passwordHash: string
): Promise<boolean> {
  const result = await db
    .prepare(
      "UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?"
    )
    .bind(passwordHash, userId)
    .run();

  return (result.meta?.changes ?? 0) > 0;
}
