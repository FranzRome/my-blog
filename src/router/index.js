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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
