import { Advocate } from "@/types/advocates";

export function formatPhoneNumber(phone: string): string {
  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
}

export function formatSpecialtiesAlphabetically(specialties: string[]): string[] {
  return [...specialties].sort((a, b) => a.localeCompare(b));
}