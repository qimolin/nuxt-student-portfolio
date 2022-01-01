<template>
  <div>
    <div class="pb-4 px-2 pt-8 sm:px-8 md:px-14 lg:px-22 bg-primary">
      <!-- <div class="flex justify-center">
        <ContactMe id="contact"/>
      </div> -->
      <div class="flex justify-between items-center">
        <div class="flex justify-center items-center space-x-2">
          <p class="text-md text-gray-100">All rights reserved</p>
          <fa class="text-lg text-gray-100" :icon="['fas', 'copyright']" />
          <p class="text-md text-gray-100">{{ new Date().getFullYear() }}</p>
        </div>
        <div class="space-x-3">
          <a
            class="text-xl text-gray-100"
            href="https://www.linkedin.com/in/qi-mo-lin/"
          >
            <fa :icon="['fab', 'linkedin']" />
          </a>
          <a class="text-xl text-gray-100" href="https://github.com/qimolin">
            <fa :icon="['fab', 'github']" />
          </a>
          <a
            class="text-xl text-gray-100"
            href="https://www.instagram.com/qimo.lin/"
          >
            <fa :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>