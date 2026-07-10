"use client";

import { useEffect, useRef, useState } from "react";

// A scripted replay of a real PAI setup interview with a fictional user, Ruth.
// Each step is either a chat bubble or a line written into Ruth's profile file.
const SCRIPT = [
  { who: "user", text: "PAI setup" },
  {
    who: "assistant",
    text:
      "Welcome! I'm going to ask you a few questions so this folder becomes your own Personal AI. Short answers are fine, and you can say \"skip\" to any question.\n\nFirst — what should I call you?",
  },
  { who: "user", text: "Ruth" },
  { file: "- The user's name is Ruth." },
  {
    who: "assistant",
    text:
      "Nice to meet you, Ruth. In a sentence or two, who are you? Work, retired, volunteering, family — whatever matters to you.",
  },
  {
    who: "user",
    text:
      "Retired teacher, 34 years. I tutor two kids on Tuesdays and help run our church food pantry.",
  },
  {
    file:
      "- Retired teacher (34 years). Tutors two children on Tuesdays;\n  helps run her church's food pantry.",
  },
  {
    who: "assistant",
    text:
      "What made you want a personal AI? What do you hope it helps with?",
  },
  {
    who: "user",
    text:
      "Mostly keeping track of people and commitments. I don't want to forget what the kids are working on between Tuesdays.",
  },
  {
    file:
      "- Wants help tracking people and commitments — especially\n  what her tutoring students are working on week to week.",
  },
  {
    who: "assistant",
    text:
      "Are there values or principles you'd want guiding any advice I give you?",
  },
  {
    who: "user",
    text: "My faith comes first. And be honest with me — don't flatter.",
  },
  {
    file: "- Faith comes first. Be honest; never flatter.",
  },
  {
    who: "assistant",
    text:
      "Got it. What are the two or three things you most want to make progress on right now?",
  },
  {
    who: "user",
    text:
      "The pantry's holiday food drive, and I keep meaning to write down family recipes for my granddaughter.",
  },
  {
    file:
      "- Current priorities: pantry holiday food drive; writing down\n  family recipes for her granddaughter.",
  },
  {
    who: "assistant",
    text:
      "Last one for now: is there someone you meet or talk with regularly that you'd like help preparing for and remembering details about?",
  },
  {
    who: "user",
    text: "The two kids I tutor — Marcus and Dee.",
  },
  {
    file: "- Regular people: Marcus and Dee (Tuesday tutoring).",
  },
  {
    who: "assistant",
    text:
      "Done! Here's what your Personal AI now knows about you — take a look at the file on the right. From now on:\n\nPAI on — I use what I know about you.\nPAI off — back to normal.\nPAI remember: — save one new fact.\n\nTry it: type \"PAI on: introduce yourself and tell me what you know about me.\"",
  },
  {
    who: "user",
    text: "PAI on: introduce yourself and tell me what you know about me.",
  },
  {
    who: "assistant",
    text:
      "Happy to, Ruth. You're a retired teacher who tutors Marcus and Dee on Tuesdays and helps run your church's food pantry. Right now you're focused on the holiday food drive and a family recipe collection for your granddaughter. You want honesty over flattery, with your faith guiding what matters. How can I help today — shall we start with Tuesday's tutoring plan?",
  },
];

export default function InterviewReplay() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    if (count >= SCRIPT.length) return;
    const step = SCRIPT[count];
    const delay = step.file ? 900 : Math.min(1200 + step.text.length * 14, 3800);
    timer.current = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(timer.current);
  }, [count]);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [count]);

  const shown = SCRIPT.slice(0, count);
  const bubbles = shown.filter((s) => s.who);
  const fileLines = shown.filter((s) => s.file);
  const done = count >= SCRIPT.length;

  return (
    <div className="chat-wrap">
      <div>
        <div
          className="chat"
          ref={chatRef}
          style={{ maxHeight: "560px", overflowY: "auto" }}
        >
          {bubbles.map((b, i) => (
            <div key={i} className={`bubble ${b.who}`}>
              <span className="who">{b.who === "user" ? "Ruth" : "Assistant"}</span>
              {b.text}
            </div>
          ))}
          {!done && (
            <div className="bubble assistant" style={{ opacity: 0.55 }}>
              <span className="who">Assistant</span>…
            </div>
          )}
        </div>
        <div className="replay-controls">
          <button onClick={() => setCount(0)}>Play again</button>
          {!done && (
            <button onClick={() => setCount(SCRIPT.length)}>
              Skip to the end
            </button>
          )}
        </div>
      </div>
      <div className="filepanel">
        <div className="fp-title">assistant/profile.md — filling in as Ruth answers</div>
        {fileLines.length === 0 ? (
          <span style={{ opacity: 0.55 }}>
            (empty — the interview will fill this in)
          </span>
        ) : (
          fileLines.map((l, i) => (
            <span key={i} className="fp-new">
              {l.file}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
