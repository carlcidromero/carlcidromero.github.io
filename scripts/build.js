import fs from "fs";

const content = fs.readFileSync("content/README.md", "utf8");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Site</title>
</head>
<body>
  <main>${content}</main>
</body>
</html>
`;

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", html);
