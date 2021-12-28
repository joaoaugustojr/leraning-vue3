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
          <button type="button">
            <i class="fas fa-plus"></i>
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
      required: true,
    }
  }
}
</script>
