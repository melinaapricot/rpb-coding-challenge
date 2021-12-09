<template>
  <div id="app">
    <DestinationListView :dataProvider="dataProvider"/>
  </div>
</template>

<script>
  import DestinationListView from './components/DestinationListView.vue'
  import DataProvider from "./io/DataProvider";

  export default {
    name: 'App',
    components: {
      DestinationListView,
    },
    data() {
      return {
        dataProvider: new DataProvider()
      }
    }
  }
</script>

<style lang="css">
  @import './main.css';
</style>
