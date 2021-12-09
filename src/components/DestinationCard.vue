<template>
  <div>
    <div v-for="destination of destinations" class="card" :key="destination.title">
      <img class="card__img" :src="destination.image" alt="Photograph of the destination">
      <div class="card__description">
        <p class="card__description--destination">{{destination.text}}</p>
        <p class="card__description--price"><span>ab </span>{{destination.price}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import DataProvider from "../io/DataProvider";

  export default {
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

<style lang="css">
  .card {
    display: inline-flex;
    flex-direction: column;
  }

  .card__img {
    border-radius: 15px;
    object-fit: cover;
    width: 287px;
    height: 177px;
  }
  .card__description {
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  .card__description--destination {
    color: var(--primary);
  }
  .card__description--price {
    color: var(--purple);
  }
  .card__description--price span {
    font-size: 12px;
  }

</style>