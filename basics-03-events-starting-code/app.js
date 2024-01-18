const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastname: '',
      confirmedName: '',
      fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
          console.log("test");
        }, 2000);
      }
    },
    name(newValue, oldValue) {
      if (newValue === '') {
        return '';
      }
      this.fullname = `${newValue} ${this.lastname}`;
    },
    lastname(newValue, oldValue) {
      if (newValue === '') {
        return '';
      }
      this.fullname = `${this.name} ${newValue}`;
    },
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} Schwarznuller`;
    }
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    // setName(event, lastName) {
    //   this.name = `${event.target.value} ${lastName}`;
    // },
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} Schwarznuller`;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
