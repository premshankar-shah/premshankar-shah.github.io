"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
  { href: "/mindset", label: "Mindset" },
  { href: "/work", label: "Work" },
  { href: "/articles", label: "Articles" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return pathname === "/" || pathname === "";
      }
      return pathname?.startsWith(path);
    },
    [pathname],
  );

  return (
    <>
      <nav
        className="navbar"
        style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none" }}
      >
        <div className="container">
          <Link href="/" className="nav-logo" onClick={closeMobile}>
            &lt;Prem /&gt;
          </Link>

          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link ${isActive(l.href) ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="mailto:shahprem2412@gmail.com"
            className="nav-cta"
            id="nav-hire-me"
          >
            <MailIcon /> Hire Me
          </a>

          <button
            id="mobile-menu-toggle"
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                transform: mobileOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link ${isActive(l.href) ? "active" : ""}`}
            style={{ fontSize: "1rem", padding: "0.5rem 0" }}
            onClick={closeMobile}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="mailto:shahprem2412@gmail.com"
          className="btn btn-primary"
          style={{
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onClick={closeMobile}
        >
          <MailIcon /> Get In Touch
        </a>
      </div>
    </>
  );
}
