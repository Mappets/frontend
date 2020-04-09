<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}
          <a href="" class="font-weight-bold ml-1" target="_blank">{{
            $t("footer.mappets")
          }}</a>
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-xl-end"
        >
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">{{
              $t("footer.mappets")
            }}</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">{{
              $t("footer.aboutUs")
            }}</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">{{
              $t("footer.openSource")
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
