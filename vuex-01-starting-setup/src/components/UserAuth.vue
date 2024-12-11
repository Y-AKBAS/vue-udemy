<template>
    <button v-if="!isAuthenticated" @click="login">Login</button>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    methods: {
        ...mapActions('auth', ['login', 'logout'])
    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated'])
    }
}

</script>