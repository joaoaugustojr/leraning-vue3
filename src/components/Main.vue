<template>
  <div class="container">
    <div class="card">
      <div class="header">
        <h4>Listen to</h4>
      </div>
      <div class="body">
        <watch-list-quotes></watch-list-quotes>
      </div>
    </div>
    <div class="card">
      <div class="header">
        <h4>All Currences</h4>
      </div>
      <div class="body">
        <list-quotes :quotes="quotes"></list-quotes>
      </div>
    </div>
  </div>
</template>

<script>
// Imports
import { onMounted, reactive, toRefs } from 'vue';
import api from '@/services/api'
import ListQuotes from './ListQuotes.vue';
import WatchListQuotes from './WatchListQuotes.vue';

export default {
  components: { ListQuotes, WatchListQuotes },

  setup() {
    // Our configs
    const data = reactive({
      quotes: {},
      listenQuotes: [],
    });

    // or methods
    onMounted(async () => {
      const response = await api.all();
      data.quotes = response.data;
    });

    return {
      ... toRefs(data)
    }
  }
}
</script>
