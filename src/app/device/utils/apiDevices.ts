// lib/apiDevices.ts
import { createClient } from '@supabase/supabase-js';
import supabase from "@/app/utils/supabase/client";

// ✅ GET paginated devices
export async function getDevicesPaginated(from: number, to: number) {
  const { data, error } = await supabase
    .from('devices')
    .select('*')
    .range(from, to)
    .order('id', { ascending: true });
  return [data, error] as const;
}

export async function getDevicesCount(): Promise<[number, string | null]> {
  const { data, error } = await supabase.from("devices").select('*');

  const count = data?.length ?? 0;
  return [count, error?.message ?? null];
}

// ✅ INSERT single device
export async function insertDevice(device: Record<string, any>) {
  const { data, error } = await supabase
    .from('devices')
    .insert([device])
    .select();
  return [data, error] as const;
}

// ✅ UPSERT device
export async function upsertDevice(device: Record<string, any>) {
  const { data, error } = await supabase
    .from('devices')
    .upsert(device)
    .select();
  return [data, error] as const;
}

// ✅ UPDATE by ID
export async function updateDevice(id: number, updates: Record<string, any>) {
  const { data, error } = await supabase
    .from('devices')
    .update(updates)
    .eq('id', id)
    .select();
  return [data, error] as const;
}

// ✅ DELETE by ID
export async function deleteDevice(id: number) {
  const { error } = await supabase
    .from('devices')
    .delete()
    .eq('id', id);
  return error;
}

// ✅ FILTER devices by any column
export async function filterDevices(column: string, value: any) {
  const { data, error } = await supabase
    .from('devices')
    .select('*')
    .eq(column, value);
  return [data, error] as const;
}
