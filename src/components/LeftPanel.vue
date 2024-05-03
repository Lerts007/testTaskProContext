<template>
  <div class="leftPanel">
    <div class="list" v-for="(list, index) in store.state.lists" :key="index">
      <List :index="index" />
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import List from "./List.vue";

const store = useStore();
</script>

<style lang="scss" scoped>
.leftPanel {
  border: 1px solid #ccc;
}
.list {
  width: 300px;
  margin-bottom: 10px;
}
</style>
