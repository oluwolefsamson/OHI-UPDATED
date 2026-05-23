import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env. Please set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Connecting to Supabase at:', supabaseUrl);
  try {
    const { default: landingPageDefaults } = await import('../src/data/landingPageDefaults.js');

    // We are seeding the initial defaults into the database.
    const { data, error } = await supabase
      .from('landing_page_config')
      .upsert({ id: 1, config: landingPageDefaults }, { onConflict: 'id' })
      .select();

    if (error) {
      console.error('Error inserting data into Supabase:', error);
    } else {
      console.log('Successfully seeded the database! Please check the Supabase table now.');
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

seed();
