import fs from "fs";
import { marked } from "marked";

const OUTPUT_DIRECTORY = "docs";
const OUTPUT_FILE = "index.html";
const OUTPUT_PATH = `${OUTPUT_DIRECTORY}/${OUTPUT_FILE}`;
const ENCODING = "utf8";
const ABOUT_ME_LOCAL = "test/about-me.md";
const CSS_LOCAL = "index.css";

const markdown = fs.readFileSync(ABOUT_ME_LOCAL, ENCODING);
const parsed = marked.parse(markdown);

const page = (html) => `<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="index.css" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ccr dev</title>
</head>
<body>
  <main><article>${html}</article></main>
</body>
</html>
`;

fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
fs.writeFileSync(OUTPUT_PATH, page(parsed));

fs.copyFileSync(CSS_LOCAL, `${OUTPUT_DIRECTORY}/${CSS_LOCAL}`);
