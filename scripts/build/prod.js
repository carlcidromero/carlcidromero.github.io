import fs from "fs";
import { marked } from "marked";

const ENCODING = "utf8";

const OUTPUT_DIRECTORY = "docs";
const OUTPUT_FILE = "index.html";
const OUTPUT_PATH = `${OUTPUT_DIRECTORY}/${OUTPUT_FILE}`;

const BOOKS_DIRECTORY = "books";
const AHERO_DIRECTORY = "ahero";
const AHERO_PATH = `${OUTPUT_DIRECTORY}/${BOOKS_DIRECTORY}/${AHERO_DIRECTORY}`;

const ABOUT_ME_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/pages/home/about-me.md";
const CSS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/ui/refs/heads/main/styles/main.css";
const BOOKS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/books";
const BLOGS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/blogs";

const AHERO_REMOTE = `${BOOKS_REMOTE}/ahero`;
const HELLO_WORLD_DISTRIBUTED_SYSTEM_REMOTE = `${BLOGS_REMOTE}/software-engineering`;

const AHERO_REALITY_REMOTE = `${AHERO_REMOTE}/reality.md`;

const CSS_OUTPUT_FILE = "index.css";

const ABOUT_ME_TEMPLATE_PATH = "templates/index.html";
const AHERO_REALITY_TEMPLATE_PATH = "templates/books/ahero/reality/index.html";

(async () => {
  const aboutMeResponse = await fetch(ABOUT_ME_REMOTE);
  const aboutMeMarkdown = await aboutMeResponse.text();
  const cssResponse = await fetch(CSS_REMOTE);
  const css = await cssResponse.text();
  const aboutMeTemplate = fs.readFileSync(ABOUT_ME_TEMPLATE_PATH, ENCODING);
  const aboutMeParsed = marked.parse(aboutMeMarkdown);

  const aboutMeHtml = aboutMeTemplate.replace(
    /<article data-src="about-me.md"><\/article>/,
    `<article data-src="about-me.md">${aboutMeParsed}</article>`,
  );

  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });

  fs.writeFileSync(`${OUTPUT_DIRECTORY}/${CSS_OUTPUT_FILE}`, css);
  fs.writeFileSync(OUTPUT_PATH, aboutMeHtml);

  const aheroRealityResponse = await fetch(AHERO_REALITY_REMOTE);
  const aheroRealityMarkdown = await aheroRealityResponse.text();
  const aheroRealityTemplate = fs.readFileSync(
    AHERO_REALITY_TEMPLATE_PATH,
    ENCODING,
  );
  const aheroRealityParsed = marked.parse(aheroRealityMarkdown);

  const aheroRealityHtml = aheroRealityTemplate.replace(
    /<article data-src="books\/ahero\/reality.md"><\/article>/,
    `<article data-src="books\/ahero\/reality.md">${aheroRealityParsed}<\/article>`,
  );

  fs.mkdirSync(`${AHERO_PATH}/reality`, { recursive: true });

  fs.writeFileSync(`${AHERO_PATH}/reality/index.html`, aheroRealityHtml);

  writeCnameFile();
})();

async function markdown(remote) {
  const response = await fetch(remote);
  return await response.text();
}

function writeCnameFile() {
  fs.writeFileSync(`${OUTPUT_DIRECTORY}/CNAME`, "carlcidromero.com");
}
