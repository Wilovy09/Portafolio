import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/HomePage.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: ()=> import('@/views/SkillsPage.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ()=> import('@/views/ProjectsPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('@/views/ContactPage.vue')
    },
    {
      path: '/pdf',
      name: 'CV',
      beforeEnter: (to, from, next) => {
        window.open('/Emiliano_Maldonado_CV.pdf', '_blank');
        next(false);
      },
      redirect: '/'
    },
    {
      path: '/notes',
      name: 'notas',
      component: ()=> import('@/views/NotesPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ()=> import('@/views/NotFoundPage.vue')
    }
  ]
})

export default router
