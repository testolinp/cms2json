// app.ts

import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from './css/global-styles.js'
import { mainStyles } from './css/main-styles.js'
import { homeStyles } from './css/home-styles.js'

import './components/main-aside.js'

@customElement('lit-app')
export class App extends LitElement {
  static styles = [
    globalStyles,
    mainStyles,
    homeStyles
  ]

  render() {
    return html`
      <div class='layout'>
        <main-aside></main-aside>
        <main class='main'>
          <slot>
            <section class='homepage'>
              <h1 class='homepage__title'>Bienvenido &#128075;</h1>
              <p class='homepage__description'>Desarrollamos cms2json para que puedas exportar tus {} y tenerlos de forma local.</p>
            </section>
          </slot>
        </main>
      </div>
    `
  }
}
