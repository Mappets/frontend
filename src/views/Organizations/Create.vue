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
          <div class="col-lg-12 col-md-12">
            <h1 class="display-2 text-white">
              {{ $t("organizations.newOrganization") }}
            </h1>
            <p class="text-white mt-0 mb-5">
              {{ $t("organizations.description") }}
            </p>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">
                    {{ $t("organizations.newOrganization") }}
                  </h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Name"
                        placeholder="Name"
                        input-classes="form-control-alternative"
                        v-model="$v.model.name.$model"
                      />
                      <span class="error" v-if="!$v.model.name.required">
                        {{ $t("validations.required") }}
                      </span>
                      <span class="error" v-if="!$v.model.name.minLength">
                        {{ $t("validations.min") }}
                      </span>
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Email address"
                        placeholder="mappets@example.com"
                        input-classes="form-control-alternative"
                        v-model="model.email"
                      />
                      <span class="error" v-if="!$v.model.name.required">
                        {{ $t("validations.required") }}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Phone"
                        placeholder="Phone"
                        input-classes="form-control-alternative"
                        v-model="model.phone"
                      />
                      <span class="error" v-if="!$v.model.name.required">
                        {{ $t("validations.required") }}
                      </span>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Categoria</label>
                        <select class="form-control" v-model="model.category">
                          <option value="1">Ong</option>
                          <option value="2">Pet shop</option>
                          <option value="3">Casa de ração</option>
                        </select>
                      </div>
                      <span class="error" v-if="!$v.model.name.required">
                        {{ $t("validations.required") }}
                      </span>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">About</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input alternative="" label="About">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="A few words about your organization..."
                        v-model="model.about"
                      >
                      </textarea>
                    </base-input>
                    <span class="error" v-if="!$v.model.name.required">
                      {{ $t("validations.required") }}
                    </span>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative=""
                        label="Address"
                        placeholder="Home Address"
                        input-classes="form-control-alternative"
                        v-model="model.address"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="City"
                        placeholder="City"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Country"
                        placeholder="Country"
                        input-classes="form-control-alternative"
                        v-model="model.country"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Postal code"
                        placeholder="Postal code"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>
                  </div>
                </div>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-success"
                        type="button"
                        @click="update"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../services/api";
import { ORGANIZATIONS } from "../../utils/webServices";
import { OK, CREATED } from "../../utils/httpStatusCodes";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      errors: false,
      empty: true,
      model: {
        name: "",
        email: "",
        phone: "",
        about: "",
        address: "",
        city: "",
        country: "",
        zipCode: ""
      }
    };
  },
  validations: {
    model: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: { required },
      phone: { required },
      category: { required },
      about: { required }
    }
  },
  methods: {
    loadCategories() {
      //
    },
    update() {
      this.formTouched = !this.$v.model.$anyDirty;
      this.errors = this.$v.model.$anyError;

      if (this.errors === false && this.formTouched === false) {
        HTTP.post(ORGANIZATIONS, {
          name: this.model.name,
          description: this.model.about,
          email: this.model.email,
          phone: this.model.phone,
          category_id: this.model.category
        })
          .then(response => {
            this.isLoading = true;
            if (response.status == CREATED) {
              this.organizations = response.data;
            }
          })
          .catch(error => {
            this.isLoading = false;
            console.log(error);
          });
      } else {
        this.showErrorToast();
        this.isLoading = false;
      }
    },
    showErrorToast() {
      this.$breadstick.notify(
        `{{ $t('validations.verifyAllValidationErrors')}}`
      );
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
