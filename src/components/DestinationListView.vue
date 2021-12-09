<template>
  <div class="list-view">
    <div class="header-wrapper">
      <h2>Länder, Regionen, Orte</h2>
      <a
          class="all-destinations"
          href="https://github.com/melinaapricot/rpb-coding-challenge"
          target="_blank"
          rel="noreferrer">
        Alle
      </a>
    </div>
    <p class="description">Lorem Ipsum Länder, Regionen, Orte</p>

    <div v-if="!error" class="card-overlay-wrapper">
      <div class="card-overlay"/>
      <div class="card-list">
        <DestinationCard v-for="destination of destinations" :key="destination.text" :destination="destination"/>
      </div>
    </div>
    <div v-else class="error-message">{{error}}</div>
  </div>
</template>

<script>
import DestinationCard from "./DestinationCard";

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
  props: {
    dataProvider: Object
  },
  mounted() {
    this.dataProvider
        .fetchData()
        .then(data => this.destinations = data)
        .catch(() => this.error = "Could not fetch destination data :(");
  }
}
</script>

<style scoped>
  .list-view {
    margin-top: 19px;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-right: 23px;
    margin-left: 19px;
  }

  .description {
    margin-left: 19px;
  }

  .all-destinations {
    color: var(--primary);
    margin-left: 44px;
  }

  .all-destinations:link {
    text-decoration: none;
  }

  .card-list {
    overflow: auto;
    display: flex;
    gap: 23px;
    padding: 16px 16px 16px 19px;
    margin-top: 9px;
  }

  .card-overlay-wrapper {
    position: relative;
  }

  .card-overlay {
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(to left, var(--white), transparent);
    z-index: 5;
    height: 100%;
    width: 22px
  }

  .error-message {
    color: red;
    margin: 24px;
  }
</style>
