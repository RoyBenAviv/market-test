<template>
  <section>
    <h1>Hello, please insert your username and password</h1>
    <input v-model="user.username" type="text" name="" id="" placeholder="Username" />
    <input v-model="user.password" type="password" name="" id="" placeholder="Password" />
    <button @click="checkPassword">Submit</button>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    checkPassword() {
      if (this.user.username === 'Admin' && this.user.password === '1111') this.$emit('checked')
    },
  },
  computed: {},
  components: {},
}
</script>

<style></style>
