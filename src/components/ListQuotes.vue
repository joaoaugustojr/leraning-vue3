<template>
  <section class="quotesContainer">
    <transition-group name="list" tag="div" class="content">
      <div class="card quotes" v-for="(quote, key) in quotes" :key="key">
        <div class="head">
          <span class="title">{{quote.name}}</span>
          <hr>
        </div>
        <div class="body">
          <div class="code">
            <span title="Code">{{key}}</span>
          </div>
          <div class="values">
            <span><small>High</small>{{quote.high}}</span>
            <span><small>Low</small>{{quote.low}}</span>
          </div>
          <div class="percentage" :class="{'high': quote.pctChange > 0, 'low': quote.pctChange < 0}">
            <b>{{quote.pctChange}}</b>%
          </div>
          <div class="action">
            <button
              type="button"
              v-if="!listenQuotes.includes(key)"
              @click="$emit('listen', key)"
              title="Add"
            >
                <i class="fas fa-plus"></i>
            </button>
            <button
              class="remove"
              type="button"
              v-if="listenQuotes.includes(key)"
              @click="$emit('unlisten', key)"
              title="Remove"
            >
                <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </transition-group>
  </section>
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
