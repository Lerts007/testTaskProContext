<template>
  <div class="rightPanel">
    <div class="list" v-for="(list, index) in store.state.lists" :key="index">
      <ListColor :index="index" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import ListColor from "./ListColor.vue";

const store = useStore();
</script>

<style lang="scss" scoped>
.rightPanel {
  padding: 5px;
  border: 1px solid #ccc;
}
.list {
  width: 400px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
