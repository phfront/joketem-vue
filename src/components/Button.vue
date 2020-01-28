<template>
  <div>
    <button @click="onClick" :disabled="disabled">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    disabled: Boolean,
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: #baff00;
  color: rgb(0, 100, 55);
  border: 0px;
  padding: 5px 15px;
  font-size: 3vw;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  margin: 20px;
}

button:hover {
  transform: scale(1.05);
  transition: transform 0.1s;
}

button:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}

button:disabled {
  opacity: 0.5;
  transform: scale(1) !important;
}
</style>
