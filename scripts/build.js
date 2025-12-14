import fs from "fs";
import { marked } from "marked";

const markdown = fs.readFileSync("markdown/README.md", "utf8");
const parsed = marked.parse(markdown);

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Site</title>
</head>
<body>
  <main>${parsed}</main>
</body>
</html>
`;

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", html);