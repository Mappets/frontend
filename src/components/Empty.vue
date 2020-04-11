<template>
  <div class="container-fluid mt--7">
    <div class="row">
      <div class="col-xl-12 order-xl-1">
        <card shadow type="secondary">
          <div slot="header" class="bg-white border-0">
            <div class="row align-items-center">
              <div class="col-12 empty-box">
                <img class="empty-image" src="img/browser.svg" alt="Empty image" />
                <h1>{{ $t("empty.nothingToSeeHere") }}</h1>
                <p>{{ $t("empty.description") }}</p>
                <button
                  class="btn btn-success"
                  @click="goToPage"
                  v-if="activeButton == true"
                >{{ buttonText }}</button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["buttonText", "activeButton", "urlButton"],
  methods: {
    goToPage() {
      if (this.urlButton) {
        location.href = this.urlButton;
      }
    }
  }
};
</script>

<style scoped>
.empty-box {
  display: flex;
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.empty-image {
  width: 220px;
}
</style>
