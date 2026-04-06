"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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

const articles = [
  {
    category: "Architecture",
    categoryColor: "tag-purple",
    readTime: "12 min read",
    title: "Building Offline-First React Native Apps That Actually Work in Production",
    excerpt:
      "Most offline-first tutorials stop at SQLite. Real offline-first means handling conflict resolution, sync queues, partial failures, and UX that communicates connectivity state without being annoying. Here's everything I learned building an EPOS system for 500+ retailers.",
    topics: ["WatermelonDB", "SQLite", "Sync Engine", "React Native"],
    topicColors: ["tag-green", "tag-blue", "tag-purple", "tag-purple"],
    status: "draft",
    statusLabel: "Write This Next",
    outline: [
      "Why 'offline mode' is not the same as 'offline-first'",
      "Designing the sync queue: priorities, retries, and exponential backoff",
      "Conflict resolution strategies: last-write-wins vs. operational transforms",
      "WatermelonDB vs raw SQLite: when the abstraction is worth it",
      "UX patterns for communicating sync state without alarming users",
      "Testing offline scenarios in CI",
    ],
  },
  {
    category: "Native Modules",
    categoryColor: "tag-rose",
    readTime: "8 min read",
    title: "Native Bridging in React Native: Kotlin and Swift Modules You Actually Need",
    excerpt:
      "The React Native ecosystem covers 90% of use cases. The other 10% — payment terminals, hardware peripherals, biometric flows — requires you to write Kotlin and Swift. Here's the mental model, the pitfalls, and the patterns that make native bridges maintainable.",
    topics: ["Kotlin", "Swift", "Native Modules", "Adyen Terminal"],
    topicColors: ["tag-rose", "tag-blue", "tag-orange", "tag-orange"],
    status: "draft",
    statusLabel: "Write This Next",
    outline: [
      "When to bridge vs. when to find a library",
      "The anatomy of a React Native native module",
      "Kotlin: building the Adyen terminal bridge",
      "Swift: handling iOS-only capabilities",
      "Handling async events and callbacks across the bridge",
      "Testing native modules without an actual device",
    ],
  },
  {
    category: "Performance",
    categoryColor: "tag-green",
    readTime: "10 min read",
    title: "The React Native Performance Audit: A Systematic Approach to 70% Gains",
    excerpt:
      "Performance optimization isn't guesswork — it's a methodology. I improved app performance by up to 70% across multiple production apps using a repeatable audit process. Here's the exact playbook: what to measure, what to fix, and what to ignore.",
    topics: ["Profiling", "Memory", "Lazy Loading", "Hermes"],
    topicColors: ["tag-green", "tag-orange", "tag-blue", "tag-purple"],
    status: "template",
    statusLabel: "Article Template",
    outline: [
      "The three layers of React Native performance: JS thread, UI thread, native",
      "Tools: React Native Debugger, Flipper, Xcode Instruments, Android Profiler",
      "The FlatList trap and how to fix it",
      "Memory leaks: the usual suspects and how to find them",
      "Image optimization: the silent killer",
      "Lazy loading, code splitting, and Hermes engine benefits",
    ],
  },
  {
    category: "CI/CD",
    categoryColor: "tag-blue",
    readTime: "9 min read",
    title: "React Native CI/CD with GitHub Actions + Fastlane: The Setup That Cut Deploys by 50%",
    excerpt:
      "Deploying React Native apps to App Store and Play Store manually is a tax on your team's time and sanity. Here's the complete pipeline setup — from triggered builds to automated screenshots to staged rollouts — that eliminated our release-week dread.",
    topics: ["GitHub Actions", "Fastlane", "App Store", "Play Store"],
    topicColors: ["tag-blue", "tag-purple", "tag-rose", "tag-green"],
    status: "template",
    statusLabel: "Article Template",
    outline: [
      "The problem with manual deploys at scale",
      "GitHub Actions: trigger strategies for mobile apps",
      "Fastlane Lanes: match, gym, deliver, supply",
      "Code signing: the pitfall most teams hit first",
      "Environment management: dev, staging, prod",
      "Rollout strategies: staged rollouts vs. feature flags",
    ],
  },
  {
    category: "State Management",
    categoryColor: "tag-orange",
    readTime: "7 min read",
    title: "Redux Toolkit in 2025: When It Shines (and When to Use Something Else)",
    excerpt:
      "Redux gets a bad reputation it no longer deserves. Redux Toolkit changed the equation. But it's still not the right tool for every job. Here's my decision framework for choosing between Redux Toolkit, Zustand, React Query, and Context — with real examples from production apps.",
    topics: ["Redux Toolkit", "Zustand", "React Query", "Context API"],
    topicColors: ["tag-orange", "tag-purple", "tag-blue", "tag-green"],
    status: "draft",
    statusLabel: "Draft",
    outline: [
      "The four types of state in a mobile app",
      "Redux Toolkit: when normalization is worth the ceremony",
      "Zustand: the 80% solution for most apps",
      "React Query: server state is its own discipline",
      "Context API: the underrated option for isolated trees",
      "Decision matrix: pick the right tool",
    ],
  },
];

const statusColors: Record<string, string> = {
  draft: "tag-orange",
  template: "tag-blue",
  published: "tag-green",
};

export default function ArticlesPage() {
  useReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

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
            <div className="section-eyebrow">Articles & Writing</div>
            <h1 className="section-title" style={{ maxWidth: "700px" }}>
              Teaching what I&apos;ve{" "}
              <span className="text-gradient">learned the hard way.</span>
            </h1>
            <p className="section-desc">
              Technical writing for senior React Native engineers who want battle-tested
              patterns, not just documentation rewrites. Each article template below
              represents a chapter I&apos;m writing.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          {/* Writing Philosophy */}
          <div
            className="glass-card reveal"
            style={{
              padding: "1.75rem 2rem",
              marginBottom: "3rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>✍️</div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  color: "var(--text-primary)",
                }}
              >
                Writing Philosophy
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                I write about the 10% of problems that aren&apos;t covered in the docs. Every
                article starts with a real production challenge, walks through the constraints
                and tradeoffs, and ends with a reusable decision framework — not just
                &ldquo;here&apos;s the code, copy it.&rdquo; Expect MDX with embedded interactive
                demos via Expo Snack.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {articles.map((a, i) => (
              <div
                className="article-card reveal"
                key={i}
                id={`article-${i}`}
                style={{ cursor: "pointer" }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="article-meta">
                  <span className={`tag ${a.categoryColor}`}>{a.category}</span>
                  <span className={`tag ${statusColors[a.status]}`}>{a.statusLabel}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {a.readTime}
                  </span>
                </div>

                <h2 className="article-title">{a.title}</h2>
                <p className="article-excerpt">{a.excerpt}</p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1rem",
                  }}
                >
                  {a.topics.map((t, j) => (
                    <span key={j} className={`tag ${a.topicColors[j]}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="article-footer">
                  <span />
                  <span
                    className="read-more"
                    id={`article-expand-${i}`}
                  >
                    {expanded === i ? "Collapse outline ↑" : "See outline →"}
                  </span>
                </div>

                {/* Expandable Outline */}
                {expanded === i && (
                  <div
                    style={{
                      marginTop: "1.25rem",
                      padding: "1.25rem",
                      background: "rgba(108,99,255,0.05)",
                      border: "1px solid rgba(108,99,255,0.12)",
                      borderRadius: "12px",
                      animation: "fade-up 0.3s ease forwards",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--accent-secondary)",
                        marginBottom: "0.85rem",
                      }}
                    >
                      Article Outline
                    </div>
                    <ol
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingLeft: "1.2rem",
                      }}
                    >
                      {a.outline.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MDX Note */}
          <div
            className="glass-card reveal"
            style={{ padding: "2rem", marginTop: "3rem" }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "1.75rem" }}>📦</div>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <div
                  style={{
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  How Articles Are Built
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  Each article is an <strong style={{ color: "var(--accent-secondary)" }}>.mdx</strong>{" "}
                  file in{" "}
                  <code
                    style={{
                      background: "rgba(108,99,255,0.1)",
                      color: "var(--accent-secondary)",
                      padding: "0.1em 0.4em",
                      borderRadius: "4px",
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.82em",
                    }}
                  >
                    /src/content/articles/
                  </code>
                  . Because this portfolio uses Next.js + MDX, you can embed live Expo Snack
                  iframes, custom React components, and interactive code playgrounds directly
                  inside the markdown prose.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href="https://hashnode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                    id="hashnode-link"
                  >
                    Cross-post to Hashnode ↗
                  </a>
                  <a
                    href="https://dev.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                    id="devto-link"
                  >
                    Cross-post to dev.to ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
