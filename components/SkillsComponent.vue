<template>
  <div class="flex items-center justify-between">
    <span>{{ name }}</span>
    <div class="flex items-center space-x-1 h-full mr-6">
      <svg
        v-for="(circle, i) in circles"
        :key="'A' + i"
        class="text-secondary"
        fill="currentColor"
        height="15"
        width="15"
      >
        <circle cx="6" cy="6" r="6"></circle>
      </svg>
      <svg
        v-for="(circle, i) in circlesLeft"
        :key="'B' + i"
        class="text-secondary"
        fill="none"
        stroke="currentColor"
        height="15"
        width="15"
      >
        <circle cx="6" cy="6" r="5.5"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    circles: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      circlesLeft: 5 - this.circles,
    }
  },
}
</script>
