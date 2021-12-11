const domParser = new DOMParser();

function parseHtml(html: string): string {
  const doc = domParser.parseFromString(html, "text/html");
  return doc.documentElement.textContent || "";
}

export default parseHtml