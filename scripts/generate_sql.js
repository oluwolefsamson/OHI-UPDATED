import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generate() {
  // Read the default config
  const { default: defaults } = await import('../src/data/landingPageDefaults.js');
  
  // Create an SQL insert statement, escaping single quotes for SQL
  const sql = `
INSERT INTO public.landing_page_config (id, config)
VALUES (1, '${JSON.stringify(defaults).replace(/'/g, "''")}'::jsonb)
ON CONFLICT (id) DO NOTHING;
`;

  const outputPath = path.join(__dirname, 'seed.sql');
  fs.writeFileSync(outputPath, sql.trim());
  console.log("✅ Successfully created database migration script at: " + outputPath);
}

generate();
