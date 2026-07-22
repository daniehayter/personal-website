import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Aron Daniel
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Product Manager • Coimbatore, TN, India
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:aronjan2@gmail.com"
            className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/aron-daniel-b818a279"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
            title="LinkedIn"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="tel:+919944293186"
            className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
            title="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-505">
          © {new Date().getFullYear()} Aron Daniel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
