"use client";

import { useMemo, useState } from "react";
import { marked } from "marked";

const GROUP_LABELS = {
  "": "Top level",
  assistant: "assistant/ — who you are",
  background: "background/ — lasting facts",
  people: "people/ — who you meet with",
  memory: "memory/ — what accumulates",
  inbox: "inbox/ — quick capture",
  work: "work/ — bigger tasks",
  skills: "skills/ — reusable workflows",
};

function groupOf(filePath) {
  const top = filePath.includes("/") ? filePath.split("/")[0] : "";
  return top in GROUP_LABELS ? top : "";
}

export default function FileTour({ files }) {
  const [selected, setSelected] = useState(
    files.find((f) => f.path === "assistant/profile.md")?.path ?? files[0].path
  );

  const groups = useMemo(() => {
    const order = Object.keys(GROUP_LABELS);
    const byGroup = new Map(order.map((g) => [g, []]));
    for (const f of files) byGroup.get(groupOf(f.path)).push(f);
    return order
      .map((g) => ({ key: g, label: GROUP_LABELS[g], files: byGroup.get(g) }))
      .filter((g) => g.files.length > 0);
  }, [files]);

  const current = files.find((f) => f.path === selected);
  const html = useMemo(
    () => (current ? marked.parse(current.text) : ""),
    [current]
  );

  return (
    <div className="tour">
      <aside className="tour-side">
        {groups.map((g) => (
          <div key={g.key}>
            <h3>{g.label}</h3>
            {g.files.map((f) => (
              <button
                key={f.path}
                className={f.path === selected ? "active" : ""}
                onClick={() => setSelected(f.path)}
              >
                {f.path.endsWith("/SKILL.md")
                  ? f.path.split("/").at(-2)
                  : f.path.split("/").pop()}
              </button>
            ))}
          </div>
        ))}
      </aside>
      <article className="tour-main">
        <div className="path">{current?.path}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
}
