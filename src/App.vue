<template>
  <div id="app">
    <router-view />
    <img src="@/assets/svg/vue-logo.svg">
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  color: #baff00;
  font-family: "Bangers", cursive;
}

html,
body {
  height: 100%;
}

body {
  background: rgb(0, 100, 55);
}

#app {
  width: 100%;
  height: 100%;
}

img {
  position: fixed;
  width: 45px;
  height: auto;
  z-index: 1;
  right: 5px;
  bottom: 5px;
}

</style>