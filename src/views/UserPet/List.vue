<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      loader="bars"
      color="#41B883"
    ></loading>

    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="min-height: 100px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row" v-if="!pets.length == 0">
          <div class="col-lg-12 col-md-12">
            <h1 class="display-2 text-white">{{ $t("pets.myPets") }}</h1>
            <p class="text-white mt-0 mb-5">{{ $t("pets.description") }}</p>
            <router-link to="/pets/new" class="btn btn-info">{{ $t("pets.newPet") }}</router-link>
          </div>
        </div>
      </div>
    </base-header>

    <div v-if="pets.length == 0">
      <empty-component
        :button-text="$t('empty.goToPetsPage')"
        :activeButton="true"
        urlButton="/pets"
      ></empty-component>
    </div>
    <div class="container-fluid mt--7" v-else>
      <div class="row">
        <div class="col-xl-4 order-xl-1 margin-above" v-for="pet in pets" :key="pet.id">
          <card-list-component :item="pet" :show-action-button="true"></card-list-component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardList from "../../components/CardList.vue";
import Empty from "../../components/Empty.vue";
import { HTTP } from "../../services/api";
import { PETS } from "../../utils/webServices";
import { OK } from "../../utils/httpStatusCodes";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    "card-list-component": CardList,
    "empty-component": Empty,
    Loading
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      pets: []
    };
  },
  created() {
    this.loadPets();
  },
  methods: {
    loadPets() {
      HTTP.get(PETS)
        .then(response => {
          this.isLoading = false;
          if (response.status == OK) {
            this.pets = response.data;
          }
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error.response);
          console.log(error.response.status);
          this.errors.push(error);
        });
    }
  }
};
</script>
<style scoped>
.margin-above {
  margin-bottom: 20px;
}
.align-right {
  text-align: right !important;
}
</style>
