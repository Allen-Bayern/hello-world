<template>
  <div id="notebook-list">
    <h1 class="massage">{{ msg }}</h1>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NotebookList",
  data() {
    return {
      msg: "笔记本列表",
    };
  },
};
</script>

<style lang="stylus" scoped>
.massage
  color red
</style>
