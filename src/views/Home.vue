<template>
  <div class="home">
    <h1>JOKETEM</h1>
    <v-input type="text" label="What's your name?" v-model="name"></v-input>
    <v-button :onClick="goJoke" text="Go forward!"></v-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";

export default {
  name: "home",
  components: {
    "v-button": Button,
    "v-input": Input
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    goJoke() {
      if (this.name) {
        this.$router.push({ name: "joke", query: { name: this.name } });
      } else {
        this.$router.push({ name: "joke" });
      }
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-bottom: 10px;
}
</style>
