const vue = Vue.createApp({
    data() {
      return {
        age: 31,
        name: 'Tran Cao Dua',
        imageUrl:
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg',
      }
    },
    methods: {
      caculatorAge() {
        return this.age + 5
      },
    },
  })

  vue.mount('#assignment');