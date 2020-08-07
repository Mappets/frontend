import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [{
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [{
          path: '/login',
          name: 'login',
          component: () => import( /* webpackChunkName: "demo" */ './views/Login.vue'),
          meta: {
            guest: true
          }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import( /* webpackChunkName: "demo" */ './views/Register.vue'),
          meta: {
            guest: true
          }
        }
      ]
    },
    {
      path: '/darshboard',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [{
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "demo" */ './views/Dashboard.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/blank',
          name: 'blank',
          component: () => import( /* webpackChunkName: "demo" */ './views/Blank.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/pets',
          name: 'pets',
          component: () => import( /* webpackChunkName: "demo" */ './views/Pets.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/organizations',
          name: 'organizations-list',
          component: () => import( /* webpackChunkName: "demo" */ './views/Organizations/List.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/organizations/new',
          name: 'organizations',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/Organizations.vue')
        },
        {
          path: '/users',
          name: 'users',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/Users.vue')
        },
        {
          path: '/preferences',
          name: 'preferences',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/Preferences.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/map',
          name: 'map',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/Map.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          meta: {
            requiresAuth: true
          },
          component: () => import( /* webpackChunkName: "demo" */ './views/Tables.vue')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var session = JSON.parse(localStorage.getItem('vue-session-key'));
    if (!session) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      // let user = JSON.parse(localStorage.getItem('user'))
      session.token;
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({
            name: 'dashboard'
          })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    var session = JSON.parse(localStorage.getItem('vue-session-key'))
    if (!session) {
      next()
    } else {
      next({
        name: 'dashboard'
      })
    }
  } else {
    next()
  }
});
export default router;
