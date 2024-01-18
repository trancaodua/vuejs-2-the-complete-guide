const vue = Vue.createApp({
    data() {
        return {
            num: 0
        }
    },
    methods: {
        add(num) {
            this.num += num;
            console.log(this.num);
        }
    },
    computed: {
        result() {
            if (this.num < 37) {
                return 'Not there yet!';
            } else if (this.num === 37) {
                return this.num;
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        result() {
            const that = this;
            console.log('Watcher excuting...');
            setTimeout(function () {
                that.num = 0;
            }, 5000);
        }
    }
});
vue.mount('#assignment');