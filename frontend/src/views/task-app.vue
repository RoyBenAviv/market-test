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
                <input v-model="marketer.email" type="email" required>
            </label>
            <label>Website add
                <input v-model="marketer.website" type="text">
            </label>
            <label>Linkedin
                <input v-model="marketer.linkedin" type="text">
            </label>
            <div>
                <span>How many years of exprience do you have with Facebook Marketing?</span>
                <label>
                    no exprience
                    <input v-model="marketer.exprience" type="radio">
                </label>
            </div>
            <!-- <label>Website add
                <input v-model="marketer.email" type="text">
            </label> -->

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
                lastName: '',
                email: '',
                website:'',
                linkedin:'',
                exprience:'',

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
