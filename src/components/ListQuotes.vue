<template>
  <table>
    <thead>
      <tr>
        <th>Cód</th>
        <th>Name</th>
        <th>High</th>
        <th>Low</th>
        <th>Var %</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(quote, key) in quotes" :key="key">
        <td>{{key}}</td>
        <td>{{quote.name}}</td>
        <td>{{quote.high}}</td>
        <td>{{quote.low}}</td>
        <td>{{quote.pctChange}}</td>
        <td>
          <button
            type="button"
            v-if="!listenQuotes.includes(key)"
            @click="$emit('listen', key)"
            title="Add"
          >
            <i class="fas fa-plus"></i>
          </button>
          <button
            type="button"
            v-else
            @click="$emit('unlisten', key)"
            title="Remove"
          >
            <i class="fas fa-minus"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    quotes: {
      type: Object,
      required: true
    },
    listenQuotes: {
      type: Array,
      required: true
    }
  },

  emits: ['listen', 'unlisten']
}
</script>
