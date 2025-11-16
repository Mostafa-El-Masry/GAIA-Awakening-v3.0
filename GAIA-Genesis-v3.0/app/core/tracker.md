# Core Brain · Daily Thread · tracker

Component: **Core Brain / Daily Thread** (`/core`)
Version: **GAIA Awakening · v3.0**
Week: **Week 1 – Foundations & Skeleton** (Aug 10–16, 2026)

## Files

- `app/core/page.tsx`
  - Server entry for the Core Brain route; renders the client component.
- `app/core/layout.tsx`
  - Minimal layout wrapper for the feature (inherits global App Bar + theme).
- `app/core/components/CorePageClient.tsx`
  - Client component that renders the "Today" view and basic life-area slots.
- `app/core/lib/types.ts`
  - Shared TypeScript types for the daily data model (`DailyEntry`, `DailySlots`).

## References

- Route: `/core`
- Listed in:
  - `app/Classic/SiteMap/data/routes.ts` (Site Map entry)
  - `app/Classic/Directory/data/routes.ts` (Dev directory entry)
- Mentioned in:
  - `app/Classic/WhatsNew/data/entries.ts` as the start of **GAIA Awakening · v3.0**
  - `app/docs/whats-new/v3.0/page.tsx` (version log / description)
