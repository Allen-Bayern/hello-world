<template>
  <div id="trash">
    <h1 class="message">{{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
export default {
  name: "Trash",
  data() {
    return {
      msg: "回收站详情",
    };
  },
};
</script>

<style lang="stylus" scoped>
.message
  color purple
</style>
