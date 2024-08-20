// content-manager-posts.ts
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { globalStyles } from '../css/global-styles.js'
import { mainStyles } from '../css/main-styles.js'
import { submenuStyles } from '../css/submenu-styles.js'

import '../icons/icon-plus.js'

@customElement('lit-content-manager-posts')
export class ContentManagerPosts extends LitElement {
  @property({attribute: false})
  data?: any;

  @property({attribute: false})
  entries?: any;
  
  @property()
  accessor collections = 'collections';

  @property()
  accessor currentSelection = 'page';

  static styles = [
    globalStyles,
    mainStyles,
    submenuStyles
  ]

  async firstUpdated() {
    await fetch('./src/model/base.json')
      .then(r => r.json())
      .then(async data => {
        this.data = data.contentManager
      });
    
      this.getType()
  }

  getType() {
    this.data.map((currentData: any) => {
      if (currentData.id === this.collections) {
        const data = currentData.items;
        data.find((item: any) => {
          if (item.id === this.currentSelection) {
            this.entries = item.entries;
          }
          return null
        })
      }
      return null;
    })
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
                  html`
                    <li class='submenu__wrapper__item ${this.currentSelection === item.id ? 'submenu__wrapper__item--active' : ''}'>
                      <button @click="${this.getType}"></a>${item.title}</button>
                    </li>
                  `
                )}
              </ul>
            `
          )}
        </aside>
        <section class='content'>
          <div class='content__header'>
            <div>
              <h1>Page</h1>
              <p>${this.entries?.length} entries found</p>
            </div>
            <button><icon-plus></icon-plus>Create new type</button>
          </div>
          <div class='content__wrapper'>
            <div class='content__row content__row--title'>
              <div class='content__row__id'>ID</div>
              <div class='content__row__title'>TITLE</div>
              <div class='content__row__slug'>SLUG</div>
            </div>
            ${this.entries?.map((entry: any) => 
              html`
                <a href='/content-manager/types/${entry.slug}' class='content__row'>
                  <div class='content__row__id'>${entry.id}</div>
                  <div class='content__row__title'>${entry.title}</div>
                  <div class='content__row__slug'>${entry.slug}</div>
                </a>
              `
            )}
          </div>
        </section>
      </div>
    `
  }
}
