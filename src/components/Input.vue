<template>
  <div>
    <input
      type="text"
      :id="id"
      :placeholder="label"
      :value="value"
      :required="required"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
      id: {
        type: String
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: String
      },
      required: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: 1px solid #baff00;
  padding: 10px;
  border-radius: 100px;
  outline: none;
  background: transparent;
  text-align: center;
}

input::placeholder {
  color: #baff00;
}
</style>
