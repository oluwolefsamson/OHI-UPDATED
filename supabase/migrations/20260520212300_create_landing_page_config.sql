-- Create the configuration table
CREATE TABLE IF NOT EXISTS public.landing_page_config (
  id integer PRIMARY KEY DEFAULT 1,
  config jsonb NOT NULL,
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.landing_page_config ENABLE ROW LEVEL SECURITY;

-- Allow public read access so the frontend can load the data without logging in
CREATE POLICY "Allow public read access" 
ON public.landing_page_config FOR SELECT 
USING (true);

-- Allow authenticated users (Admins) to do everything (Insert, Update, Delete)
CREATE POLICY "Allow authenticated users full access" 
ON public.landing_page_config FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);
