const vue = Vue.createApp({
    data() {
        return { input: '', toggle: true, backgroundColor: '' };
    },
    computed: {
        classes() {
            if (this.input === 'user1') {
                return 'user1';
            } else if (this.input === 'user2') { return 'user2'; }
            else return '';
        }
    },
    methods: {
        handleToggle() {
            this.toggle = !this.toggle;
            console.log(this.toggle);
        }
    }
});
vue.mount('#assignment');