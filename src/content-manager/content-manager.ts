// content-manager.ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-content-manager')
export class ContentManager extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}
