import { links } from "/settings.json?import";
import { html } from "/node_modules/.vite/deps/lighterhtml.js?v=6c09ee8a";

function renderLink(link) {
  const classes = link.url
    ? link.url.replace(/[^a-z0-9]/gi, "-").toLowerCase()
    : "";
  return html`
    <li class=${classes}>
      <a href=${link.url}>
        ${link.img ? html`<img src=${link.img} alt=${link.altText} />` : ""}
        <span>${link.text}</span>
      </a>
    </li>
  `;
}

export const renderLinks = html.node`
    <ul class="link-list">
      ${links.map(renderLink)}
    </ul>
  `;
