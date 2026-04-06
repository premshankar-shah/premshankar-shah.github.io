"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <nav className="navbar" style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none" }}>
        <div className="container">
          <Link href="/" className="nav-logo">
            &lt;Prem /&gt;
          </Link>

          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link ${pathname === l.href ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="mailto:shahprem2412@gmail.com"
            className="nav-cta"
            style={{ display: "none" }}
          />
          <a
            href="mailto:shahprem2412@gmail.com"
            className="nav-cta"
          >
            <span>✉</span> Hire Me
          </a>

          <button
            id="mobile-menu-toggle"
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link ${pathname === l.href ? "active" : ""}`}
            style={{ fontSize: "1rem", padding: "0.5rem 0" }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="mailto:shahprem2412@gmail.com"
          className="btn btn-primary"
          style={{ marginTop: "0.5rem" }}
        >
          ✉ Get In Touch
        </a>
      </div>
    </>
  );
}
