import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Live Map' },
    { to: '/ip-analyzer', label: 'IP Analyzer' },
    { to: null, label: 'Intelligence', upcoming: true },
    { to: null, label: 'Reports', upcoming: true },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-typo-bg border-b border-typo-border sticky top-0 z-50">
            <div className="flex items-center justify-between mx-auto w-full px-6 py-4 max-w-[1600px]">
                {/* Left: Logo + Nav */}
                <div className="flex items-center gap-12">
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <div className="h-10 md:h-12 w-10 md:w-12 flex-shrink-0">
                            <img src="/ddos-big-logo-bgremover.png" alt="DDoS Watch Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-2xl font-serif font-medium tracking-tight text-typo-text">DDoS Watch.</h2>
                    </NavLink>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) =>
                            item.upcoming ? (
                                <div key={item.label} className="relative group">
                                    <span className="text-xs uppercase tracking-widest text-typo-text-light/40 cursor-default flex items-center gap-1.5">
                                        {item.label}
                                        <span className="text-[8px] uppercase tracking-widest font-bold border border-typo-text-light/20 text-typo-text-light/40 px-1.5 py-0.5 leading-none">
                                            Soon
                                        </span>
                                    </span>

                                    {/* Tooltip on hover */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                                        <div className="bg-black text-white px-4 py-2.5 whitespace-nowrap">
                                            <p className="text-[10px] uppercase tracking-widest font-medium">Coming Soon</p>
                                        </div>
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    key={item.label}
                                    to={item.to}
                                    end={item.to === '/'}
                                    className={({ isActive }) =>
                                        `text-xs uppercase tracking-widest transition-colors ${isActive
                                            ? 'text-typo-text border-b border-typo-text pb-0.5 font-medium'
                                            : 'text-typo-text-light hover:text-typo-text'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            )
                        )}
                    </nav>
                </div>

                {/* Right: GitHub + Hamburger */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/real-name-not-found"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-typo-text hover:opacity-60 transition-opacity"
                        title="GitHub"
                    >
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    {/* Hamburger button — mobile only */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[1.5px] bg-typo-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                        <span className={`block w-5 h-[1.5px] bg-typo-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[1.5px] bg-typo-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            <div
                className={`md:hidden border-t border-typo-border overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <nav className="flex flex-col px-6 py-4 gap-1">
                    {navItems.map((item) =>
                        item.upcoming ? (
                            <div key={item.label} className="flex items-center justify-between py-3 px-2">
                                <span className="text-xs uppercase tracking-widest text-typo-text-light/40">
                                    {item.label}
                                </span>
                                <span className="text-[8px] uppercase tracking-widest font-bold border border-typo-text-light/20 text-typo-text-light/40 px-1.5 py-0.5 leading-none">
                                    Soon
                                </span>
                            </div>
                        ) : (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                end={item.to === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-xs uppercase tracking-widest py-3 px-2 transition-colors ${isActive
                                        ? 'text-typo-text font-medium bg-black/[0.03]'
                                        : 'text-typo-text-light hover:text-typo-text'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        )
                    )}
                </nav>
            </div>
        </header>
    );
}
