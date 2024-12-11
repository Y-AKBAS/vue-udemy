
const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskInput: '',
            show: undefined,
        };
    },
    computed: {
        visibilityToggleText() {
            return this.show ? "Hide List" : "Show List";
        }
    },
    methods: {
        addTask() {
            if (this.taskInput) {
                this.tasks.push(this.taskInput);
                this.taskInput = '';
                if (this.show === undefined) {
                    this.show = true;
                }
            }
        },
        toggleVisibility() {
            if (this.show === undefined) {
                throw new Error("this.show is still undefined!");
            }
            this.show = !this.show;
        }
    }
});

app.mount('#assignment');