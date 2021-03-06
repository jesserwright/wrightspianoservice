const baseHtml = (html) => 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Wright's piano service is a piano repair and maintenance business in the DC metro area">
    <title>Wright's Piano Service | DC Metro Area</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"
      integrity="sha512-Oy18vBnbSJkXTndr2n6lDMO5NN31UljR8e/ICzVPrGpSud4Gkckb8yUpqhKuUNoE+o9gAb4O/rAxxw1ojyUVzg=="
      crossorigin="anonymous"
    />
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }

      @media (max-width: 767px) {
        .markdown-body {
          padding: 15px;
        }
      }
    </style>
  </head>
  <body class="markdown-body">
${html}
  </body>
</html>`;

const fs = require("fs");
const marked = require("marked");

try {
  const markdown = fs.readFileSync("./public/index.md", "utf8");
  const bodyHtml = marked(markdown);
  const pageHtml = baseHtml(bodyHtml);
  fs.writeFileSync("./public/index.html", pageHtml);
  console.log("Processed HTML Successfully")
} catch (err) {
  console.error(err);
}
