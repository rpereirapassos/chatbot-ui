import { createClient, SupabaseClient } from "@supabase/supabase-js";

export let supabase: SupabaseClient | null = null;

if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
  supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
} else {
  console.warn("Supabase não configurado. Rodando sem banco.");
}
