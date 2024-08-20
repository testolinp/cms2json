// blog.ts
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from '../css/global-styles.js'

@customElement('lit-media-library')
export class MediaLibrary extends LitElement {
  static styles = [
    globalStyles
  ]

  render() {
    return html`
      <h1>Media Library</h1>
    `
  }
}