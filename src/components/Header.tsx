"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, Home, Mail, User } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/75 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/75">
      <div className="mx-auto flex max-w-5xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            AD
          </span>
          <span className="font-semibold text-lg text-zinc-950 dark:text-zinc-50 tracking-tight">
            Aron Daniel
          </span>
        </Link>

        <nav className="flex gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-100 text-indigo-600 dark:bg-zinc-900 dark:text-indigo-400"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="mailto:aronjan2@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-850 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <Mail className="h-4 w-4" />
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
