import { marked } from "marked";
import fs from "fs";
import path from "path";

const ENCODING = "utf8";
const OUTPUT_DIRECTORY = "docs";
const BOOKS_DIRECTORY = "books";
const AHERO_DIRECTORY = "ahero";

const BOOKS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/books";

const AHERO_LOCAL = path.join(
  OUTPUT_DIRECTORY,
  BOOKS_DIRECTORY,
  AHERO_DIRECTORY
);
const AHERO_REALITY_TEMPLATE_PATH = path.join(
  "templates",
  "books",
  "ahero",
  "reality",
  "index.html"
);
const AHERO_REMOTE = `${BOOKS_REMOTE}/ahero`;
const AHERO_REALITY_REMOTE = `${AHERO_REMOTE}/reality.md`;

export async function writeBookEntry() {
  const aheroRealityResponse = await fetch(AHERO_REALITY_REMOTE);
  const aheroRealityMarkdown = await aheroRealityResponse.text();
  const aheroRealityTemplate = fs.readFileSync(
    AHERO_REALITY_TEMPLATE_PATH,
    ENCODING
  );
  const aheroRealityParsed = marked.parse(aheroRealityMarkdown);

  const aheroRealityHtml = aheroRealityTemplate.replace(
    /<article data-src="books\/ahero\/reality.md"><\/article>/,
    `<article data-src="books\/ahero\/reality.md">${aheroRealityParsed}<\/article>`
  );

  fs.mkdirSync(`${AHERO_LOCAL}/reality`, { recursive: true });

  fs.writeFileSync(`${AHERO_LOCAL}/reality/index.html`, aheroRealityHtml);
}
