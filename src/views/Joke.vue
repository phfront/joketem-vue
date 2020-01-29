<template>
  <div class="joke">
    <h1>Hello {{ name }}!!!</h1>
    <v-button
      :disabled="loading"
      :onClick="getJoke"
      :text="loading ? 'Getting Joke...' : 'Get Joke!'"
    ></v-button>
    <v-joke :text="$store.getters.getJoke"></v-joke>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Joke from "@/components/Joke.vue";

export default {
  name: "joke",
  components: {
    "v-button": Button,
    "v-joke": Joke
  },
  created() {
    if (this.$route.query.name) {
      this.name = this.$route.query.name;
    }
    this.getJoke();
  },
  data() {
    return {
      name: "Stranger",
      loading: false
    };
  },
  methods: {
    getJoke() {
      this.loading = true;
      this.$store.dispatch("getJoke").then(() => {
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped>
.joke {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
