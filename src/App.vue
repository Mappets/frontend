<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
  }
};
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
