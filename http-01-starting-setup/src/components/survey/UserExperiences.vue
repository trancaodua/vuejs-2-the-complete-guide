<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some
        survey results first.</p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      const res = axios.get('https://vue-http-demo-e358d-default-rtdb.firebaseio.com/surveys.json');
      res.then((res) => {
        const results = [];
        for (const id in res.data) {
          results.push({
            id: id,
            name: res.data[id].name,
            rating: res.data[id].rating
          })
        }
        this.results = results;

        // throw new Error('Can not get data');

      }).catch((error) => {
        //this.error = 'Failed to fetch data - please try again';
        this.error = error.message;
      }).finally(() => {
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>