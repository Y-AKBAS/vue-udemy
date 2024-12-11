
const app = Vue.createApp({
    data() {
        return {
            showDetails: false,
            friends: [
                {
                    id: 'manuel',
                    name: "Manuel Lorenz",
                    phone: '213423452345324',
                    email: 'lorenz@localhost.com'
                },
                {
                    id: 'julie',
                    name: "Julie Jones",
                    phone: '098024230434',
                    email: 'julie@localhost.com'
                }
            ],
        }
    },
    methods: {
        toggleVisibility() {
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount('#app');