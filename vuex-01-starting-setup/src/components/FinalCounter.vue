<template>
    <h3> Counter * 2 = {{ counterTimesTwo }}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
       /* counterTimesTwo() {
            return this.$store.getters.counterTimesTwo;
        }*/
       ...mapGetters('counter', ['counterTimesTwo'])
    }
}

</script>