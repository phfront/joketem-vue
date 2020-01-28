<template>
  <div class="joke-container" v-html="text"></div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.joke-container {
  display: flex;
  width: 100%;
  font-size: 30px;
  background: #baff00;
  color: rgb(0, 100, 55);
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
</style>
