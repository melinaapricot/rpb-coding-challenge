<template>
  <div id="app">
    <DestinationListView/>
  </div>
</template>

<script>
  import DestinationListView from './components/DestinationListView.vue'

  export default {
    name: 'App',
    components: {
      DestinationListView,
    }
  }
</script>

<style lang="css">
  @import './main.css';
</style>
