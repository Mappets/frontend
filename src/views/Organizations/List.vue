<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <span class="mask bg-gradient-success opacity-8"></span>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">

        <div class="col-xl-4 order-xl-1 margin-above" v-for="org in organizations" :key="org.id">
          <card-list-component :item="org" :show-action-button="true"></card-list-component>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import CardList from '../../components/CardList.vue';

export default {
  components:{
    'card-list-component': CardList
  },
  data() {
    return {
      organizations: [
       {
           id: 1,
           name: "Petz",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
       },
       { 
           id: 2,
           name: "Petz",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
       },
       { 
           id: 3,
           name: "Petz",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
       },
       {
           id: 4,
           name: "Petz",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
       },
       { 
           id: 5,
           name: "Petz",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
       },
       { 
           id: 6,
           name: "Petz",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
       }       
      ],
      model: {
        //
      }
    }
  },
  created () {
    //
  }
};
</script>
<style scoped>
.margin-above{margin-bottom: 20px;}
</style>
