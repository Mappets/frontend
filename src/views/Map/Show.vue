<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-12 col-lg-12">
          <form
            class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
          >
            <div class="form-group mb-0">
              <base-input
                placeholder="Search"
                class="input-group-alternative"
                alternative
                addon-right-icon="fas fa-search"
              ></base-input>
            </div>
          </form>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <div class="card shadow border-0">
            <GmapMap
              :center="{ lat: -19.7755238, lng: -43.8577682 }"
              :zoom="7"
              map-type-id="terrain"
              style="width: 100%; height: 500px"
            >
              <!-- <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />-->
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.full-content {
  width: 100% !important;
}
</style>
