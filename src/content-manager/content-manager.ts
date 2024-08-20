// blog.ts
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { globalStyles } from '../css/global-styles.js'
import { mainStyles } from '../css/main-styles.js'

@customElement('lit-content-manager')
export class ContentManager extends LitElement {
  @property({attribute: false})
  data?: any;

  static styles = [
    globalStyles,
    mainStyles
  ]

  async firstUpdated() {
    await fetch('./src/model/base.json')
      .then(r => r.json())
      .then(async data => {
        this.data = data.contentManager;
      });
  }

  render() {
    return html`
      <div class='wrapper'>
        <aside class='submenu'>
          <h2 class='submenu__title'>Content</h2>
          ${this.data?.map((wrapper: { title: string; items: object[]; }) => 
            html`
              <ul class='submenu__wrapper'>
                <li class='submenu__wrapper__title'>${wrapper.title}</li>
                ${wrapper.items?.map((item: any) => 
                  html`<li class='submenu__wrapper__item'><a href='/'>${item.title}</a></li>`
                )}
              </ul>
            `
          )}
        </aside>
        <section class='content'>
          <h1>Content Manager</h1>
        </section>
      </div>
    `
  }
}