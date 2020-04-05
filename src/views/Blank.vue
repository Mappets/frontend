<template>
  <div>
    <loading
      :active.sync="isLoading"
      :is-full-page="fullPage"
      :loader="loader"
      :color="color"
    ></loading>
    <div>
      <p>Blank page</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as webservices from '../utils/webServices'

export default {
  props: [
    //
  ],
  data () {
    return {
      isLoading: false,
      fullPage: true,
      loader: "dots",
      color: "#007bff",
    }
  },
  methods: {
    update () {
      //
    }
  },
  mounted () {
    //
  },
  created () {
    //
  }
}
</script>
