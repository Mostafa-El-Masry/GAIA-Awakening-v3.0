export default function WhatsNewV30() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold">GAIA Awakening · v3.0 — Core Brain &amp; Daily Thread</h1>
      <p className="mt-2 text-sm text-black/70">Dates: Aug 10 – Sep 20, 2026</p>

      <section className="mt-6 space-y-4 text-sm leading-6">
        <p>
          <strong>GAIA Awakening · v3.0</strong> gives GAIA a first version of a time-aware core: a Daily Thread
          that can describe what happens in your life each day across health, wealth, learning, work, and memories.
        </p>
        <p>
          This version focuses on <em>structure</em>, not automation. It defines what a single day looks like,
          where the important notes live, and how future versions (v3.1+) will plug in real metrics, signals,
          and AI reflections.
        </p>

        <ul className="list-disc pl-6">
          <li>
            New route: <code>/core</code> — <span className="font-medium">Core Brain · Daily Thread</span>.
          </li>
          <li>
            Minimal &quot;Today&quot; view with a day summary plus slots for Health, Wealth, Learning, Work,
            and Memories/Gallery notes.
          </li>
          <li>
            Conceptual daily data model (<code>DailyEntry</code>) that later versions can reuse for storage,
            weekly overviews, and cross-component hooks.
          </li>
        </ul>

        <p className="opacity-70">
          Weeks 2–6 of v3.0 will shape the Daily Thread&apos;s layout, add recent-day and weekly views,
          design reflection questions in GAIA&apos;s voice, and connect hooks for Health, Wealth, Learning,
          Work, and Galleries.
        </p>
      </section>
    </main>
  );
}
