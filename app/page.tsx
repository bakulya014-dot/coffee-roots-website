// Temporary scaffold-verification page — replaced by the real home page in
// Phase 2 (SPEC.md §11). Exists only to prove tokens, fonts, and dark mode
// render correctly.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold tracking-tight">COFFEE ROOTS</h1>
      <p className="text-muted-foreground">
        Phase 0 scaffold — design tokens, fonts, and dark mode configured.
      </p>
      <span className="rounded-full bg-caramel px-4 py-1 text-sm text-cream">
        caramel accent
      </span>
    </main>
  );
}
