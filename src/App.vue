<script>
import MyHeader from "./component/MyHeader.vue";
import MyBody from "./component/MyBody.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyBody,
  },
};
</script>

<template>
  <div id="app" class="min-h-screen">
    <MyHeader />
    <div class="container mx-auto px-4">
      <MyBody />
    </div>
  </div>
</template>

<style>
/* 只保留必要的全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
