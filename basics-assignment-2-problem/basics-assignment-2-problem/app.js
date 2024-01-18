Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''
        };
    },
    methods: {
        alert() {
            alert('Hello World!');
        },
        saveInput(event) {
            this.userInput = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.userInput;
        }
    }
}).mount('#assignment');