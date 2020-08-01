<template>
  <base-nav class="navbar-top navbar-dark" id="navbar-main" :show-toggle-button="false" expand>
    <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <div class="form-group mb-0">
        <base-input
          placeholder="Search"
          class="input-group-alternative"
          alternative
          addon-right-icon="fas fa-search"
        ></base-input>
      </div>
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div class="media align-items-center" slot="title">
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg" />
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">Jessica Jones</span>
            </div>
          </div>

          <template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">{{ $t('mappets') }}</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>{{ $t('navbarDropdown.myProfile') }}</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/" class="dropdown-item"
                @click.native="logout()"
                    >
              <i class="ni ni-user-run"></i>
              <span>{{ $t('navbarDropdown.signOut') }}</span>
            </router-link>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: true,
      showMenu: false,
      searchQuery: ""
    };
  },
  beforeCreate(){
    this.$notifications.notify(
      [
        // Fazer notificações: valor apenas message é exigido
        // { message: 'Notification test', overlap: true, verticalAlign: 'top', horizontalAlign: 'right', type: 'success', timeout: 5000, closeOnClick: true, showClose: true},
        // { message: 'Notification success', overlap: true, verticalAlign: 'top', horizontalAlign: 'right', type: 'success', timeout: 3000, closeOnClick: true, showClose: true},
        // { message: 'Notification warning', overlap: false, verticalAlign: 'top', horizontalAlign: 'right', type: 'warning', timeout: 4000, closeOnClick: true, showClose: true},
        // { message: 'Notification Danger', overlap: false, verticalAlign: 'top', horizontalAlign: 'center', type: 'danger', timeout: 5000, closeOnClick: true, showClose: true},
        // { message: 'Notification Info', overlap: false, verticalAlign: 'bottom', horizontalAlign: 'center', type: 'info', timeout: 6000, closeOnClick: true, showClose: true}
      ]
      );
  },
  methods: {
    logout(){
      this.$session.destroy();
        this.$notifications.notify([{ message: 'Vamos sentir saudades! <3', type: 'success', timeout: 10000, verticalAlign: 'bottom',  horizontalAlign: 'left', closeOnClick: false, showClose: false}]);
        this.$router.push({ name: 'login'});
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
