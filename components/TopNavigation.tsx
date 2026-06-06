'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg flex-shrink-0 hover:text-orange-400 transition-colors">
            <span className="text-2xl">⚡</span>
            <span>EFM</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 flex-1">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') && pathname !== '/industry'
                  ? 'text-orange-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              🚀 Workspace
            </Link>
            <Link
              href="/industry"
              className={`text-sm font-medium transition-colors ${
                isActive('/industry')
                  ? 'text-orange-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              🏢 Industry Intelligence
            </Link>
            <Link
              href="/academy"
              className={`text-sm font-medium transition-colors ${
                isActive('/academy')
                  ? 'text-orange-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              📚 Academy
            </Link>
            <Link
              href="/roadmap"
              className={`text-sm font-medium transition-colors ${
                isActive('/roadmap')
                  ? 'text-orange-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              🗺️ Roadmap
            </Link>
          </div>

          {/* Version */}
          <div className="text-xs text-slate-600 flex-shrink-0">
            v0.2.0
          </div>
        </div>
      </div>
    </nav>
  );
}
