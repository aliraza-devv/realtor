import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 pb-28 pt-44 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-ink">404</p>
      <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight">
        This listing has moved on.
      </h1>
      <p className="mt-4 text-lg text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or the home has
        already sold.
      </p>
      <Link
        href="/properties"
        className="mt-8 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-on-accent"
      >
        Browse current listings
      </Link>
    </section>
  );
}
