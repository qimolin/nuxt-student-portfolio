<template>
  <div>
    <h3 class="font-bold text-secondary">{{ universityName }}</h3>
    <h3 class="font-bold">{{ major }}</h3>
    <h3 class="italic">{{ startDate }} - {{ endDate }}</h3>
    <h3 class="italic">{{ location }}</h3>
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
    universityName: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    location: {
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
