<template>
  <div class="list-view">
    <div class="list-view__header-upper">
      <h2>Länder, Regionen, Orte</h2>
      <a class="list-view__all-countries" href="#">Alle</a>
    </div>
    <p>Lorem Ipsum Länder, Regionen, Orte</p>
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

  .list-view__header-upper{
    display: inline-flex;
    justify-content: space-between;
    align-items: baseline;

  }

  .list-view__all-countries {
    color: var(--primary);
  }

  .list-view__all-countries:link {
    text-decoration: none;
  }

</style>
