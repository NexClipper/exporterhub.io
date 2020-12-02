import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

const remarkMarkdown = mdText => {
  const html_text = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .processSync(mdText);

  return html_text.toString();
};

export default remarkMarkdown;
