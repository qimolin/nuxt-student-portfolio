<template>
  <form ref="form" class="w-2/3 sm:w-1/3">
    <h4 class="text-center text-2xl text-gray-100">Contact Me</h4>
    <p id="status" class="text-center text-xl text-gray-100 hidden">
      {{ status }}
    </p>
    <div>
      <input
        v-model="full_name"
        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="FULL NAME"
        required
      />
    </div>
    <div class="mt-4">
      <input
        v-model="email"
        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="EMAIL"
        required
      />
    </div>
    <div class="mt-4">
      <textarea
        v-model="message"
        class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="MESSAGE"
        required
      ></textarea>
    </div>
    <div class="my-4">
      <button
        class="uppercase text-sm font-bold tracking-wide bg-secondary text-gray-100 p-3 rounded-lg hover:opacity-90 w-full focus:outline-none focus:shadow-outline"
        @click.prevent="sendEmail"
      >
        Send Message
      </button>
    </div>
  </form>
</template>

<script>
import { send } from '@emailjs/browser'
export default {
  data() {
    return {
      full_name: '',
      email: '',
      message: '',
      status: '',
    }
  },
  methods: {
    async sendEmail() {
      const status = document.querySelector('#status')
      await send(
        process.env.serviceName,
        process.env.templateName,
        {
          full_name: this.full_name,
          email: this.email,
          message: this.message,
        },
        process.env.userName
      ).then(
        () => {
          this.status = 'message sent succesfully'
          status.textContent = this.status
        },
        () => {
          this.status = 'something went wrong'
          status.textContent = this.status
        }
      )
      this.$refs.form.reset()
      status.className = 'text-center text-xl text-gray-100'
    },
  },
}
</script>
