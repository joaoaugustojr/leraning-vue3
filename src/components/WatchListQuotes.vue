<template>
  <list-quotes :quotes="quotes"></list-quotes>
  <cite>Refresh in <b>{{updateTime}}s</b></cite>
</template>

<script>
import { ref } from 'vue';
import ListQuotes from './ListQuotes.vue'

export default {
  components: { ListQuotes },

  setup() {
    const quotes = ref({});
    const updateTime = ref(30);

    return {
      quotes,
      updateTime
    }
  }
}
</script>
