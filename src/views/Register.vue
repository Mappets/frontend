<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <!-- <div class="card-header bg-transparent pb-5">
                    <div class="text-muted text-center mt-2 mb-3">
                        <small>Sign up with</small>
                    </div>
                    <div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                            <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                            <span class="btn-inner--text">Google</span>
                        </a>
                    </div>
                </div> -->
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>{{ $t('login.signWithCredentials') }}</small>
                    </div>
                    <form role="form">

                        <base-input class="input-group-alternative mb-3"
                                    :placeholder="$t('register.name')"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.name">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                   :placeholder="$t('register.email')"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    :placeholder="$t('register.password')"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    :placeholder="$t('register.phone', 'Phone')"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.phone">
                        </base-input>

                        <div class="text-muted font-italic">
                            <small>password strength: <span class="text-success font-weight-700">strong</span></small>
                        </div>

                        <div class="row my-4">
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                </base-checkbox>
                            </div>
                        </div>
                        <div class="text-center">
                            <base-button @click="register()" type="primary" class="my-4">{{ $t("register.register") }}</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Forgot password?</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
      return {
        model: {
          name: 'Pedrao',
          email: 'pedrao6@gmail.com',
          password: '123456789',
          phone: '123123333'
        }
      }
    },
    methods: {
      register(){
        this.$api.register({
          "name": this.model.name,
          "email": this.model.email,
          "password":this.model.password,
          'phone': this.model.phone
          })
          .then(response => {
            console.log(response);
            if(response.status == 201){
              this.$notifications.notify([{ message: response.data.message, type: 'success', timeout: 10000, verticalAlign: 'bottom',  horizontalAlign: 'center', closeOnClick: false, showClose: false}]);
              setTimeout(function(){
                this.$router.push({ name: 'login'});
              },2000);
            }
          })
          .catch(error =>{
            this.$notifications.notify([{ message: 'Houve algum problema', type: 'warning', timeout: 10000, verticalAlign: 'bottom',  horizontalAlign: 'left', closeOnClick: false, showClose: false}]);
          });
      }
    }
  }
</script>
<style>
</style>
