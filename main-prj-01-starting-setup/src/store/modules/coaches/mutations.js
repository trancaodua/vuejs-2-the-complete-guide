export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload;
        console.log(state.coaches);
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
};