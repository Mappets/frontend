<template>
  <div>
    <h1 v-if="githubData.login != null">{{ githubData.login }}</h1>
    <h1 v-if="githubData.id != null">{{ githubData.id }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: [
    //
  ],
  data () {
    return {
      githubData: null
    }
  },
  methods: {
    update () {
      axios
        .get('https://api.github.com/users/mappets')
        .then(response => {
          this.githubData = response.data
          console.log(this.githubData)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    //
  },
  created () {
    this.update()
    //
  }
}
</script>

<style scoped></style>
