<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="min-height: 100px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-10">
            <h1 class="display-2 text-white">Hello Jesse</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div>
        <social-sharing
          url="https://mappets.app/"
          title="Mappets"
          description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
          quote="Vue is a progressive framework for building user interfaces."
          hashtags="vuejs,javascript,framework"
          twitter-user="vuejs"
          inline-template
        >
          <div>
            <div class="row margin-bottom">
              <div class="col-xl-3 order-xl-1 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="email">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.google") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>

              <div class="col-xl-3 order-xl-2 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="facebook">
                            <i class="fab fa-facebook-square"></i>
                            {{ $t("brands.facebook") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>

              <div class="col-xl-3 order-xl-3 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="linkedin">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.linkedin") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>

              <div class="col-xl-3 order-xl-4 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="telegram">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.telegram") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>
            </div>
            <div class="row margin-bottom">
              <div class="col-xl-3 order-xl-5 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="twitter">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.twitter") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>

              <div class="col-xl-3 order-xl-6 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="whatsapp">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.whatsapp") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>

              <div class="col-xl-3 order-xl-7 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="skype">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.skype") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>

              <div class="col-xl-3 order-xl-8 card-button">
                <card class="box-shadow">
                  <div class="bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <h3 class="mb-0">
                          <network network="sms">
                            <font-awesome-icon icon="envelope-open" />
                            {{ $t("brands.sms") }}
                          </network>
                        </h3>
                      </div>
                    </div>
                  </div>
                </card>
              </div>
            </div>
          </div>
        </social-sharing>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

library.add({ faEnvelopeOpen });

export default {};
</script>

<style scoped>
.box-shadow {
  width: 100%;
  box-shadow: 2px 2px;
}
.margin-bottom {
  margin-bottom: 20px !important;
}
.card-button:hover {
  cursor: pointer;
}
</style>
