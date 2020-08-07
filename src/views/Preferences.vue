<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">{{ $t('preferences.myPreferences') }}</h3>
                </div>
              </div>
            </div>

            <language-component></language-component>
            
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Language from '../components/Preferences/Language';

export default {
  components: {
    'language-component': Language
  }
}
</script>
