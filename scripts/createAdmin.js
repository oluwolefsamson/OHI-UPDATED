import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rvlctynvqtqkvwohvkef.supabase.co';
const supabaseKey = 'sb_publishable_KGv5hRl0HkwqOqd_e_dLhg_z2WeANEE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupAdmin() {
  console.log('Attempting to create the admin user...');
  
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@olympianhouseintl.com',
    password: 'OHI@2026',
  });

  if (error) {
    console.error('Error creating user:', error.message);
  } else {
    console.log('✅ Success! Admin user created.');
    console.log('User Details:', data.user?.email);
    
    if (data.session == null && data.user) {
      console.log('⚠️ IMPORTANT: You have "Confirm Email" enabled in Supabase.');
      console.log('Please go to your Supabase Dashboard -> Authentication -> Users, and manually confirm the email address, OR check your inbox for the confirmation link.');
    } else {
      console.log('You should now be able to log in to the dashboard!');
    }
  }
}

setupAdmin();
