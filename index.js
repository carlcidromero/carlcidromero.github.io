import { marked } from "https://cdn.jsdelivr.net/npm/marked@12.0.2/lib/marked.esm.js";

const ABOUT_ME_SELECTOR = "[data-src='about-me.md']";
const article = document.querySelector(ABOUT_ME_SELECTOR);

const data = await fetch(
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/pages/home/about-me.md"
);
const text = await data.text();
const parsed = await marked.parse(text);

article.innerHTML = parsed;
