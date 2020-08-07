<template>
  <card shadow type="secondary">
    <div slot="header" class="bg-white border-0">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">{{item.name}}</h3>
        </div>
        <div class="col-4 text-right" v-if="showActionButton">
          <a href="#!" class="btn btn-sm">
            <i class="ni ni-settings text-green"></i>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="col-md-12">
        <p>{{item.description}}</p>
      </div>
    </div>
  </card>
</template>

<script>
export default {
    props: [
        'item',
        'showActionButton'
    ]
};
</script>