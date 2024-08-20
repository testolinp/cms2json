import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from '../css/global-styles.js'
import { mainAsideStyles } from '../css/main-aside-styles.js'

import '../icons/icon-content-manager.js'
import '../icons/icon-content-type.js'
import '../icons/icon-media-library.js'

@customElement('main-aside')
export class MainAside extends LitElement {
  static styles = [
    globalStyles,
    mainAsideStyles
  ]

  render() {
    return html`
      <aside class='menu'>
        <a href='/' class='lg'>
          <div class='lg__image'></div>
          <div class='lg__data'>
            <h1>cms2json Dashboard</h1>
            <p>Workplace</p>
          </div>
        </a>
        <div class='menu__nav'>
          <a class='menu__nav__btn' href='/content-manager'>
            <icon-content-manager></icon-content-manager>
            Content Manager
          </a>
          <nav class='menu__nav__gral'>
            <h2>General</h2>
            <a href='/content-type'>
              <icon-content-type></icon-content-type>
              Content type
            </a>
          </nav>
        </div>
      </aside>
    `
  }
}
