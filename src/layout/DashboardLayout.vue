<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
      <template slot="links">
        <sidebar-item :link="{name: $t('sidebar.dashboard'), icon: 'ni ni-spaceship text-green', path: '/dashboard' }" />
        <sidebar-item :link="{name: $t('sidebar.map'), icon: 'ni ni-pin-3 text-green', path: '/map' }" />
        <sidebar-item :link="{name: $t('sidebar.organizations') , icon: 'ni ni-building text-green', path: '/organizations'}" />
        <sidebar-item :link="{name: $t('sidebar.pets'), icon: 'ni ni-planet text-green', path: '/pets'}" />
        <sidebar-item :link="{name: $t('sidebar.users'), icon: 'ni ni-single-02 text-green', path: '/users'}" />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "green" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>

<style lang="scss">
</style>
