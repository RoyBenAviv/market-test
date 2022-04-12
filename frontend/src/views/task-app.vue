<template>
    <section class="task-app">
        <img src="../assets/images/logo.png" alt="">
        <form @submit.prevent="addMarketer">
            <h1>Create account</h1>
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
                <div>
                <label v-for="data in exprienceData" :key="data">
                    <input v-model="marketer.exprience" type="radio" :value="data">
                    {{ data }}
                </label>
                </div>

            </div>
            <div>
                <label>
                    what was the biggest campaign budget you have managed in a single month?
                    <input type="range" min="1000" max="500000" v-model="marketer.range">
                    ${{ range }}
                </label>
            </div>

            <button>Submit</button>
        </form>
        <!-- {{ marketer }} -->
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
                website: '',
                linkedin: '',
                exprience: '',
                range: 1000
            },
            exprienceData: ['no exprience', '0-1 years', '1-2 years', '2 or more years']

        }
    },
    created() {

    },
    mounted() {
    },
    methods: {
        addMarketer() {
            this.$store.dispatch({ type: 'addMarketer', marketer: JSON.parse(JSON.stringify(this.marketer)) })
            this.marketer = {
                firstName: '',
                lastName: '',
                email: '',
                website: '',
                linkedin: '',
                exprience: '',
                range: 1000
            }
        }
    },
    computed: {
        range() {
            return this.marketer.range
        }
    },
    unmounted() {
    },
}
</script>
