import { createClient } from '@supabase/supabase-js';

const env = import.meta.env ?? {};

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in the Vite env.',
  );
}

// Client for the frontend to connect to the database
export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);
