<template></template>

<script>
import Vue from "vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);

export default {
  props: [
    //
  ],
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
        {
          href: "/charts",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  created() {
    console.log("Component created.");
  }
};
</script>
