<template>
  <section>
    <h2>Hello, please insert your username and password</h2>
    <input @keydown.enter="checkPassword" v-model="user.username" type="text" name="" id="" placeholder="Username" required/>
    <input @keydown.enter="checkPassword" v-model="user.password" type="password" name="" id="" placeholder="Password" required/>
    <button @click="checkPassword">Submit</button>
    <h3 v-if="wrongAnswer" style="color: red;">*Wrong username or password !</h3>
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
      wrongAnswer: false
    }
  },
  methods: {
    checkPassword() {
      if (this.user.username === 'Admin' && this.user.password === '1111') this.$emit('checked')
      else this.wrongAnswer = true
    },
  },
  computed: {},
  components: {},
}
</script>

<style></style>
