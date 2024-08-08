// app.ts

import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from './css/global-styles.js'
import { mainStyles } from './css/main-styles.js'

import './components/main-aside.js'

@customElement('lit-app')
export class App extends LitElement {
  static styles = [
    globalStyles,
    mainStyles
  ]

  render() {
    return html`
      <div class='layout'>
        <main-aside></main-aside>
        <aside class='submenu'>
          <h2 class='submenu__title'>Content</h2>
        </aside>
        <main class='main'>
          <slot>asdasasd</slot>
        </main>
      </div>
    `
  }
}
