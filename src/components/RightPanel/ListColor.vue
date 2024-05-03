<template>
  <h3>{{ list.name }}</h3>
  <ItemColorSort
    v-if="list.sort && (list.indeterminate || list.selected)"
    :index="index"
  />
  <ItemColorMixed
    v-if="!list.sort && (list.indeterminate || list.selected)"
    :index="index"
  />
</template>

<script setup>
import { useStore } from "vuex";
import ItemColorSort from "./ItemColorSort.vue";
import ItemColorMixed from "./ItemColorMixed.vue";

const store = useStore();
const props = defineProps(["index"]);

// получаю список из хранилеща
const list = store.state.lists[props.index];
</script>

<style lang="scss" scoped>
.item-block {
  display: inline-block;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
