<template>
    <section class="dashboard">
        {{ marketers }}
        <table v-if="isReady">
            <thead>
                <th @click="onSetSort('firstName')">First name</th>
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
    >>>>>>> 16770ea7dc1273101dc9ffd56b93d99292b446d2
</template>

<script>
import marketerPreview from "../cmps/marketer-preview.cmp.vue"
export default {
    components: {
        marketerPreview,
    },
    data() {
        return {
            isReady: false,
        }
    },
    mounted() {
        if (userService.getLoggedInUser().isAdmin) return this.$router.push("/")
        this.loadMarketers()
    },
    methods: {
        async loadMarketers() {
            try {
                this.isReady = false
                await this.$store.dispatch("loadMarketers")
                this.isReady - true
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        data() {
            return {
                isReady: false,
                sortBy: {
                    type: '',
                    isAsc: false
                }
            }
        },
        mounted() {
            if (userService.getLoggedInUser().isAdmin) return this.$router.push("/")
            this.loadMarketers()
        },
        methods: {
            async loadMarketers() {
                try {
                    this.isReady = false
                    await this.$store.dispatch('loadMarketers')
                    this.isReady = true
                } catch (err) {
                    console.log(err)
                    throw err
                }
            },
            onSetSort(sortBy) {
                // this.srot
            }
        },
    },
    computed: {
        marketers() {
            return this.$store.getters.marketers
        },
    },
    mounted() {
        // if (userService.getLoggedInUser().isAdmin) return this.$router.push('/')
        this.loadMarketers()
    },
    methods: {
        async loadMarketers() {
            try {
                this.isReady = false
                await this.$store.dispatch("loadMarketers")
                this.isReady = true
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
    computed: {
        marketers() {
            return this.$store.getters.marketers(this.sortBy)
        },
    },
    //   }

}
</script>
