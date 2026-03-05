import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export type SupabaseAdminClient = SupabaseClient | null;

export const supabaseAdmin: SupabaseAdminClient =
  supabaseUrl && serviceRoleKey
    ? createClient(supabaseUrl, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false }
      })
    : null;

export const hasSupabase = Boolean(supabaseAdmin);
