<template>
    <section class="task-app">
        <form>
            <label>First name
                <input v-model="marketer.firstName" type="email">
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
