<template>
  <a class="card" :key="destination.text" :href="destination.link">
    <img class="img" :src="destination.image" :alt="'Photograph of destination ' + destination.text">
    <div class="description">
      <span class="destination">{{ destination.text }}</span>
      <div>
        <span class="price-from">ab </span>
        <span class="price">€ {{ destination.price }}</span>
      </div>
    </div>
  </a>
</template>

<script lang="js">
export default {
  props: {destination: Object}
}

</script>

<style scoped>
  .card {
    box-shadow: -2px 2px 0 var(--accent);
    border-radius: 15px;
    overflow: hidden;
    flex-shrink: 0;
    text-decoration: none;
  }

  .card:focus {
    box-shadow: -4px 4px 0 var(--secondary);
  }

  .img {
    object-fit: cover;
    width: 287px;
    height: 177px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  .destination {
    color: var(--primary);
    font-weight: bold;
  }

  .price {
    color: var(--secondary);
    font-weight: 600;
  }

  .price-from {
    color: var(--secondary);
    font-size: 0.75rem;
  }
</style>