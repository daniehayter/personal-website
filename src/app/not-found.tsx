import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-32 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl">
        Nothing <em className="text-accent-ink">here.</em>
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-2">That page doesn&rsquo;t exist, or it moved.</p>
      <Link href="/" className="mt-10 inline-flex w-fit rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper">
        Back home
      </Link>
    </div>
  );
}
