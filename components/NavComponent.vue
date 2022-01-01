<template>
  <nav>
    <div
      class="
        flex
        justify-between
        items-center
        px-4
        sm:px-8
        md:px-16
        lg:px-24
        py-10
      "
    >
      <div>
        <NuxtLink to="/" class="text-gray-800 text-xl font-bold">
          <span>Qi Mo Lin</span>
        </NuxtLink>
      </div>
      <div class="space-x-6 sm:space-x-10 text-base sm:text-lg text-secondary">
        <a class="cursor-pointer" onclick="document.getElementById('projects').scrollIntoView();">
          <span>Projects</span>
        </a>
        <a class="cursor-pointer" onclick="document.getElementById('contact').scrollIntoView();">
          <span>Contact</span>
        </a>
      </div>
    </div>
  </nav>
</template>