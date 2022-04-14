<template>
  <section
    class="flex flex-col justicy-center items-center w-auto my-14"
    data-aos="zoom-in"
  >
    <h1 class="flex justify-center text-2xl font-bold text-gray-800 space-x-2">
      <section>About</section>
      <section class="text-secondary">Me.</section>
    </h1>
    <p class="flex justify-center text-center w-96 px-4">
      I am a {{ getCurrentAge() }} graduate student studying ICT & Software
      Engineering at Fontys University of Applied Sciences and working part-time
      as a software developer. I really enjoy building apps and learning new
      things.
    </p>
    <a
      class="flex flex-col items-center text-3xl text-secondary mt-6 animate-bounce cursor-pointer"
      onclick="document.getElementById('resume').scrollIntoView();"
    >
      <fa :icon="['fas', 'chevron-down']" />
    </a>
  </section>
</template>

<script>
export default {
  methods: {
    getCurrentAge() {
      const ageDiff = Date.now() - new Date('01/10/2001')
      const ageDate = new Date(ageDiff)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    },
  },
}
</script>
