<template>
  <div class="joke-container">{{ text }}</div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
