"use client";

import { useMemo, useState } from "react";
import type { DailyEntry } from "../lib/types";

function createBlankEntryForToday(): DailyEntry {
  const now = new Date();
  const dateISO = now.toISOString().slice(0, 10);
  const ts = now.toISOString();
  return {
    dateISO,
    createdAtISO: ts,
    updatedAtISO: ts,
    summary: "",
    slots: {},
  };
}

export default function CorePageClient() {
  const [entry, setEntry] = useState<DailyEntry>(() => createBlankEntryForToday());

  const prettyDate = useMemo(() => {
    const [year, month, day] = entry.dateISO.split("-").map((x) => Number(x));
    if (!year || !month || !day) return entry.dateISO;
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }, [entry.dateISO]);

  function updateSummary(value: string) {
    setEntry((prev) => ({
      ...prev,
      summary: value,
      updatedAtISO: new Date().toISOString(),
    }));
  }

  function updateSlot(slot: keyof DailyEntry["slots"], value: string) {
    setEntry((prev) => ({
      ...prev,
      slots: {
        ...prev.slots,
        [slot]: value,
      },
      updatedAtISO: new Date().toISOString(),
    }));
  }

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-black/60">
          GAIA Awakening · v3.0
        </p>
        <h1 className="text-2xl font-semibold">Core Brain · Daily Thread</h1>
        <p className="text-sm text-black/70">
          Simple, gentle place to write what today felt like across health, wealth, learning, work, and memories.
          Metrics and AI guidance will arrive in later versions.
        </p>
      </header>

      <section className="rounded-lg border border-black/5 bg-white/60 p-4 shadow-sm backdrop-blur">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium">Today</h2>
            <p className="text-sm text-black/70">{prettyDate}</p>
          </div>
          <p className="text-[11px] uppercase tracking-wide text-black/50">
            Foundation only · no automation yet
          </p>
        </div>

        <div className="mt-4 space-y-6">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-black/60">
              Day summary
            </label>
            <p className="mt-1 text-[11px] text-black/60">
              A short sentence or two about the overall flavour of your day.
            </p>
            <textarea
              className="mt-2 w-full rounded-md border border-black/10 bg-white/80 p-2 text-sm outline-none focus:border-black/40"
              rows={3}
              value={entry.summary}
              onChange={(e) => updateSummary(e.target.value)}
              placeholder="Today felt…"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <LifeSlot
              label="Health"
              hint="Movement, food choices, sleep, energy."
              value={entry.slots.health ?? ""}
              onChange={(v) => updateSlot("health", v)}
            />
            <LifeSlot
              label="Wealth"
              hint="Spending, saving, money feelings."
              value={entry.slots.wealth ?? ""}
              onChange={(v) => updateSlot("wealth", v)}
            />
            <LifeSlot
              label="Learning"
              hint="Courses, lessons, tiny breakthroughs."
              value={entry.slots.learning ?? ""}
              onChange={(v) => updateSlot("learning", v)}
            />
            <LifeSlot
              label="Work"
              hint="Tasks, automations, things GAIA helped with."
              value={entry.slots.work ?? ""}
              onChange={(v) => updateSlot("work", v)}
            />
          </div>

          <div>
            <LifeSlot
              label="Memories & Gallery"
              hint="Photos, clips, or small moments you want to remember."
              value={entry.slots.gallery ?? ""}
              onChange={(v) => updateSlot("gallery", v)}
            />
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-dashed border-black/10 bg-white/40 p-4 text-xs text-black/65">
        <h2 className="text-sm font-medium">Daily Thread · Foundations</h2>
        <p className="mt-1">
          In v3.0, this page is mostly about structure: what a day looks like, which life areas matter,
          and how GAIA will later connect Health, Wealth, Learning, Work, and Galleries into one story.
        </p>
        <p className="mt-2">
          Later versions (v3.1+) will add: recent-days lists, weekly overviews, signals from other components,
          and more guidance in GAIA&apos;s own voice.
        </p>
      </section>
    </main>
  );
}

type LifeSlotProps = {
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
};

function LifeSlot({ label, hint, value, onChange }: LifeSlotProps) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-black/10 bg-white/70 p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-black/70">
          {label}
        </span>
      </div>
      {hint ? <p className="text-[11px] text-black/60">{hint}</p> : null}
      <textarea
        className="mt-1 w-full flex-1 rounded-md border border-black/10 bg-white/90 p-2 text-xs outline-none focus:border-black/40"
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Small note about ${label.toLowerCase()} today…`}
      />
    </div>
  );
}
