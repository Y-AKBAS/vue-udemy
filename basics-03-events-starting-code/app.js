const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      withArg: ""
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    setName(event) {
      this.name = event.target.value;
    },
    setWithArg(event, otherArg) {
      this.withArg = event.target.value + ' ' + otherArg
    },
    submitForm() {
      // check the html part to see how we deactivate the default 
      // for form submission.
      alert("Submitted!")
      console.log("Submitted");
    }
  }
});

app.mount('#events');
