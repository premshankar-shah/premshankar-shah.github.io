import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Designed & built by <span className="footer-name">Premshankar Shah</span> ·{" "}
          <a
            href="https://github.com/premshankar-shah"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-secondary)" }}
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/premshankar-shah"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-secondary)" }}
          >
            LinkedIn
          </a>
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.72rem" }}>
          Senior React Native Developer · Ahmedabad, India · Available with 60-day notice
        </p>
      </div>
    </footer>
  );
}
