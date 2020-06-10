<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>{{ $t("register.signUpWith") }}</small>
          </div>
          <div class="btn-wrapper text-center">
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"
                ><img src="img/icons/common/facebook.svg"
              /></span>
              <span class="btn-inner--text">
                {{ $t("brands.facebook") }}
              </span>
            </a>
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"
                ><img src="img/icons/common/google.svg"
              /></span>
              <span class="btn-inner--text">
                {{ $t("brands.google") }}
              </span>
            </a>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>{{ $t("register.orSignUpWithCredentials") }}</small>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Name"
              addon-left-icon="ni ni-hat-3"
              v-model="model.name"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="Phone"
              addon-left-icon="ni ni-tablet-button"
              v-model="model.phone"
            >
            </base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            >
            </base-input>

            <div class="text-muted font-italic">
              <small
                >{{ $t("register.passwordStrength.passwordStrength") }}
                <span class="text-success font-weight-700">
                  {{ $t("register.passwordStrength.strong") }}
                </span></small
              >
            </div>

            <div class="row my-4">
              <div class="col-12">
                <base-checkbox class="custom-control-alternative">
                  <span class="text-muted"
                    >{{ $t("register.iAgreeWithThe") }}
                    <a href="#!">{{ $t("register.privacyPolicy") }}</a></span
                  >
                </base-checkbox>
              </div>
            </div>
            <div class="text-center">
              <base-button type="primary" class="my-4">{{
                $t("register.createAccount")
              }}</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>{{ $t("register.forgotPassword") }}</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" class="text-light">
            <small>{{ $t("register.loginIntoYourAccount") }}</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      model: {
        name: "",
        email: "",
        phone: "",
        password: ""
      }
    };
  }
};
</script>
<style></style>
