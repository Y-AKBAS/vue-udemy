
const app = Vue.createApp({
    data() {
        return {
            targetClass: '',
            isVisible: true,
            backgroundColor: ''
        }
    },
    computed: {
        classes() {
            return [this.targetClass, this.isVisible ? 'visible' : 'hidden'];
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');