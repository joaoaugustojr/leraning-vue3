<template>
  <div class="container">
    <div class="card" v-if="listenQuotes.length > 0">
      <div class="header">
        <h4>Listen to</h4>
      </div>
      <div class="body">
        <watch-list-quotes :listen-quotes="listenQuotes" @unlisten="onUnlisten"></watch-list-quotes>
      </div>
    </div>
    <div class="card">
      <div class="header">
        <h4>All Currences</h4>
      </div>
      <div class="body">
        <list-quotes
          :quotes="quotes"
          :listen-quotes="listenQuotes"
          @listen="onListen"
          @unlisten="onUnlisten"
        ></list-quotes>
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

    // Get our data
    onMounted(async () => {
      const response = await api.all();
      data.quotes = response.data;
    });

    // Methods
    const onListen = (code) => {
      data.listenQuotes.push(code);
    };

    const onUnlisten = (code) => {
      data.listenQuotes = data.listenQuotes.filter((key) => key != code);
    };

    return {
      ... toRefs(data),
      onListen,
      onUnlisten
    }
  }
}
</script>
