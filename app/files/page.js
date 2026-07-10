import fs from "node:fs";
import path from "node:path";
import FileTour from "../../components/FileTour";

export const metadata = {
  title: "Look inside — Personal AI",
};

function collectFiles(root) {
  const results = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".md"))
        results.push({
          path: path.relative(root, full),
          text: fs.readFileSync(full, "utf-8"),
        });
    }
  };
  walk(root);
  return results;
}

export default function FilesPage() {
  const files = collectFiles(path.join(process.cwd(), "content"));
  return (
    <>
      <div className="tour-intro">
        <h1>Look inside the folder</h1>
        <p>
          This is the real thing &mdash; every file below is exactly what
          you&rsquo;ll have on your computer after you download it. No hidden
          machinery: the whole system is readable files like these. The
          fill-in-the-blank prompts you&rsquo;ll see are what the setup
          interview answers for you.
        </p>
      </div>
      <FileTour files={files} />
    </>
  );
}
