<template>
    <section class="dashboard">
        <table v-if="isReady">
            <thead>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Linkedin</th>
                <th>Years of Experiance</th>
                <th>Biggest campaign ($)</th>
            </thead>
            <tbody>
                <marketer-preview v-for="marketer in marketers" :key="marketer._id" @marketer="marketer" />
            </tbody>
        </table>
        <div v-else>Loading...</div>
    </section>
</template>

<script>
import marketerPreview from '../cmps/marketer-preview.cmp.vue'
export default {
    components: {
        marketerPreview
    },
    data() {
        return {
            marketers,
            isReady
        }
    },
    mounted() {
        // if (userService.getLoggedInUser().isAdmin) return this.$router.push('/')
        this.loadMarketers()
    },
    methods: {
        async loadMarketers() {
            try {
                this.isReady = false
                await this.$store.dispatch('loadMarketers')
                this.isReady - true
            } catch (err) {
                console.log(err)
                throw err
            }
        }
    },
    computed: {
        marketers() {
            return this.$store.getters.marketers
        }
    }
}
</script>
