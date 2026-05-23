import pg from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const { Client } = pg;

async function connectSuperAdmin() {
  // Use the exact database URL with the password provided
  const connectionString = process.env.DATABASE_URL || "postgresql://postgres:luofXaYljIxnzYwq@db.rvlctynvqtqkvwohvkef.supabase.co:5432/postgres";

  console.log('Connecting to Supabase PostgreSQL database as Super Admin...');

  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    console.log('✅ Successfully connected as super admin!');

    const res = await client.query('SELECT NOW() as current_time, current_user;');
    console.log('Connected user:', res.rows[0].current_user);
    console.log('Server time:', res.rows[0].current_time);

  } catch (error) {
    console.error('❌ Connection failed:', error);
  } finally {
    await client.end();
  }
}

connectSuperAdmin();
