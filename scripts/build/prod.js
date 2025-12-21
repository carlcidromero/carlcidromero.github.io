import fs from "fs";
import { marked } from "marked";

const OUTPUT_DIRECTORY = "docs";
const OUTPUT_FILE = "index.html";
const OUTPUT_PATH = `${OUTPUT_DIRECTORY}/${OUTPUT_FILE}`;
const ENCODING = "utf8";
const ABOUT_ME_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/develop/pages/home/about-me.md";
const CSS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/ui/refs/heads/develop/styles/main.css";
const CSS_OUTPUT_FILE = "index.css";
const TEMPLATE_PATH = "templates/index.html";

(async () => {
  const markdownResponse = await fetch(ABOUT_ME_REMOTE);
  const markdown = await markdownResponse.text();
  const cssResponse = await fetch(CSS_REMOTE);
  const css = await cssResponse.text();
  const template = fs.readFileSync(TEMPLATE_PATH, ENCODING);
  const parsed = marked.parse(markdown);

  const injectedHTML = template.replace(
    /<article data-src="about-me.md"><\/article>/,
    `<article data-src="about-me.md">${parsed}</article>`,
  );

  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });

  fs.writeFileSync(`${OUTPUT_DIRECTORY}/${CSS_OUTPUT_FILE}`, css);
  fs.writeFileSync(OUTPUT_PATH, injectedHTML);
})();
