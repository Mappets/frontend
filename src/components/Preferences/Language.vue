<template>
  <div>
    <h6 class="heading-small text-muted mb-4">{{ $t('preferences.language') }}</h6>
    <div class="pl-lg-4">
      <div class="row">
        <div class="col-lg-12">
          <select class="form-control" v-model="model.language" @change.prevent="update">
            <option value="pt-br">{{ $t('preferences.portuguese') }}</option>
            <option value="en">{{ $t('preferences.english') }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/locales/i18n";

export default {
  data() {
    return {
      model: {
        language: ""
      },
      selected: ""
    };
  },
  methods: {
    update() {
      // Save the preference into local storage
      localStorage.setItem("preferenceLanguage", this.model.language);

      // Get the preference inside local storage
      this.getPreferenceLanguage();
    },
    getPreferenceLanguage() {
      let language = localStorage.getItem("preferenceLanguage");

      if (language) {
        i18n.locale = language;
        this.model.language = language;
      } else {
        this.model.language = i18n.locale;
      }
    }
  },
  created() {
    this.getPreferenceLanguage();
  }
};
</script>