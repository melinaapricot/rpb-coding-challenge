<template>
  <div>
    <h1>Hello this is DestinationListView</h1>
    <p>This is a paragraph</p>
    <DestinationCard/>
  </div>
</template>

<script>
  import DestinationCard from "./DestinationCard";
  export default {
    name: 'DestinationListView',
    components: {
      DestinationCard,
    }
  }
</script>

<style>
</style>
