const app = Vue.createApp({
  data() {
    return {
      goalInput: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.goalInput) {
        this.goals.push(this.goalInput);
        this.goalInput = '';
      }
    },
    removeGoal(index) {
      if (index >= 0) {
        this.goals.splice(index, 1);
      }
    }
  }
});

app.mount('#user-goals');
