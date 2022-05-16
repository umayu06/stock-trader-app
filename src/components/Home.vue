<template>
  <div class="homeContainer">
    <h1>Trade or View your Portfolio</h1>
    <h4>You may Save & Load your Data</h4>
    <h4>Click on 'End Day' to begin a New Day</h4>
    <hr />
    <p>Your Funds {{ funds }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['funds']),
  },
};
</script>

<style scoped>
.homeContainer {
   margin-left: 30px;
  margin-right: 30px;
}
</style>
