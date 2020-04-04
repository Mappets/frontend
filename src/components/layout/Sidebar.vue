<template>
  <div class="sidebar">
      <router-link to="/"> <font-awesome-icon icon="user-secret" />Dashboard</router-link>
      <router-link to="/"> <font-awesome-icon-brand icon="building" />Organizations</router-link>
      <router-link to="/">Pets</router-link>
      <router-link to="/">Users</router-link>
  </div>
</template>

<script>
export default {
  props: [
    //
  ],
  data () {
    return {
      //
    }
  },
  mounted () {
    // console.log("Component mounted.")
  },
  created () {
    // console.log("Component created.")
  }
}
</script>

<style>
.sidebar{
  display: flex;
  flex-direction: column;
  width: 10%;
  background: #42B983;
}
.sidebar a {
  padding: 20px;
  background: white;
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #42B983;
  transition: width 0.8s;
}
.sidebar a:hover {
  padding: 20px;
  background: #42B983;
  display: block;
  width: 200px;
  text-align: center;
  text-decoration: none;
  color: white;
}
</style>
