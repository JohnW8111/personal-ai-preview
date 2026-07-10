import Link from "next/link";
import InterviewReplay from "../../components/InterviewReplay";

export const metadata = {
  title: "See the setup interview — Personal AI",
};

export default function InterviewPage() {
  return (
    <>
      <div className="tour-intro">
        <h1>See the setup interview</h1>
        <p>
          When you type <code>PAI setup</code>, your assistant interviews you
          and fills in your files as you answer. Here&rsquo;s a replay with a
          fictional user, Ruth &mdash; watch her file build itself on the right.
          Your own interview covers a few more topics and takes about
          10&ndash;15 minutes.
        </p>
      </div>
      <InterviewReplay />
      <section className="cta-band">
        <h2>Ready to have this conversation yourself?</h2>
        <div className="hero-buttons">
          <a
            className="button primary"
            href="https://github.com/JohnW8111/personal-ai-template"
            target="_blank"
            rel="noreferrer"
          >
            Download from GitHub
          </a>
          <Link className="button secondary" href="/files">
            Look inside the folder first
          </Link>
        </div>
      </section>
    </>
  );
}
