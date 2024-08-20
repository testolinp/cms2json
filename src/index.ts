// index.ts
import { Router } from '@vaadin/router'
import './app.js'

const routes = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: 'blog',
        component: 'lit-blog',
        action: async () => {
          await import('./blog/blog.js')
        },
        children: [
          {
            path: '',
            redirect: '/blog/posts',
          },
          {
            path: 'posts',
            component: 'lit-blog-posts',
            action: async () => {
              await import('./blog/blog-posts.js')
            },
          },
          {
            path: 'posts/:id',
            component: 'lit-blog-post',
            action: async () => {
              await import('./blog/blog-post.js')
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
      {
        path: 'content-manager',
        component: 'lit-content-manager',
        action: async () => {
          await import('./content-manager/content-manager.js')
        },
        // children: [
        //   {
        //     path: '',
        //     redirect: '/content-manager',
        //   }
        // ]
      },
    ]
  },
]

const outlet = document.getElementById('outlet')
export const router = new Router(outlet)
router.setRoutes(routes)
