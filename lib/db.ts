import mysql from "mysql2/promise";

const globalForMySQL = global as unknown as {
  mysqlPool?: mysql.Pool;
};

export const pool =
  globalForMySQL.mysqlPool ??
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

if (process.env.NODE_ENV !== "production") {
  globalForMySQL.mysqlPool = pool;
}

// Return a pool-like connection object to be used by APIs.
// Using the pool directly is safe: pool.execute / pool.query are available.
export async function getDbConnection(): Promise<mysql.Pool> {
  return pool;
}
