import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('icon-plus')
export class IconPlus extends LitElement {
  @property({ type: String })
  fillColor = '#fff'

  static styles = css`
    :host {
      display: flex;
    }
  `

  render() {
    return html`
      <svg height='24px' viewBox='0 0 24 24' width='24px' fill=${this.fillColor}>
        <path d='M0 0h24v24H0z' fill='none'/><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
      </svg>
    `
  }
}