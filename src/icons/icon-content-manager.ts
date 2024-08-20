import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('icon-content-manager')
export class IconContentManager extends LitElement {
  @property({ type: String })
  fillColor = '#7b79ff'

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
          <g>
            <path d='M7,17V9.93L13.93,3l0,0H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-8.93L14.07,17H7z' />
            <polygon points='9,15 13.24,15 20.44,7.8 16.2,3.56 9,10.76' />
            <path d='M22.91,2.49l-1.41-1.41c-0.78-0.78-2.05-0.78-2.83,0l-1.06,1.06l4.24,4.24l1.06-1.06C23.7,4.54,23.7,3.27,22.91,2.49z' />
          </g>
        </g>
      </svg>
    `
  }
}
