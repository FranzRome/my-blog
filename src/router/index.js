import { createRouter, createWebHistory } from 'vue-router';
import BlogHome from '@/components/BlogHome.vue';
import PostDetail from '@/components/PostDetail.vue';
import BlogEditor from '@/components/BlogEditor.vue';


const routes = [
  {
    path: '/',
    name: 'blog',
    component: BlogHome
  },
  {
    path: '/post/:id',
    name: 'post detail',
    component: PostDetail,
    props: true
  },
  {
    path: '/editor',
    name: 'editor',
    component: BlogEditor,
    props:
    {
      blogData: {
        "id": 1,
        "title": "Godot, a reliable alternative to Unity",
        "author": "Francesco",
        "date": "2024-06-16",
        "previewImg": "/data/godot_logo.png",
        "content": [
          {
            "tag": "h2",
            "content": "What is Godot?"
          },
          {
            "tag": "img",
            "content": "/data/godot_logo.png",
            "width": 300
          },
          {
            "tag": "br"
          },
          {
            "tag": "p",
            "content": "Godot is a lightweight game engine you can use to create 2D or 3D games"
          },
          {
            "tag": "a",
            "content": "here you can se a showcase of games made using Godot",
            "href": "https://godotengine.org/showcase/"
          },
          {
            "tag": "br"
          },

          {
            "tag": "h2",
            "content": "Example use case"
          },
          {
            "tag": "p",
            "content": "In the following image we can se an example made in godot"
          },
          {
            "tag": "img",
            "content": "/data/example.png",
            "width": "400"
          }
        ]
      },
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
