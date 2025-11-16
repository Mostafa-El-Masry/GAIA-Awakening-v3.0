export type DailySlotKey = "health" | "wealth" | "learning" | "work" | "gallery";

export type DailySlots = {
  health?: string;
  wealth?: string;
  learning?: string;
  work?: string;
  gallery?: string;
};

export interface DailyEntry {
  /** ISO date for the day this entry belongs to, e.g. 2026-08-10 */
  dateISO: string;
  /** ISO timestamp when this entry was first created */
  createdAtISO: string;
  /** ISO timestamp when this entry was last updated */
  updatedAtISO: string;
  /** Free-form daily summary written in your own words */
  summary: string;
  /** Optional notes for each life area (health / wealth / learning / work / gallery) */
  slots: DailySlots;
}
