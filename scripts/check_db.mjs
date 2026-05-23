import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');

try {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const urlMatch = envContent.match(/VITE_SUPABASE_URL="?([^"\r\n]+)"?/);
  const keyMatch = envContent.match(/VITE_SUPABASE_PUBLISHABLE_KEY="?([^"\r\n]+)"?/);

  if (!urlMatch || !keyMatch) {
    console.error('Could not find Supabase credentials in .env file.');
    process.exit(1);
  }

  const supabase = createClient(urlMatch[1], keyMatch[1]);

  async function checkDatabase() {
    console.log('Connecting to Supabase...');

    const { data, error } = await supabase.from('landing_page_config').select('id');

    if (error) {
      console.error('Database Error:', error.message);
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        console.log("\nThe 'landing_page_config' table DOES NOT EXIST yet.");
        console.log("Please copy the SQL from 'supabase/migrations/20260520212300_create_landing_page_config.sql' and run it in the Supabase Dashboard SQL Editor.");
      }
      return;
    }

    if (data && data.length > 0) {
      console.log(`SUCCESS: The 'landing_page_config' table exists and is SEEDED with ${data.length} row(s)!`);
      console.log('You are fully ready to go.');
    } else {
      console.log("The 'landing_page_config' table exists, but it is currently EMPTY.");
      console.log("Please copy the SQL from 'supabase/seed.sql' and run it in the Supabase Dashboard SQL Editor to insert the default data.");
    }
  }

  checkDatabase();
} catch (err) {
  console.error('Error reading .env file:', err.message);
}
