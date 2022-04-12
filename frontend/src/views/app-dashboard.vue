<template>
    <section>
        <section v-if="passwordChecked" class="dashboard">
            <table v-if="isReady">
                <thead>
                    <th @click="onSetSort('firstName')">First name</th>
                    <th @click="onSetSort('lastName')">Last name</th>
                    <th @click="onSetSort('email')">Email</th>
                    <th @click="onSetSort('website')">Website</th>
                    <th @click="onSetSort('linkedin')">Linkedin</th>
                    <th @click="onSetSort('experiance')">Years of Experiance</th>
                    <th @click="onSetSort('budget')">Biggest campaign ($)</th>
                </thead>
                <tbody>
                    <marketer-preview v-for="marketer in marketers" :key="marketer._id" :marketer="marketer" />
                </tbody>
            </table>
            <div v-else>Loading...</div>
        </section>
        <check-password v-else @checked="passwordChecked = true"></check-password>
    </section>
</template>

<script>
import marketerPreview from "../cmps/marketer-preview.cmp.vue"
import checkPassword from "../cmps/check-password.vue"
export default {
    components: {
        marketerPreview,
        checkPassword,
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
        onSetSort(sortBy) {
            console.log(sortBy)
            if (sortBy === this.sortBy.type) this.sortBy.isAsc = !this.sortBy.isAsc
            this.sortBy.type = sortBy
        },
    },
    data() {
        return {
            isReady: false,
            sortBy: {
                type: "",
                isAsc: false,
            },
            passwordChecked: false,
        }
    },
    // },
    mounted() {
        // if (userService.getLoggedInUser().isAdmin) return this.$router.push('/')
        this.loadMarketers()
    },
    computed: {
        marketers() {
            return this.$store.getters.marketers(this.sortBy)
        }
    }
}
</script>
