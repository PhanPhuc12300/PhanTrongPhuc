import { html } from "/node_modules/.vite/deps/lighterhtml.js?v=6c09ee8a";
import settings from "/settings.json?import";

export const renderHeader = html.node`<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1>${settings.name}</h1>
</div>`;
