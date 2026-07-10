import Link from "next/link";

const GITHUB = "https://github.com/JohnW8111/personal-ai-template";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>A private AI assistant that actually knows you</h1>
        <p className="tagline">
          Personal AI is a free starter kit that gives your AI assistant lasting
          knowledge of who you are, what you care about, and what you&rsquo;re
          working on &mdash; so you stop re-introducing yourself in every
          conversation.
        </p>
        <div className="hero-buttons">
          <a className="button primary" href={GITHUB} target="_blank" rel="noreferrer">
            Download from GitHub
          </a>
          <Link className="button secondary" href="/interview">
            Watch the setup interview
          </Link>
          <Link className="button secondary" href="/files">
            Look inside the folder
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Deliberately simple</h2>
        <p>
          It is just <strong>a folder of ordinary files that lives on your own
          computer</strong>. There is no account to create, nothing to install
          beyond the AI app you already use, and nothing stored in the cloud.
        </p>
        <div className="promise">
          <p>
            <strong>Off by default.</strong> Your assistant behaves completely
            normally until you type <code>PAI on</code>. Nothing about you is
            loaded behind your back.
          </p>
          <p>
            <strong>Memory only when you say so.</strong> The assistant records
            something about you only when you type <code>PAI remember:</code>{" "}
            &mdash; never from ordinary conversation.
          </p>
          <p>
            <strong>Yours.</strong> Every file is on your computer, readable by
            you, and deletable by you.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Setting it up: three steps, then a conversation</h2>
        <div className="steps">
          <div className="step">
            <span className="step-num">1</span>
            <h3>Get your copy of the folder</h3>
            <p>
              On the GitHub page, click the green <strong>Code</strong> button,
              choose <strong>Download ZIP</strong>, double-click the ZIP to open
              it, and move the whole folder to your Documents.
            </p>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <h3>Connect your AI app to the folder</h3>
            <p>
              Open the <strong>Claude</strong> desktop app (Cowork) or the{" "}
              <strong>Codex</strong> desktop app and choose that folder as the
              place to work.
            </p>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <h3>
              Type <code>PAI setup</code>
            </h3>
            <p>
              The assistant interviews you &mdash; who you are, what you care
              about, who you meet with &mdash; and fills in your files for you.
              About 10&ndash;15 minutes, every question skippable.{" "}
              <Link href="/interview">See exactly what that looks like.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>How to turn it on and off</h2>
        <div className="table-scroll">
          <table className="commands">
            <thead>
              <tr>
                <th>You type</th>
                <th>What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>PAI on</code>
                </td>
                <td>
                  The assistant reads your personal files, then helps using what
                  it knows about you.
                </td>
              </tr>
              <tr>
                <td>
                  <code>PAI off</code>
                </td>
                <td>
                  The assistant stops using your personal files and goes back to
                  normal.
                </td>
              </tr>
              <tr>
                <td>
                  <code>PAI remember:</code>
                </td>
                <td>
                  Saves one fact, preference, or decision &mdash; the only way
                  lasting memory is recorded.
                </td>
              </tr>
              <tr>
                <td>
                  <code>PAI inbox:</code>
                </td>
                <td>Jots an idea down to sort out later.</td>
              </tr>
              <tr>
                <td>
                  <code>PAI feedback:</code>
                </td>
                <td>
                  Tells the system what worked and what didn&rsquo;t, so it
                  improves.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>What everyday use looks like</h2>
        <div className="examples">{`PAI on: help me get ready for my call with Maria tomorrow.
PAI on: what should I focus on this week?
PAI remember: my grandson's baseball games are Saturday mornings this fall.
PAI inbox: maybe a monthly letter to the family about what I'm learning.
PAI on: run my weekly review.`}</div>
        <p>
          That last one produces a short weekly report &mdash; people you
          haven&rsquo;t talked to in a while, ideas waiting in your inbox, tasks
          still open. You just ask; the assistant handles the mechanics.
        </p>
      </section>

      <section className="cta-band">
        <h2>See it before you try it</h2>
        <p>
          Browse the actual files, watch the interview happen, then download
          your own copy.
        </p>
        <div className="hero-buttons">
          <Link className="button secondary" href="/files">
            Look inside the folder
          </Link>
          <Link className="button secondary" href="/interview">
            Watch the setup interview
          </Link>
          <a className="button primary" href={GITHUB} target="_blank" rel="noreferrer">
            Download from GitHub
          </a>
        </div>
      </section>
    </>
  );
}
