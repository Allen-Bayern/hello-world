<template>
  <div id="note-detail">
    <h1 class="message">{{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
export default {
  name: "NoteDetails",
  data() {
    return {
      msg: "笔记详情",
    };
  },
};
</script>

<style lang="stylus" scoped>
.message
  color blue
</style>
