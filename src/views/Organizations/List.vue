<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      loader="bars"
      color="#41B883"
    ></loading>

    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <span class="mask bg-gradient-success opacity-8"></span>
    </base-header>

    <div class="container-fluid mt--7" v-if="organizations">
      <div class="row">
        <div
          class="col-xl-4 order-xl-1 margin-above"
          v-for="org in organizations"
          :key="org.id"
        >
          <card-list-component
            :item="org"
            :show-action-button="true"
          ></card-list-component>
        </div>
      </div>
    </div>
    <div v-else>
      <empty-component></empty-component>
    </div>
  </div>
</template>
<script>
import CardList from "../../components/CardList.vue";
import Empty from "../../components/Empty.vue";
import { HTTP } from "../../services/api";
import { ORGANIZATIONS } from "../../utils/webServices";
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
      organizations: []
    };
  },
  created() {
    HTTP.get(ORGANIZATIONS)
      .then(response => {
        this.isLoading = false;
        if (response.status == OK) {
          this.organizations = response.data;
        }
      })
      .catch(error => {
        console.log(error.response);
        console.log(error.response.status);
        this.errors.push(error);
      });
  }
};
</script>
<style scoped>
.margin-above {
  margin-bottom: 20px;
}
</style>
