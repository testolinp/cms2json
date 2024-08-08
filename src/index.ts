// index.ts
import { Router } from '@vaadin/router';
import './app.js'; // Adding the lit-app component here for better performance

const routes = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: 'blog',
        component: 'lit-blog',
        action: async () => {
          await import('./blog/blog.js');
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
              await import('./blog/blog-posts.js');
            },
          },
          {
            path: 'posts/:id',
            component: 'lit-blog-post',
            action: async () => {
              await import('./blog/blog-post.js');
            },
          },
        ]
      }
    ]
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);