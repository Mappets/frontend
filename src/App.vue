<template>
  <div id="app">
    <header-component />
    <sidebar-component />
    <footer-component />
    <div class="main">
      <router-view />
    </div>
    <teste />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
export default {
  name: 'App',
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'sidebar-component': Sidebar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
