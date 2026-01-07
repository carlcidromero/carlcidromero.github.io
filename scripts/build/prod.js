import fs from "fs";
import { marked } from "marked";
import { writeBookEntry } from "./write-book-entry.js";

const ENCODING = "utf8";

const OUTPUT_DIRECTORY = "docs";
const OUTPUT_FILE = "index.html";
const OUTPUT_PATH = `${OUTPUT_DIRECTORY}/${OUTPUT_FILE}`;

const BLOGS_DIRECTORY = "blogs";
const SOFTWARE_ENGINEERING_DIRECTORY = "software-engineering";
const SOFTWARE_ENGINEERING_PATH = `${OUTPUT_DIRECTORY}/${BLOGS_DIRECTORY}/${SOFTWARE_ENGINEERING_DIRECTORY}`;

const ABOUT_ME_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/pages/home/about-me.md";
const CSS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/ui/refs/heads/main/styles/main.css";
const BLOGS_REMOTE =
  "https://raw.githubusercontent.com/carlcidromero/content/refs/heads/main/blogs";

const SOFTWARE_ENGINEERING_REMOTE = `${BLOGS_REMOTE}/software-engineering`;

const HELLO_WORLD_DISTRIBUTED_SYSTEM_REMOTE = `${SOFTWARE_ENGINEERING_REMOTE}/hello-world-distributed-system.md`;

const CSS_OUTPUT_FILE = "index.css";

const ABOUT_ME_TEMPLATE_PATH = "templates/index.html";
const HELLO_WORLD_DISTRIBUTED_SYSTEM_TEMPLATE_PATH =
  "templates/blogs/software-engineering/hello-world-distributed-system/index.html";

(async () => {
  writeWebPage();
  writeBookEntry();
  writeSoftwareEngineeringBlogPost();
  writeCss();
  writeCnameFile();
})();

async function writeCss() {
  const cssResponse = await fetch(CSS_REMOTE);
  const css = await cssResponse.text();
  fs.writeFileSync(`${OUTPUT_DIRECTORY}/${CSS_OUTPUT_FILE}`, css);
}

async function writeWebPage() {
  const aboutMeResponse = await fetch(ABOUT_ME_REMOTE);
  const aboutMeMarkdown = await aboutMeResponse.text();
  const aboutMeTemplate = fs.readFileSync(ABOUT_ME_TEMPLATE_PATH, ENCODING);
  const aboutMeParsed = marked.parse(aboutMeMarkdown);

  const aboutMeHtml = aboutMeTemplate.replace(
    /<article data-src="about-me.md"><\/article>/,
    `<article data-src="about-me.md">${aboutMeParsed}</article>`
  );

  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, aboutMeHtml);
}

async function writeSoftwareEngineeringBlogPost() {
  const helloWorldDistributedSystemResponse = await fetch(
    HELLO_WORLD_DISTRIBUTED_SYSTEM_REMOTE
  );

  const helloWorldDistributedSystemMarkdown =
    await helloWorldDistributedSystemResponse.text();
  const helloWorldDistributedSystemTemplate = fs.readFileSync(
    HELLO_WORLD_DISTRIBUTED_SYSTEM_TEMPLATE_PATH,
    ENCODING
  );

  const helloWorldDistributedSystemParsed = marked.parse(
    helloWorldDistributedSystemMarkdown
  );

  const helloWorldDistributedSystemHtml =
    helloWorldDistributedSystemTemplate.replace(
      /<article data-src="blogs\/software-engineering\/hello-world-distributed-system.md"><\/article>/,
      `<article data-src="blogs\/software-engineering\/hello-world-distributed-system.md">${helloWorldDistributedSystemParsed}<\/article>`
    );

  fs.mkdirSync(`${SOFTWARE_ENGINEERING_PATH}/hello-world-distributed-system`, {
    recursive: true,
  });

  fs.writeFileSync(
    `${SOFTWARE_ENGINEERING_PATH}/hello-world-distributed-system/index.html`,
    helloWorldDistributedSystemHtml
  );
}

function writeCnameFile() {
  fs.mkdirSync(`${OUTPUT_DIRECTORY}`, { recursive: true });
  fs.writeFileSync(`${OUTPUT_DIRECTORY}/CNAME`, "carlcidromero.com");
}
