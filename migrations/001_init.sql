-- D1 Database Schema for SMS Verification Service
-- Run with: wrangler d1 execute sms-verify-db --file=./migrations/001_init.sql

-- Phone Numbers Table
CREATE TABLE IF NOT EXISTS phone_numbers (
  id TEXT PRIMARY KEY,
  number TEXT NOT NULL UNIQUE,
  country_code TEXT NOT NULL,
  country_name TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'inactive', 'busy')),
  message_count INTEGER DEFAULT 0,
  last_message_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Create index for country filtering
CREATE INDEX IF NOT EXISTS idx_phone_numbers_country ON phone_numbers(country_code);
CREATE INDEX IF NOT EXISTS idx_phone_numbers_status ON phone_numbers(status);

-- SMS Messages Table
CREATE TABLE IF NOT EXISTS sms_messages (
  id TEXT PRIMARY KEY,
  phone_number_id TEXT NOT NULL,
  sender TEXT NOT NULL,
  content TEXT NOT NULL,
  received_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (phone_number_id) REFERENCES phone_numbers(id)
);

-- Create index for faster message lookups
CREATE INDEX IF NOT EXISTS idx_sms_messages_phone ON sms_messages(phone_number_id);
CREATE INDEX IF NOT EXISTS idx_sms_messages_received ON sms_messages(received_at DESC);

-- Countries Reference Table
CREATE TABLE IF NOT EXISTS countries (
  code TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  flag_emoji TEXT,
  phone_prefix TEXT NOT NULL,
  is_active INTEGER DEFAULT 1
);

-- Insert sample countries
INSERT OR IGNORE INTO countries (code, name, flag_emoji, phone_prefix) VALUES
  ('US', 'United States', '🇺🇸', '+1'),
  ('GB', 'United Kingdom', '🇬🇧', '+44'),
  ('CA', 'Canada', '🇨🇦', '+1'),
  ('DE', 'Germany', '🇩🇪', '+49'),
  ('FR', 'France', '🇫🇷', '+33'),
  ('ES', 'Spain', '🇪🇸', '+34'),
  ('IT', 'Italy', '🇮🇹', '+39'),
  ('NL', 'Netherlands', '🇳🇱', '+31'),
  ('AU', 'Australia', '🇦🇺', '+61'),
  ('BR', 'Brazil', '🇧🇷', '+55'),
  ('IN', 'India', '🇮🇳', '+91'),
  ('JP', 'Japan', '🇯🇵', '+81'),
  ('KR', 'South Korea', '🇰🇷', '+82'),
  ('SG', 'Singapore', '🇸🇬', '+65'),
  ('HK', 'Hong Kong', '🇭🇰', '+852');

-- Analytics Table (for tracking usage)
CREATE TABLE IF NOT EXISTS analytics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  phone_number_id TEXT,
  metadata TEXT, -- JSON string
  created_at TEXT DEFAULT (datetime('now'))
);

-- Create index for analytics queries
CREATE INDEX IF NOT EXISTS idx_analytics_event ON analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics(created_at DESC);

-- Insert sample phone numbers for testing
INSERT OR IGNORE INTO phone_numbers (id, number, country_code, country_name, message_count) VALUES
  ('us-001', '+1 (555) 234-5678', 'US', 'United States', 156),
  ('us-002', '+1 (555) 345-6789', 'US', 'United States', 89),
  ('uk-001', '+44 7700 900123', 'GB', 'United Kingdom', 234),
  ('de-001', '+49 151 23456789', 'DE', 'Germany', 67),
  ('ca-001', '+1 (604) 555-0123', 'CA', 'Canada', 45),
  ('fr-001', '+33 6 12 34 56 78', 'FR', 'France', 123);
