"use client";
import { useEffect } from "react";
import type { Metadata } from "next";

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
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const eras = [
  {
    period: "Jul 2021 – Apr 2022",
    label: "Era 01 · Foundation",
    title: "Learning the Craft at Pace",
    company: "Shine InfoSoft — Technology Meets Solution · React Native Developer",
    body: `My first professional home. The mission was clear — ship fast, learn faster. I delivered cross-platform mobile and desktop applications (React Native + Electron) and onboarded 2,500+ users in the first month post-launch. This era taught me that good code means nothing if it doesn't move users. I learned to pair engineering rigour with empathy for the end-user's first-minute experience.`,
    lessons: [
      {
        icon: "🔥",
        text: "Integrated Firebase end-to-end — Firestore, Analytics, Crashlytics — and watched production stability metrics finally make sense. Reduced bug reports by 30%.",
      },
      {
        icon: "🧩",
        text: "Introduced reusable component libraries that cut feature dev time by 15%. Learned that architecture decisions made on day 1 echo for months.",
      },
      {
        icon: "📈",
        text: "Increased session duration by 25% through navigation flow redesign. Discovered the intersection of technical and UX thinking.",
      },
    ],
    tags: ["React Native", "Electron", "Firebase", "Component Libraries"],
    tagColors: ["tag-purple", "tag-blue", "tag-orange", "tag-green"],
  },
  {
    period: "Apr 2022 – Jan 2024",
    label: "Era 02 · Mastery",
    title: "Scaling Systems & Leading Teams",
    company: "MindInventory · Software Engineer",
    body: `The crucible of my career. Four production apps shipped. A 100% on-time delivery record across 10+ major releases. A jump from individual contributor to someone who shaped how the team built things. I architected systems here that needed to survive handoffs — because the developer who maintains your code at 2am isn't you.`,
    lessons: [
      {
        icon: "📐",
        text: "Designed an open-source React Native Boilerplate that saved 15+ hours of project setup per new app. Became the architectural starting point for multiple client projects.",
      },
      {
        icon: "🧪",
        text: "Established Jest-based testing standards: 80%+ code coverage, 30% faster QA cycles. Realized that tests are documentation for your future team members.",
      },
      {
        icon: "👥",
        text: "Mentored 3 junior engineers on TypeScript, component architecture, and React Native patterns. Their 40% faster ramp-up was one of my proudest metrics.",
      },
      {
        icon: "⚡",
        text: "Improved app store ratings from 3.8 → 4.6 through systematic crash analysis and memory profiling. App store ratings are a lagging indicator of technical debt.",
      },
    ],
    tags: ["React Native", "Expo", "Jest", "Open Source", "TypeScript", "Mentorship"],
    tagColors: ["tag-purple", "tag-blue", "tag-green", "tag-orange", "tag-blue", "tag-rose"],
  },
  {
    period: "Jan 2024 – Present",
    label: "Era 03 · Leadership",
    title: "Owning Enterprise Architecture",
    company: "Searce Inc · Senior Software Engineer (Promoted)",
    body: `Promoted to Senior Software Engineer for demonstrating architectural ownership across high-stakes, high-complexity mobile initiatives. This era has been defined by systems thinking: how do you build for 500 retailers when you can't guarantee their internet connection? How do you make Adyen and Stripe play nicely with a thermal printer over Bluetooth? How do you manage a 6-month delivery timeline across a distributed team without things fraying at the edges?`,
    lessons: [
      {
        icon: "🏗️",
        text: "Architected the offline-first EPOS platform from blank Figma canvas to production. The sync engine — built on WatermelonDB with custom conflict resolution — handles 60% more successful transactions in low-connectivity retail environments.",
      },
      {
        icon: "🔧",
        text: "Built custom Kotlin and Swift native modules for Adyen terminal integration. Improved transaction efficiency by 40%. Native bridging is a superpower most React Native developers avoid.",
      },
      {
        icon: "🚀",
        text: "Established GitHub Actions + Fastlane CI/CD pipelines reducing deployment time by 50%. The team went from 'release week dread' to zero-downtime confidence.",
      },
      {
        icon: "📊",
        text: "Led 5+ simultaneous production deployments across App Store, Play Store, and Adyen Store — each with different compliance requirements, review cycles, and release strategies.",
      },
    ],
    tags: ["React Native", "WatermelonDB", "Adyen", "Kotlin", "Swift", "GitHub Actions", "Fastlane"],
    tagColors: ["tag-purple", "tag-green", "tag-orange", "tag-rose", "tag-blue", "tag-blue", "tag-purple"],
  },
];

export default function TimelinePage() {
  useReveal();

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          paddingTop: "calc(var(--nav-height) + 5rem)",
          paddingBottom: "3rem",
          background: "var(--gradient-hero)",
        }}
      >
        <div className="container">
          <div className="reveal">
            <div className="section-eyebrow">Career Story</div>
            <h1 className="section-title" style={{ maxWidth: "700px" }}>
              Not a resume. <span className="text-gradient">A journey.</span>
            </h1>
            <p className="section-desc">
              Three eras. Three distinct chapters of growth. Each one shaping how I think
              about mobile software at enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="timeline">
            {eras.map((era, i) => (
              <div className="timeline-era reveal" key={i}>
                <div className="timeline-era-dot" />

                <div className="timeline-era-label">
                  <span>{era.label}</span>
                  <span
                    style={{
                      color: "var(--text-muted)",
                      fontWeight: 400,
                      letterSpacing: 0,
                      textTransform: "none",
                      fontSize: "0.72rem",
                    }}
                  >
                    {era.period}
                  </span>
                </div>

                <h2 className="timeline-era-title">{era.title}</h2>
                <div className="timeline-era-company">{era.company}</div>
                <p className="timeline-era-body">{era.body}</p>

                <div className="timeline-lessons">
                  {era.lessons.map((l, j) => (
                    <div className="timeline-lesson" key={j}>
                      <span className="timeline-lesson-icon">{l.icon}</span>
                      <span>{l.text}</span>
                    </div>
                  ))}
                </div>

                <div className="timeline-tags">
                  {era.tags.map((t, j) => (
                    <span key={j} className={`tag ${era.tagColors[j]}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="reveal" style={{ marginTop: "3rem" }}>
            <div
              className="glass-card"
              style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(108,99,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                }}
              >
                🎓
              </div>
              <div>
                <div className="timeline-era-label" style={{ position: "static", marginBottom: "0.5rem" }}>
                  Jun 2017 – Jun 2021
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                  }}
                >
                  B.E. Information Technology
                </div>
                <div style={{ color: "var(--accent-tertiary)", fontSize: "0.9rem", fontWeight: 600 }}>
                  Government Engineering College, Modasa, Gujarat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
