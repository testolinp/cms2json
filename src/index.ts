// index.ts
import { Router } from '@vaadin/router'
import './app.js'

const routes = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: 'content-manager',
        component: 'lit-content-manager',
        action: async () => {
          await import('./content-manager/content-manager.js')
        },
        children: [
          {
            path: '',
            redirect: '/content-manager/types',
          },
          {
            path: 'types',
            component: 'lit-content-manager-posts',
            action: async () => {
              await import('./content-manager/content-manager-posts.js')
            },
          },
          {
            path: 'types/:id',
            component: 'lit-content-manager-post',
            action: async () => {
              await import('./content-manager/content-manager-post.js')
            },
          },
        ]
      },
      {
        path: 'content-type',
        component: 'lit-content-type',
        action: async () => {
          await import('./content-type/content-type.js')
        },
      },
    ]
  },
]

const outlet = document.getElementById('outlet')
export const router = new Router(outlet)
router.setRoutes(routes)
