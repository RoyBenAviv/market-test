<template>
    <section class="task-app">
        <form>
            <label>First name
                <input v-model="marketer.firstName" type="text">
            </label>
            <label>Last name
                <input v-model="marketer.lastName" type="text">
            </label>
            <label>Email address
                <input v-model="marketer.email" type="email">
            </label>
        </form>
    </section>
</template>


<script>
export default {
    name: 'task-app',
    props: [],
    emits: [],
    components: {},
    data() {
        return {
            marketer: {
                firstName: '',
                lastName:'',
                email:''

            },

        }
    },
    created() {

    },
    mounted() {
    },
    methods: {},
    computed: {
    },
    unmounted() {
    },
}
</script>
