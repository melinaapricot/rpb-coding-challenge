<template>
  <div class="list-view">
    <div class="header-wrapper">
      <h2>Länder, Regionen, Orte</h2>
      <a class="all-countries" href="#">Alle</a>
    </div>
    <p>Lorem Ipsum Länder, Regionen, Orte</p>

    <div class="card-list">
      <div class="card-overlay"/>
      <DestinationCard v-for="destination of destinations" :key="destination.text" :destination="destination"/>
    </div>
  </div>
</template>

<script>
import DestinationCard from "./DestinationCard";
import DataProvider from "../io/DataProvider";

export default {
  name: 'DestinationListView',
  components: {
    DestinationCard,
  },
  data() {
    return {
      destinations: [],
      error: "",
    };
  },
  mounted() {
    const provider = new DataProvider();
    provider.fetchData()
        .then(data => this.destinations = data)
        .catch(() => this.error = "Could not fetch destination data")
  }
}
</script>

<style scoped>
.list-view {
  margin-left: 19px;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;


}

.all-countries {
  color: var(--primary);
}

.all-countries:link {
  text-decoration: none;
}

.card-list {
  overflow: auto;
  display: flex;
  padding-right: 16px;
  gap: 23px;
}

.card-overlay {
  position: absolute;
  right: 0;
  background: linear-gradient(to left, white, transparent);
  z-index: 5;
  height: 100%;
  width: 22px
}
</style>
