import { createRouter, createWebHashHistory } from 'vue-router';
import Intro from "../view/base/Intro.vue"
import forestTown from "../view/town/forestTown.vue"

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/Intro'
  },
  {
    path: '/index',
    name: 'index',
    meta: {title: '阿拉德的早晨真清爽'},
    redirect: '/Intro',
  },
  { path: '/Intro', component: Intro },
  {
    path: '/forestTown',
    name: 'forestTown',
    component: forestTown
  },
];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
});

export default router;