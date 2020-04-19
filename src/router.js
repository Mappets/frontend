import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Dashboard.vue")
        },
        {
          path: "/blank",
          name: "blank",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Blank.vue")
        },
        {
          path: "/pets",
          name: "pets",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/UserPet/List.vue")
        },
        {
          path: "/pets/new",
          name: "new pet",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/UserPet/Create.vue")
        },
        {
          path: "/user/organizations",
          name: "user organizations",
          component: () =>
            import(
              /* webpackChunkName: "demo" */ "./views/UserOrganization/List.vue"
            )
        },
        {
          path: "/organizations",
          name: "organizations",
          component: () =>
            import(
              /* webpackChunkName: "demo" */ "./views/Organization/List.vue"
            )
        },
        {
          path: "/organizations/new",
          name: "new organization",
          component: () =>
            import(
              /* webpackChunkName: "demo" */ "./views/UserOrganization/Create.vue"
            )
        },
        {
          path: "/users",
          name: "users",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/User/List.vue")
        },
        {
          path: "/preferences",
          name: "preferences",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Preference/Edit.vue")
        },
        {
          path: "/share",
          name: "share",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Share.vue")
        },
        {
          path: "/icons",
          name: "icons",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Icons.vue")
        },
        {
          path: "/profile",
          name: "profile",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/User/Edit.vue")
        },
        {
          path: "/map",
          name: "map",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Map/Show.vue")
        },
        {
          path: "/tables",
          name: "tables",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Tables.vue")
        }
      ]
    },
    {
      path: "/",
      redirect: "login",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Login.vue")
        },
        {
          path: "/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Register.vue")
        }
      ]
    }
  ]
});
