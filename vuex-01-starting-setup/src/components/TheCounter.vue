<template>
    <h3> {{ counter }}</h3>
    <button @click="incAsync">Increment Async</button>
    <button @click="increase({ myNum: 10 })">Increase by 10</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            counter: 'counter/counter'
        })
    },
    methods: {
        /*  add() {
             // Both of the following are applicable
             // this.$store.commit('increase', {myNum: 10});
             /* this.$store.commit({
                  type: 'increase',
                  myNum: 10
              })
             this.$store.dispatch({
                 type: 'increase',
                 myNum: 20
             })
             */
        //  ...mapActions(['increment', 'increase'])
        ...mapActions('counter', {
            incAsync: 'increment',
            increase: 'increase'
        })
    }
}
</script>