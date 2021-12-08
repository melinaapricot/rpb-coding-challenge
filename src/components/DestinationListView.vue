<template>
  <div>
    <h2>Hello this is DestinationListView</h2>
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
