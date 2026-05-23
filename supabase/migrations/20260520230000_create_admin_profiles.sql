-- Create a table for admin profiles
create table if not exists public.admin_profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  email text,
  phone text,
  role text default 'Editor',
  avatar_url text,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS
alter table public.admin_profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone." on public.admin_profiles
  for select using (true);

create policy "Users can insert their own profile." on public.admin_profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.admin_profiles
  for update using (auth.uid() = id);

-- Function to handle new user signups and automatically insert a profile row
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.admin_profiles (id, full_name, email, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email, new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function after an auth.user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage for avatars
insert into storage.buckets (id, name, public) 
values ('avatars', 'avatars', true) 
on conflict (id) do nothing;

create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars' and auth.role() = 'authenticated');

create policy "Anyone can update their own avatar." on storage.objects
  for update using (bucket_id = 'avatars' and auth.role() = 'authenticated');
