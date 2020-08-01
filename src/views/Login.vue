<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent pb-5">
                        <div class="text-muted text-center mt-2 mb-3"><small>{{ $t('login.signInWith') }}</small></div>
                        <div class="btn-wrapper text-center">
                            <!-- <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                                <span class="btn-inner--text">Github</span>
                            </a> -->
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                                <span class="btn-inner--text">Google</span>
                            </a>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>{{ $t('login.signWithCredentials') }}</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        :placeholder="$t('login.usernamePlaceholder')"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        :placeholder="$t('login.passwordPlaceholder')"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">{{ $t('login.rememberMe') }}</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" @click="login()" class="my-4">{{ $t('login.signIn') }}</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

  export default {
    name: 'login',
    data() {
      return {
        model: {
          email: 'mateuslnobre@gmail.com', //deixar vazio para, preenchido apenas testes
          password: '123456789' //deixar vazio para, preenchido apenas testes
        }
      }
    },
    methods: {
      login () {
        this.$api.login({"email": this.model.email, "password":this.model.password})
            .then(response => {
              this.$session.start();
              this.$notifications.notify([{ message: 'Bem-vindo ao Mappets', type: 'success', timeout: 10000, verticalAlign: 'bottom',  horizontalAlign: 'left', closeOnClick: false, showClose: false}]);
              this.$session.set('token', response.data.access);
              this.$session.set('refresh', response.data.refresh);
              console.log(this.$session.getAll());
              this.$router.push({ name: 'dashboard'});

            })
            .catch(error => console.log(error))
      }
    },
  }
</script>
<style>
</style>
