<template>
  <task-app />
</template>

<script>
import taskApp from './views/task-app.vue'
// import appHeader from './components/app-header.vue';
export default {
  name: 'App',
  created() {
  },
  components: {
    taskApp
    // appHeader
  }
}

</script>