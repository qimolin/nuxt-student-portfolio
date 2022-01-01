<template>
  <div>
    <h3 class="font-bold text-secondary">{{ jobRole }}</h3>
    <h3 class="font-bold">{{ companyName }}</h3>
    <h3 class="italic">{{ startDate }} - {{ endDate }}</h3>
    <ul>
      <li
        v-for="bulletPoint in bulletPoints"
        :key="bulletPoint"
        class="list-disc"
      >
        {{ bulletPoint }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    jobRole: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    bulletPoints: {
      type: Array,
      required: true,
    },
  },
}
</script>