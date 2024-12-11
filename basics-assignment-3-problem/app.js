
const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    watch: {
        result(newValue, oldValue) {
            if (oldValue === 0) {
                const that = this;
                setTimeout(() => {
                    that.result = 0;
                }, 5000);
            }
        }
    },
    computed: {
        showResult() {
            if (this.result < 37) {
                return 'Not there yet!'
            } else if (this.result > 37) {
                return 'Too much!'
            } else {
                return 'Congrats!'
            }
        }
    },
    methods: {
        add(value) {
            this.result = this.result + value;
        }
    }
});

app.mount('#assignment');