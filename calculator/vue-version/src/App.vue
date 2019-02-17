<template>
  <div id="app">
    <Calculator/>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "app",
  components: {
    Calculator
  }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 175%;
}

body {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f8ffae, #43c6ac);
  background: linear-gradient(to right, #f8ffae, #43c6ac);
}

input,
textarea,
button {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  appearance: none;
  text-align: left;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
