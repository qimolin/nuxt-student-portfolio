<template>
  <form ref="form" class="w-2/3 sm:w-1/3">
    <h4 class="text-center text-2xl text-gray-100">Contact Me</h4>
    <div>
      <input
        v-model="full_name"
        class="
          w-full
          bg-gray-100
          text-gray-900
          mt-2
          p-3
          rounded-lg
          focus:outline-none focus:shadow-outline
        "
        type="text"
        placeholder="FULL NAME"
        required
      />
    </div>
    <div class="mt-4">
      <input
        v-model="email"
        class="
          w-full
          bg-gray-100
          text-gray-900
          mt-2
          p-3
          rounded-lg
          focus:outline-none focus:shadow-outline
        "
        type="text"
        placeholder="EMAIL"
        required
      />
    </div>
    <div class="mt-4">
      <textarea
        v-model="message"
        class="
          w-full
          h-32
          bg-gray-100
          text-gray-900
          mt-2
          p-2
          rounded-lg
          focus:outline-none focus:shadow-outline
        "
        type="text"
        placeholder="MESSAGE"
        required
      ></textarea>
    </div>
    <div class="my-4">
      <button
        class="
          uppercase
          text-sm
          font-bold
          tracking-wide
          bg-secondary
          text-gray-100
          p-3
          rounded-lg
          w-full
          focus:outline-none focus:shadow-outline
        "
        @click.prevent="sendMail"
      >
        Send Message
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      full_name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    async sendMail() {
      try {
        const response = await this.$axios.get('/api/contact')
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
      // const startTime = performance.now();

      // await this.$mail.send({
      //   from: this.full_name,
      //   subject: `Message from: ${this.full_name} (${this.email})`,
      //   text: this.message
      // }).then(() => {
      //   const endTime = performance.now();
      //   let timeDiff = endTime - startTime;
      //   timeDiff /= 1000;

      //   const seconds = Math.round(timeDiff);
      //   console.log(seconds + "seconds");
      // });
    },
  },
}
</script>