import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from '../css/global-styles.js'
import { mainAsideStyles } from '../css/main-aside-styles.js'

@customElement('main-aside')
export class MainAside extends LitElement {
  static styles = [
    globalStyles,
    mainAsideStyles
  ]

  render() {
    return html`
      <aside class='menu'>
        <div class='lg'>
          <div class='lg__image'></div>
          <div class='lg__data'>
            <h1>cms2json Dashboard</h1>
            <p>Workplace</p>
          </div>
        </div>
        <div class='menu__nav'>
          <a class='menu__nav__btn' href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#7b79ff">
              <g><rect fill="none" height="24" width="24"/></g>
              <g>
                <g>
                  <path d="M7,17V9.93L13.93,3l0,0H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-8.93L14.07,17H7z" />
                  <polygon points="9,15 13.24,15 20.44,7.8 16.2,3.56 9,10.76" />
                  <path d="M22.91,2.49l-1.41-1.41c-0.78-0.78-2.05-0.78-2.83,0l-1.06,1.06l4.24,4.24l1.06-1.06C23.7,4.54,23.7,3.27,22.91,2.49z" />
                </g>
              </g>
            </svg>
            Content Manager
          </a>
          <nav class='menu__nav__gral'>
            <h2>General</h2>
            <a href='/blog'>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#a5a5ba">
                <g><rect fill="none" height="24" width="24"/></g>
                <g>
                  <path d="M4,18h2.5v-2.5H4V18z M4,13.25h2.5v-2.5H4V13.25z M4,8.5h2.5V6H4V8.5z M17.5,6v2.5H20V6H17.5z M13,8.5h2.5V6H13V8.5z M17.5,18H20v-2.5h-2.5V18z M17.5,13.25H20v-2.5h-2.5V13.25z M8.5,18H11v-2.5H8.5V18z M13,18h2.5v-2.5H13V18z M8.5,8.5H11V6H8.5 V8.5z M13,13.25h2.5v-2.5H13V13.25z M8.5,13.25H11v-2.5H8.5V13.25z" />
                </g>
              </svg>
              Content type
            </a>
            <a href='/about'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#a5a5ba">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
              </svg>
              Media library
            </a>
          </nav>
          <!-- <a class='active' href='/'>Home</a>
          <a href='/blog'>Blog</a>
          <a href='/about'>About</a> -->
        </div>
      </aside>
    `
  }
}
