<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Chanage Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" v-model="firstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef, toRefs, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {

    // const uName = ref('Maximilian');
    const firstName = ref('Tran');
    const lastName = ref('Cao');
    const lastNameInput = ref(null);
    const uAge = ref(31);
    const user = reactive({
      name: 'Maximilian',
      age: 31
    })

    provide('userAge', uAge);
    // const uName = ref('Maximilian');
    console.log(isRef(uAge));
    console.log(isReactive(user), isReactive(user.age));
    // setTimeout(function () {
    //   user.name = 'Max';
    //   user.age = 32;
    // }, 2000)

    const userRefs = toRefs(user);

    function setNewData() {
      user.age = 32;
      uAge.value = 33;
    }

    // watch(uAge, function (newValue, oldValue) {
    //   console.log('Old age: ' + oldValue);
    //   console.log('New age: ' + newValue);
    // });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    })

    watch([uAge, uName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      user: user,
      userName: userRefs.name,
      userAge: userRefs.age,
      setAge: setNewData,
      uAge,
      firstName,
      lastName,
      setFirstName,
      setLastName,
      uName,
      lastNameInput
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>