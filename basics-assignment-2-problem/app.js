
const app = Vue.createApp({
    data() {
        return {
            inputValue: ' ',
            enteredValue: ' '
        }
    },
    methods: {
        onClick() {
            alert("How dare you!");
        },
        onInput(event) {
            this.inputValue = event.target.value;
        },
        onEnter(event) {
            this.enteredValue = event.target.value;
        }
    }

});

app.mount('#assignment')
