export function htmlToPlainText(htmlString, wordLimit = null) {
  if (!htmlString) return "";

  // Create temporary DOM element
  const doc = new DOMParser().parseFromString(htmlString, "text/html");

  // Pre-processing specific elements
  // Handle lists
  doc.querySelectorAll("li").forEach((li) => {
    li.textContent = `• ${li.textContent}`; // Add bullet points to list items
  });

  // Handle headers - add newlines
  ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((tag) => {
    doc.querySelectorAll(tag).forEach((header) => {
      header.textContent = `\n${header.textContent}\n`;
    });
  });

  // Add line breaks for block elements
  ["p", "div", "br", "hr"].forEach((tag) => {
    doc.querySelectorAll(tag).forEach((element) => {
      element.textContent = `${element.textContent}\n`;
    });
  });

  // Get text content
  let text = doc.body.textContent || "";

  // Post-processing cleanup
  text = text
    // Replace multiple spaces with single space
    .replace(/\s+/g, " ")
    // Replace multiple newlines with double newlines
    .replace(/\n\s*\n/g, "\n\n")
    // Trim extra whitespace
    .trim()
    // Handle common HTML entities
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Handle other common entities
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "...")
    // Remove any remaining HTML entities
    .replace(/&[^;]+;/g, "");

  if (wordLimit) {
    const words = text.split(/\s+/);
    if (words.length > wordLimit) {
      text = words.slice(0, wordLimit).join(" ") + "...";
    }
  }

  return text;
}
