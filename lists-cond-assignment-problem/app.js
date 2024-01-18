const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTasksValue: "",
      show: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTasksValue);
    },
    changeShow() {
      this.show = !this.show;
    },
  },
  computed: {
    caption() {
      return this.show ? "Hide" : "Show List";
    },
  },
});

app.mount("#assignment");
