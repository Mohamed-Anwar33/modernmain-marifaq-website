// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jblaottecdfntbmxhtkl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpibGFvdHRlY2RmbnRibXhodGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NDE1NzAsImV4cCI6MjA2MTAxNzU3MH0.xZWhSP0Lm_V1VojmoNkmLA8TKn-68m3ZBAk9mr9Hnwo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);