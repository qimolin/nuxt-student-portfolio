<template>
  <div class="flex flex-col h-screen">
    <NavComponent />
    <div class="flex bg-primary">
      <section
        class="sm:flex sm:items-center sm:justify-center sm:flex-grow w-full"
      >
        <div class="px-4 mt-20 mb-20" data-aos="zoom-in">
          <h1
            class="flex sm:block justify-center text-center text-lg sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-2"
          >
            Hello! I am Qi Mo
          </h1>
          <p
            class="flex sm:block justify-center text-center text-base sm:text-xl lg:text-xl text-gray-100"
          >
            Software developer based in The Netherlands
          </p>

          <div class="block text-center space-x-2">
            <button
              class="p-2 sm:p-3 mt-3 text-bold text-sm lg:text-base uppercase bg-secondary text-gray-100 rounded-2xl hover:opacity-90"
              onclick="document.getElementById('contact').scrollIntoView();"
            >
              Contact me
            </button>
          </div>
        </div>
      </section>
    </div>
    <AboutMe />
    <ResumeComponent id="resume" />
    <WebsiteFooter />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Arimo', sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
