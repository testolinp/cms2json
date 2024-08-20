// blog.ts
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from '../css/global-styles.js'
import { mainStyles } from '../css/main-styles.js'

@customElement('lit-content-type')
export class ContentType extends LitElement {
  static styles = [
    globalStyles,
    mainStyles
  ]

  render() {
    return html`
      <div class='wrapper'>
        <aside class='submenu'>
          <h2 class='submenu__title'>Content type</h2>
        </aside>
        <section class='content'>
          <h1>Content Type</h1>
        </section>
      </div>
    `
  }
}