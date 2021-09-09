<template>
  <v-container>
    <h1>{{ msg }}</h1>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "This is login page",
    };
  },
};
</script>

<style lang="stylus" scoped>
h1
  color red
</style>
