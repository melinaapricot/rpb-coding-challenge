<template>
  <div>Hello this is DestinationListView Component
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
