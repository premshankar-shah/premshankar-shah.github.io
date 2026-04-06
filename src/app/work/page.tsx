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

const projects = [
  {
    id: "epos-platform",
    title: "EPOS Retail Platform",
    tagline: "Offline-first point-of-sale for 500+ retailers",
    summary:
      "Enterprise-scale offline-first EPOS platform supporting 500+ retailers with a custom SQLite sync engine, Adyen payment integration, Kitchen Display System, and native hardware modules — achieving 99.9% system reliability.",
    tags: ["React Native", "Node.js", "Adyen", "WatermelonDB", "Kotlin", "Swift", "SQLite"],
    tagColors: ["tag-purple", "tag-blue", "tag-orange", "tag-green", "tag-rose", "tag-blue", "tag-green"],
    metrics: [
      { value: "500+", label: "Retailers" },
      { value: "99.9%", label: "Reliability" },
      { value: "60%", label: "Txn Success ↑" },
    ],
    storyBeginning:
      "A global retail client needed a point-of-sale system that could run in brick-and-mortar stores with unreliable internet. Any downtime meant lost sales and frustrated staff. The stakes: 500+ live retail locations depending on a single mobile app to process every transaction.",
    storyMiddle:
      "React Native's SQLite ecosystem wasn't ready for the scale we needed out of the box. We needed offline queueing, conflict resolution, and atomic transaction handling — all while maintaining a UI that felt instantly responsive regardless of connectivity state.",
    storyClimax:
      "The key tradeoff: build a custom sync engine on WatermelonDB vs. use a third-party sync service. I chose custom — because the sync logic needed to understand our business rules (partial order completion, split payments) in ways no generic service could. Six weeks of architecture. Worth every day.",
    storyEnd:
      "99.9% system reliability in production. Transaction success rate improved 60% in low-connectivity environments. Adyen and Stripe integrations reduced payment processing time by 30%. Custom Kotlin/Swift native modules for terminal hardware improved efficiency by 40%.",
    storyTakeaway:
      "Offline-first is a UX philosophy, not just a technical feature. Every state transition needs to work without assuming connectivity. The user should never feel the network.",
    demoType: "appetize",
    demoNote:
      "Replace the placeholder below with your Appetize.io embed URL to show a live iOS/Android demo of the EPOS app.",
    href: "/work/epos-platform",
  },
  {
    id: "arcade-live",
    title: "Arcade Live — IoT Gaming",
    tagline: "Remote arcade machine control for 25K+ users",
    summary:
      "Cross-platform gaming platform enabling real-time remote control of physical arcade machines via video streaming, IoT device management, and in-app purchases — driving 20% revenue growth.",
    tags: ["Expo", "React Native Web", "IoT", "IAP", "WebSockets", "Real-time Video"],
    tagColors: ["tag-blue", "tag-blue", "tag-green", "tag-orange", "tag-purple", "tag-rose"],
    metrics: [
      { value: "25K+", label: "Active Users" },
      { value: "20%", label: "Revenue ↑" },
      { value: "<100ms", label: "Control Latency" },
    ],
    storyBeginning:
      "A gaming startup wanted to let users play real, physical arcade machines remotely — via smartphone. The stakes were unusual: a control input with 200ms latency feels broken. The entire product's value rests on sub-100ms responsiveness.",
    storyMiddle:
      "IoT device management at scale is a distributed systems problem wearing a mobile app costume. We needed real-time video streaming, bidirectional control signals, IAP revenue flows, and a UI elegant enough that grandma could figure it out.",
    storyClimax:
      "WebSocket vs. WebRTC for the control channel. WebSockets were simpler, but WebRTC's peer-to-peer reduced server load and latency. The tradeoff was implementation complexity — but with 25K users, the server cost delta justified it.",
    storyEnd:
      "25,000+ active users on launch. Platform revenue up 20% from IAP. Control latency consistently under 100ms. The app runs on iOS, Android, and web via React Native Web — a single codebase serving three surfaces.",
    storyTakeaway:
      "In real-time systems, latency is UX. Every millisecond you shave is a user who doesn't get frustrated and quit. Architect for the latency budget before you write the first component.",
    demoType: "expo",
    demoNote:
      "Embed an Expo Snack below to show the real-time control UI component interactively. Use snack.expo.dev to create and embed.",
    href: "/work/arcade-live",
  },
  {
    id: "secret-world",
    title: "Secret World Travel Guide",
    tagline: "Subscription travel app with 10K+ active users",
    summary:
      "Subscription-based travel guide with Mapbox navigation, Stripe and IAP dual-payment rails, and Redux Toolkit state architecture — serving 10,000+ active users with 15% faster load times post-optimization.",
    tags: ["React Native", "Redux Toolkit", "Stripe", "IAP", "Mapbox", "TypeScript"],
    tagColors: ["tag-purple", "tag-orange", "tag-orange", "tag-green", "tag-blue", "tag-blue"],
    metrics: [
      { value: "10K+", label: "Active Users" },
      { value: "15%", label: "Load Time ↓" },
      { value: "2x", label: "Payment Rails" },
    ],
    storyBeginning:
      "A travel startup needed a subscription app to compete with established players in the travel guide space. The key differentiator: curated, local-expert content behind a paywall, with offline map access. The stakes: churn is brutal in subscription apps. Every slow screen is a cancellation.",
    storyMiddle:
      "Managing subscription state across Stripe (web purchases) and Apple/Google IAP (mobile purchases) — with different refund policies, different entitlement timing, and different webhook behaviors — is a hidden complexity that trips up most implementations.",
    storyClimax:
      "We needed a unified subscription state machine that treated Stripe and IAP as two different input channels to the same entitlement logic. The architecture: a backend entitlement service that both SDKs wrote to, and the app read from. One source of truth.",
    storyEnd:
      "10,000+ active users. 15% load time improvement through Redux Toolkit normalization. Zero subscription state bugs in 8 months of production. Mapbox offline caching worked seamlessly even in remote hiking areas.",
    storyTakeaway:
      "Payments are where complexity hides. Design your entitlement model before your payment integration. The payment provider is an input; entitlement is the business logic. Keep them separate.",
    demoType: "recording",
    demoNote:
      "Place a 30–60 second screen recording or GIF here showing the Mapbox navigation and subscription flow.",
    href: "/work/secret-world",
  },
  {
    id: "remote-exam",
    title: "Remote Examination Platform",
    tagline: "Secure proctoring for 2,000+ students",
    summary:
      "Secure remote exam platform with real-time face detection, screen capture, and audio proctoring — covering 2,000+ students and reducing administrative workload by 30% through automation.",
    tags: ["React Native", "Electron", "Azure", "SQLite", "Canvas API", "Face Detection"],
    tagColors: ["tag-purple", "tag-blue", "tag-blue", "tag-green", "tag-orange", "tag-rose"],
    metrics: [
      { value: "2K+", label: "Students" },
      { value: "30%", label: "Admin Work ↓" },
      { value: "3x", label: "Proctoring Signals" },
    ],
    storyBeginning:
      "An education institution needed a lockdown exam system that could run on varied hardware (student's own laptops), with real-time proctoring, secure question distribution, and zero-cheat guarantees. The stakes: academic integrity for 2,000+ students.",
    storyMiddle:
      "Running a React Native app on desktop via Electron, while preventing screen capture, recording audio, and running ML-based face detection — all without freezing the exam UI — required careful threading and platform-specific native bridging.",
    storyClimax:
      "Face detection on-device vs. server-side. On-device protected privacy and worked offline, but added CPU load to student machines. We chose on-device with adaptive quality settings — reducing CPU impact by 40% when an exam was in progress.",
    storyEnd:
      "2,000+ students examined without incident. 30% reduction in administrative workload via automated scheduling. The platform became a template for 3 subsequent client deployments.",
    storyTakeaway:
      "Security engineering is UX engineering. Every security feature is a constraint on the user experience. The goal is to make the constraint invisible — not absent.",
    demoType: "recording",
    demoNote:
      "Place a 30–60 second screen recording showing the proctoring interface and exam flow here.",
    href: "/work/remote-exam",
  },
];

const storySteps = [
  { key: "storyBeginning", label: "Beginning", subtitle: "The stakes", color: "var(--accent-tertiary)", bg: "rgba(56,189,248,0.15)" },
  { key: "storyMiddle", label: "Middle", subtitle: "The constraints", color: "var(--accent-secondary)", bg: "rgba(108,99,255,0.15)" },
  { key: "storyClimax", label: "Climax", subtitle: "The tradeoff", color: "var(--accent-orange)", bg: "rgba(251,146,60,0.15)" },
  { key: "storyEnd", label: "End", subtitle: "The outcome", color: "var(--accent-green)", bg: "rgba(52,211,153,0.15)" },
  { key: "storyTakeaway", label: "Takeaway", subtitle: "The lesson", color: "var(--accent-rose)", bg: "rgba(244,63,94,0.15)" },
];

function MobileDemoPlaceholder({ type, note }: { type: string; note: string }) {
  const [activeTab, setActiveTab] = useState(type === "expo" ? 0 : type === "appetize" ? 1 : 2);

  const tabs = ["Expo Snack", "Appetize.io", "Screen Recording"];
  const icons = ["⚡", "📱", "▶️"];
  const labels = [
    "Interactive code playground — edit and run the code in your browser",
    "Live iOS/Android app running natively in your browser",
    "30–60 second feature walkthrough",
  ];

  return (
    <div className="mobile-demo-section">
      <div className="mobile-demo-tabs">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`mobile-demo-tab ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
            id={`demo-tab-${i}`}
          >
            {icons[i]} {t}
          </button>
        ))}
      </div>

      <div className="mobile-demo-body">
        {activeTab === 2 ? (
          <div className="recording-placeholder">
            <div className="recording-play-btn" id="demo-play-btn">▶</div>
            <div
              style={{
                fontWeight: 700,
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                marginBottom: "0.25rem",
              }}
            >
              Screen Recording / GIF
            </div>
            <div>{note}</div>
            <div
              style={{
                marginTop: "0.75rem",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Recommended: 30–60s · MP4 or GIF · Max 10MB
            </div>
          </div>
        ) : (
          <>
            <div className="mobile-frame-placeholder">
              <div className="mobile-placeholder-icon">{icons[activeTab]}</div>
              <div className="mobile-placeholder-label">
                {labels[activeTab]}
                <br />
                <span
                  style={{
                    color: "var(--accent-secondary)",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.7rem",
                    marginTop: "0.5rem",
                    display: "block",
                  }}
                >
                  {activeTab === 0
                    ? "→ Embed from snack.expo.dev"
                    : "→ Embed from appetize.io"}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mobile-demo-note">
        <span>💡</span>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default function WorkPage() {
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
            <div className="section-eyebrow">Case Studies</div>
            <h1 className="section-title" style={{ maxWidth: "700px" }}>
              Work that <span className="text-gradient">shipped and scaled.</span>
            </h1>
            <p className="section-desc">
              Four deep-dives into systems I architected from scratch — with the real
              constraints, tradeoffs, and lessons learned along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          {projects.map((project, pi) => (
            <div
              key={project.id}
              id={project.id}
              className="reveal"
              style={{ marginBottom: "6rem" }}
            >
              {/* Case Study Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="tag tag-purple"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  Case Study 0{pi + 1}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                  {project.tagline}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.75rem",
                  lineHeight: 1.15,
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: "680px",
                  marginBottom: "1.5rem",
                }}
              >
                {project.summary}
              </p>

              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}
              >
                {project.tags.map((t, j) => (
                  <span key={j} className={`tag ${project.tagColors[j]}`}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "var(--border)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "3rem",
                  border: "1px solid var(--border)",
                }}
              >
                {project.metrics.map((m, j) => (
                  <div className="project-metric" key={j}>
                    <div className="project-metric-value">{m.value}</div>
                    <div className="project-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Story Structure */}
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.75rem",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "2px",
                    background: "var(--gradient-primary)",
                    borderRadius: "1px",
                  }}
                />
                The Story
              </h3>

              <div style={{ marginBottom: "3rem" }}>
                {storySteps.map((step, si) => (
                  <div className="story-step" key={si}>
                    <div className="story-step-line">
                      <div
                        className="story-step-badge"
                        style={{ background: step.bg, color: step.color }}
                        id={`${project.id}-step-${si}`}
                      >
                        {si + 1}
                      </div>
                      {si < storySteps.length - 1 && (
                        <div className="story-step-connector" />
                      )}
                    </div>
                    <div className="story-step-content">
                      <h4>
                        {step.label}{" "}
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 400,
                            color: "var(--text-muted)",
                          }}
                        >
                          — {step.subtitle}
                        </span>
                      </h4>
                      <p>
                        {(project as Record<string, unknown>)[step.key] as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Demo Section */}
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.25rem",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "2px",
                    background: "var(--gradient-primary)",
                    borderRadius: "1px",
                  }}
                />
                Interactive Demo
              </h3>

              <MobileDemoPlaceholder type={project.demoType} note={project.demoNote} />

              {pi < projects.length - 1 && (
                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, var(--border), transparent)",
                    margin: "6rem 0 0",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
