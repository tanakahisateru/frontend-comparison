<template>
  <div>
    <button class="toggle-button" v-on:click="toggle" v-bind:class="{'on': shown, 'off': !shown}">Toggle</button>
    <div class="toggle-content" v-if="shown"><!-- style="display: none;" v-bind:style="{'display': null}" -->
      <p>Hello</p>
      <p>World</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'initiallyShown'
  ],
  data() {
    return {
      shown: this.initiallyShown
    }
  },
  methods: {
    toggle() {
      this.shown = !this.shown;
    }
  }
}
</script>