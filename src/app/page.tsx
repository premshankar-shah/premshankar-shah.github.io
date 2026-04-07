"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

// ── SVG Icons ──────────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg
    width="15"
    height="15"
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

// ── Expertise Pillars Data ─────────────────────────────────────────────────
const pillars = [
  {
    icon: "🏗️",
    iconBg: "rgba(108,99,255,0.15)",
    color: "var(--accent-secondary)",
    title: "Enterprise Architecture",
    body: "I design mobile systems with the 18-month roadmap in mind — not just the next sprint. At Searce, I architected an offline-first EPOS platform for 500+ retailers where a wrong schema decision would have meant weeks of migration pain for operators mid-shift.",
    metric: "500+ retailers · 99.9% reliability",
  },
  {
    icon: "📱",
    iconBg: "rgba(56,189,248,0.12)",
    color: "var(--accent-tertiary)",
    title: "Cross-Platform Mobile Systems",
    body: "Five production apps across Apple App Store, Google Play, and Adyen Store — each with platform-specific compliance and UX nuance. I treat iOS and Android as first-class citizens, not afterthoughts.",
    metric: "5+ apps shipped · 100% compliance",
  },
  {
    icon: "⚡",
    iconBg: "rgba(52,211,153,0.12)",
    color: "var(--accent-green)",
    title: "Performance Engineering",
    body: "I don't just write fast code — I profile, measure, and systematically eliminate bottlenecks. Optimised apps up to 70% through memory profiling, modular refactoring, and intelligent lazy loading.",
    metric: "70% perf improvement · 20% crash reduction",
  },
  {
    icon: "💳",
    iconBg: "rgba(251,146,60,0.12)",
    color: "var(--accent-orange)",
    title: "Payment & Hardware Integration",
    body: "Adyen SDK, Stripe, In-App Purchases — and the custom Kotlin/Swift native modules that bridge the gap to physical payment terminals. I understand that a failed payment is a failed business moment.",
    metric: "30% faster transactions · 25% reliability gain",
  },
  {
    icon: "🔄",
    iconBg: "rgba(244,63,94,0.12)",
    color: "var(--accent-rose)",
    title: "Offline-First & Sync Engines",
    body: "Connectivity is a privilege, not a guarantee. I built a WatermelonDB + custom sync engine that survived real-world scenarios: queued transactions, conflict resolution, and zero data loss in low-signal retail environments.",
    metric: "60% transaction success improvement",
  },
  {
    icon: "🚀",
    iconBg: "rgba(108,99,255,0.15)",
    color: "var(--accent-secondary)",
    title: "CI/CD & DevOps Ownership",
    body: "I own the pipeline, not just the code. GitHub Actions + Fastlane reduced our deployment cycle by 50% and eliminated the 2am hotfix scramble. Zero-downtime releases became the baseline expectation.",
    metric: "50% faster deploys · 80%+ test coverage",
  },
  {
    icon: "🧠",
    iconBg: "rgba(56,189,248,0.12)",
    color: "var(--accent-tertiary)",
    title: "Technical Mentorship",
    body: "Senior engineering is about multiplying the team's output, not just your own. Mentored 3 junior engineers on architecture and TypeScript patterns, accelerating their productivity ramp-up by 40%.",
    metric: "3 engineers mentored · 40% ramp-up faster",
  },
  {
    icon: "📦",
    iconBg: "rgba(52,211,153,0.12)",
    color: "var(--accent-green)",
    title: "Open Source Contributions",
    body: "Architected a React Native boilerplate saving 15+ hours of project setup time. Resolved 20+ issues across ecosystem libraries used by thousands of developers globally.",
    metric: "5+ repos · 15+ hours saved per project",
  },
];

// ── Tech Stack Data ────────────────────────────────────────────────────────
const techStack = [
  {
    label: "Mobile",
    emoji: "📱",
    accentClass: "tag-purple",
    items: ["React Native", "Expo", "iOS (Xcode)", "Android Studio"],
  },
  {
    label: "Languages",
    emoji: "💻",
    accentClass: "tag-blue",
    items: ["TypeScript", "JavaScript (ES6+)", "Swift", "Kotlin"],
  },
  {
    label: "State Management",
    emoji: "🔀",
    accentClass: "tag-green",
    items: ["Redux Toolkit", "Zustand", "React Query", "Context API"],
  },
  {
    label: "Databases",
    emoji: "🗄️",
    accentClass: "tag-orange",
    items: ["WatermelonDB", "SQLite", "Firebase", "MongoDB", "Realm"],
  },
  {
    label: "Payments",
    emoji: "💳",
    accentClass: "tag-rose",
    items: ["Adyen SDK", "Stripe SDK", "In-App Purchases"],
  },
  {
    label: "DevOps & CI/CD",
    emoji: "🚀",
    accentClass: "tag-blue",
    items: ["GitHub Actions", "Fastlane", "Jest", "Postman"],
  },
];

// ── Featured Projects ──────────────────────────────────────────────────────
const featuredProjects = [
  {
    title: "EPOS Retail Platform",
    summary:
      "Enterprise-scale offline-first point-of-sale system supporting 500+ retailers with 100% cross-platform compatibility, Adyen payment integration, and a custom SQLite sync engine achieving 99.9% reliability.",
    metrics: [
      { value: "500+", label: "Retailers" },
      { value: "99.9%", label: "Reliability" },
      { value: "60%", label: "Txn Success ↑" },
    ],
    tags: [
      "React Native",
      "Node.js",
      "Adyen",
      "WatermelonDB",
      "Kotlin",
      "Swift",
    ],
    tagColors: [
      "tag-purple",
      "tag-blue",
      "tag-orange",
      "tag-green",
      "tag-rose",
      "tag-blue",
    ],
    href: "/work/epos-platform",
  },
  {
    title: "Arcade Live — IoT Gaming Platform",
    summary:
      "Cross-platform gaming platform with 25,000+ active users enabling real-time remote control of physical arcade machines via video streaming, IoT device management, and in-app purchases.",
    metrics: [
      { value: "25K+", label: "Active Users" },
      { value: "20%", label: "Revenue ↑" },
      { value: "Real-time", label: "IoT Control" },
    ],
    tags: ["Expo", "React Native Web", "IoT", "IAP", "WebSockets"],
    tagColors: [
      "tag-blue",
      "tag-blue",
      "tag-green",
      "tag-orange",
      "tag-purple",
    ],
    href: "/work/arcade-live",
  },
  {
    title: "Secret World Travel Guide",
    summary:
      "Subscription-based travel guide with 10,000+ active users, Mapbox navigation, and dual payment processing via Stripe and In-App Purchases. Optimised load time 15% via Redux Toolkit architecture.",
    metrics: [
      { value: "10K+", label: "Active Users" },
      { value: "15%", label: "Load Time ↓" },
      { value: "Dual", label: "Payment Rails" },
    ],
    tags: ["React Native", "Redux Toolkit", "Stripe", "IAP", "Mapbox"],
    tagColors: [
      "tag-purple",
      "tag-orange",
      "tag-orange",
      "tag-green",
      "tag-blue",
    ],
    href: "/work/secret-world",
  },
];

// ── Scroll Reveal Hook ─────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── Draggable Marquee Component ────────────────────────────────────────────
function DraggableMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    let rafId: number;
    const speed = 0.6; // px per frame

    const animate = () => {
      if (!isHovered.current && !isDragging.current) {
        posRef.current += speed;
        // Reset seamlessly when the first group + gap (24px for 1.5rem) has safely scrolled past
        // We use offsetWidth to reliably get the exact rendered width of the group.
        const groupWidth = group.offsetWidth;
        if (posRef.current >= groupWidth + 24) {
          posRef.current -= (groupWidth + 24); 
        }
        track.scrollLeft = posRef.current;
      } else {
        // Keep posRef in sync while paused so resuming is seamless
        posRef.current = track.scrollLeft;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.getBoundingClientRect().left;
    startScrollLeft.current = track.scrollLeft;
    track.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX - track.getBoundingClientRect().left;
    const walk = (x - startX.current) * 1.5;
    track.scrollLeft = startScrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="marquee-section" id="expertise">
      <p className="marquee-label">
        Expertise Pillars · Drag or hover to pause
      </p>

      <div
        className="marquee-track"
        ref={trackRef}
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => {
          isHovered.current = false;
          isDragging.current = false;
          if (trackRef.current) trackRef.current.style.cursor = "grab";
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div className="marquee-inner" style={{ padding: "1.25rem 1.5rem" }}>
          {/* Group 1 */}
          <div className="marquee-group" ref={groupRef} style={{ display: "flex", gap: "1.5rem" }}>
            {pillars.map((p, i) => (
              <div className="pillar-card" key={`g1-${i}`} style={{ userSelect: "none" }}>
                <div className="pillar-icon" style={{ background: p.iconBg, color: p.color }}>
                  {p.icon}
                </div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-body">{p.body}</div>
                <div className="pillar-metric">{p.metric}</div>
              </div>
            ))}
          </div>

          {/* Group 2 */}
          <div className="marquee-group" aria-hidden="true" style={{ display: "flex", gap: "1.5rem" }}>
            {pillars.map((p, i) => (
              <div className="pillar-card" key={`g2-${i}`} style={{ userSelect: "none" }}>
                <div className="pillar-icon" style={{ background: p.iconBg, color: p.color }}>
                  {p.icon}
                </div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-body">{p.body}</div>
                <div className="pillar-metric">{p.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Tech Stack Section ─────────────────────────────────────────────────────
function TechStackSection() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="tech-stack">
      <div className="container">
        <div
          className="glass-card reveal"
          style={{ padding: "2.5rem 2.5rem 2rem", borderRadius: "20px" }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p className="section-eyebrow" style={{ marginBottom: "0.4rem" }}>
                Technical Skills
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Tools & technologies I use in production
              </p>
            </div>
            <span
              className="tag tag-green"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.72rem",
              }}
            >
              ● 5+ yrs production
            </span>
          </div>

          {/* Categories grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {techStack.map((cat) => (
              <div key={cat.label}>
                {/* Category label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{cat.emoji}</span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>
                {/* Tech pills */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}
                >
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`tag ${cat.accentClass}`}
                      style={{ fontSize: "0.78rem" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Home Page ──────────────────────────────────────────────────────────────
export default function HomePage() {
  useReveal();

  return (
    <>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow animate-fade-up">
              <span className="hero-eyebrow-dot" />
              Available · 60-Day Notice · Ahmedabad, India
            </div>

            <h1 className="hero-title animate-fade-up delay-100">
              I build mobile apps <br />
              that <span className="text-gradient">scale, survive</span>
              <br />
              and ship on time.
            </h1>

            <p className="hero-subtitle animate-fade-up delay-200">
              Senior React Native Developer with 5+ years turning ambiguous
              requirements into production systems. I specialize in enterprise
              architecture, offline-first design, and the kind of payment
              integrations that can&apos;t fail.
            </p>

            <div className="hero-actions animate-fade-up delay-300">
              <Link href="/work" className="btn btn-primary" id="hero-cta-work">
                <span>→</span> View My Work
              </Link>
              <Link
                href="/timeline"
                className="btn btn-ghost"
                id="hero-cta-timeline"
              >
                My Journey
              </Link>
              <a
                href="/Premshankar_Shah_Resume.pdf"
                download="Premshankar_Shah_Resume.pdf"
                className="btn btn-ghost"
                id="hero-cta-resume"
              >
                ↓ Resume
              </a>
            </div>

            <div className="hero-stats animate-fade-up delay-400">
              <div>
                <div className="hero-stat-value">5+</div>
                <div className="hero-stat-label">Production Apps</div>
              </div>
              <div>
                <div className="hero-stat-value">5yr</div>
                <div className="hero-stat-label">Experience</div>
              </div>
              <div>
                <div className="hero-stat-value">500+</div>
                <div className="hero-stat-label">Retailers Served</div>
              </div>
              <div>
                <div className="hero-stat-value">70%</div>
                <div className="hero-stat-label">Perf Gains</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ EXPERTISE PILLARS (drag-to-scroll) ════════════ */}
      <DraggableMarquee />

      {/* ════════════════════ FEATURED WORK ════════════════════ */}
      <section className="section" id="featured-work">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-eyebrow">Selected Work</div>
            <h2 className="section-title">
              Projects with{" "}
              <span className="text-gradient">business impact</span>
            </h2>
            <p className="section-desc">
              Not just apps that run — platforms that generated revenue, reduced
              operational costs, and scaled with their users.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {featuredProjects.map((p, i) => (
              <Link key={i} href={p.href} style={{ textDecoration: "none" }}>
                <div
                  className="project-card reveal glass-card"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="project-header">
                    <div className="project-meta">
                      <span
                        className="tag tag-purple"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        Case Study 0{i + 1}
                      </span>
                      <span
                        className="read-more"
                        style={{ marginLeft: "auto" }}
                      >
                        Read case study →
                      </span>
                    </div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-summary">{p.summary}</p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {p.tags.map((t, j) => (
                        <span key={j} className={`tag ${p.tagColors[j]}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-metrics">
                    {p.metrics.map((m, j) => (
                      <div className="project-metric" key={j}>
                        <div className="project-metric-value">{m.value}</div>
                        <div className="project-metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
            className="reveal"
          >
            <Link href="/work" className="btn btn-ghost" id="view-all-work">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ TECH STACK ════════════════════ */}
      <TechStackSection />

      {/* ════════════════════ CTA ════════════════════ */}
      <section className="cta-section" id="contact">
        <div className="cta-bg" />
        <div className="container" style={{ position: "relative" }}>
          <div className="reveal">
            <p className="section-eyebrow" style={{ justifyContent: "center" }}>
              Let&apos;s Build Something
            </p>
            <h2 className="cta-title">
              Ready to ship your <br />
              <span className="text-gradient">next big thing?</span>
            </h2>
            <p className="cta-desc">
              I&apos;m currently open to senior roles where I can own
              architecture, lead a team, and ship apps that matter. 60-day
              notice period.
            </p>
            <div className="cta-links">
              <a
                href="mailto:shahprem2412@gmail.com"
                className="btn btn-primary"
                id="cta-email"
              >
                <MailIcon /> shahprem2412@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/premshankar-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
                id="cta-linkedin"
              >
                in LinkedIn
              </a>
              <a
                href="https://github.com/premshankar-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
                id="cta-github"
              >
                ⌥ GitHub
              </a>
              <a
                href="tel:+919824594969"
                className="social-chip"
                id="cta-phone"
              >
                ☎ +91 98245 94969
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
