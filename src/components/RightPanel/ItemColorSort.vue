<template>
  <button @click="sort">Перемешать</button>
  <div v-for="(item, i) in list.items" :key="i">
    <div class="item-blocks" v-if="item.selected">
      <div
        v-for="n in item.quantity"
        class="item-block"
        :style="{ backgroundColor: item.color }"
        @click="item.quantity--"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const props = defineProps(["index"]);
const store = useStore();

// получаю список из хранилеща
const list = store.state.lists[props.index];

const sort = () => {
  store.commit("mixedItems", props.index);
  list.sort = !list.sort;
};
</script>

<style lang="scss" scoped>
.item-blocks {
  margin-bottom: 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &:first-child {
    margin-top: 5px;
  }
}
.item-block {
  width: 10px;
  height: 10px;
}
</style>
