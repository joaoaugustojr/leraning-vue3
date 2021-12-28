<template>
  <list-quotes :quotes="quotes" :listen-quotes="listenQuotes" @unlisten="onUnlisten"></list-quotes>
  <cite>Refresh in <b>{{updateTime}}s</b></cite>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue';
import api from '@/services/api'
import ListQuotes from './ListQuotes.vue'

// Consts
const TIME = 30;

export default {
  components: { ListQuotes },

  props: {
    listenQuotes: {
      type: Array,
      required: true
    }
  },

  emits: ['unlisten'],

  setup(props, {emit}) {
    const interval = ref(null);
    const quotes = ref({});
    const updateTime = ref(TIME);

    const methods = reactive({
      onUnlisten: (code) => {
        emit('unlisten', code)
      },

      restartInterval: () => {
        clearInterval(interval.value);
        updateTime.value = TIME;
        interval.value = setInterval(() => {
          updateTime.value -= 1;

          if (updateTime.value === 0) {
            updateTime.value = TIME;
            methods.refresh();
          }
        }, 1000);
      },

      refresh: async () => {
        const {data} = await api.listen(props.listenQuotes);
        quotes.value = data;
      }
    });

    onMounted(() => {
      methods.refresh();
      methods.restartInterval();
    });

    onUnmounted(() => {
      clearInterval(interval.value);
    });

    watch(props, () => {
      methods.refresh();
      methods.restartInterval();
    })

    return {
      ... toRefs(methods),
      quotes,
      updateTime
    }
  }
}
</script>
