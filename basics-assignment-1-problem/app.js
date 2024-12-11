
const app = Vue.createApp({
    data() {
        return {
            name: "yasin",
            age: 30,
            imageUrl: "https://wallpapercave.com/wp/wp5212073.jpg"
        }
    },
    methods: {
        ageIn5Years() {
            return this.age + 5
        },
        randomNum() {
            return Math.floor(Math.random() * 10);
        }
    }
});

app.mount("#app");
