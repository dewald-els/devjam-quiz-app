import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
    throw new Error('No Supabase Url found');
}

if (!supabaseAnonKey) {
    throw new Error('No supabase key found');
}

const _client = createClient(supabaseUrl, supabaseAnonKey);

export default _client;