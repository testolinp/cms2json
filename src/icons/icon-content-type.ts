import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('icon-content-type')
export class IconContentType extends LitElement {
  @property({ type: String })
  fillColor = '#a5a5ba'

  static styles = css`
    :host {
      display: flex;
    }
  `

  render() {
    return html`
      <svg enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill=${this.fillColor}>
        <g><rect fill='none' height='24' width='24'/></g>
        <g>
          <path d='M4,18h2.5v-2.5H4V18z M4,13.25h2.5v-2.5H4V13.25z M4,8.5h2.5V6H4V8.5z M17.5,6v2.5H20V6H17.5z M13,8.5h2.5V6H13V8.5z M17.5,18H20v-2.5h-2.5V18z M17.5,13.25H20v-2.5h-2.5V13.25z M8.5,18H11v-2.5H8.5V18z M13,18h2.5v-2.5H13V18z M8.5,8.5H11V6H8.5 V8.5z M13,13.25h2.5v-2.5H13V13.25z M8.5,13.25H11v-2.5H8.5V13.25z' />
        </g>
      </svg>
    `
  }
}
