-- VisaCampus Landing Page — Supabase leads table
-- Run this in Supabase SQL Editor (https://bzsxysujtpqipiestcki.supabase.co → SQL Editor)

-- 1. Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email       TEXT NOT NULL,
  org         TEXT NOT NULL,           -- 소속 대학/기관
  role        TEXT NOT NULL,           -- 담당 업무 (국제교류팀 등)
  source      TEXT DEFAULT 'landing',  -- 유입 경로 (landing, referral, etc.)
  status      TEXT DEFAULT 'new',      -- new → contacted → pilot → converted → lost
  notes       TEXT,                    -- 관리자 메모 (CRM용)
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- 2. Index for quick lookups
CREATE INDEX idx_leads_email ON leads (email);
CREATE INDEX idx_leads_status ON leads (status);
CREATE INDEX idx_leads_created_at ON leads (created_at DESC);

-- 3. Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 4. Grant anon role access to schema and table
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.leads TO anon;

-- 5. Row Level Security (RLS) — anon can INSERT only, no read
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from landing page form)
CREATE POLICY "Allow anonymous insert" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Block anonymous reads (leads data is private)
-- Only authenticated/service_role can SELECT
CREATE POLICY "Allow authenticated read" ON leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- 6. Prevent duplicate submissions (same email per day)
-- Use a DATE column instead of casting TIMESTAMPTZ (which is not IMMUTABLE)
ALTER TABLE leads ADD COLUMN created_date DATE DEFAULT CURRENT_DATE;

CREATE UNIQUE INDEX idx_leads_email_dedup
  ON leads (email, created_date);
