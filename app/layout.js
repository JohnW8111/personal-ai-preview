import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Personal AI — a private AI assistant that actually knows you",
  description:
    "A simple, private, file-based personal AI you control. Works with the Claude and Codex desktop apps. See how it works before you download it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav">
            <Link href="/" className="brand">
              Personal&nbsp;AI
            </Link>
            <div className="nav-links">
              <Link href="/files">Look inside</Link>
              <Link href="/interview">See the interview</Link>
              <a
                href="https://github.com/JohnW8111/personal-ai-template"
                target="_blank"
                rel="noreferrer"
                className="nav-cta"
              >
                Get it on GitHub
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            Personal AI is a free, open template.{" "}
            <a
              href="https://github.com/JohnW8111/personal-ai-template"
              target="_blank"
              rel="noreferrer"
            >
              Download it from GitHub
            </a>{" "}
            — your copy lives on your computer, not on this website.
          </p>
        </footer>
      </body>
    </html>
  );
}
