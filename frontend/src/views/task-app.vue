<template>
    <header>
        <router-link to="dashboard">dashboard</router-link>
    </header>
    <section class="task-app">
        <img src="../assets/images/logo.png" alt="">
        <form @submit.prevent="addMarketer">
            <h1>Create account</h1>
            <label>First name
                <input v-model="marketer.firstName" type="text">
            </label>
            <label>Last name <span class="req">*</span>
                <input v-model="marketer.lastName" type="text">
            </label>
            <label>Email address
                <input v-model="marketer.email" type="email" required>
            </label>
            <label>Website
                <input v-model="marketer.website" type="text">
            </label>
            <label>Linkedin
                <input v-model="marketer.linkedin" type="text">
            </label>
            <div>
                <p>* How many years of exprience do you have with Facebook Marketing?</p>
                <div class="years-options">
                    <label v-for="data in exprienceData" :key="data">
                        <input v-model="marketer.exprience" type="radio" :value="data.val">
                        {{ data.label }}
                    </label>
                </div>

            </div>
            <div class="budget">
                <p>
                    * what was the biggest campaign budget you have managed in a single month?
                </p>
                    <div class="input-range"><input type="range" min="1000" max="500000" v-model="marketer.range">
                    <span class="range">${{ range }}</span></div>
            </div>

            <button>Continue</button>
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
            exprienceData: [{ label: 'no exprience', val: 0 }, { label: '0-1 years', val: 1 }, { label: '1-2 years', val: 2 }, { label: '2 or more years', val: 3 }]

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
                budget: 1000
            }
        }
    },
    computed: {
        range() {
            return this.marketer.range
        },

    },
    unmounted() {
    },
}
</script>
