<template>
  <button @click="list.sort = !list.sort">Сортировать</button>
  <div class="item-blocks">
    <div v-for="(item, index) in allItems" :key="index">
      <div
        class="item-block"
        :style="{ backgroundColor: item.color }"
        @click="
          store.commit('removeItem', {
            index: props.index,
            indexItem: item.indexItem,
            indexAllItems: index,
          })
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const props = defineProps(["index"]);
const store = useStore();
const list = store.state.lists[props.index];
const allItems = computed(() => store.state.lists[props.index].allItems);
</script>

<style lang="scss" scoped>
.item-blocks {
  margin-top: 5px;
  margin-bottom: 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.item-block {
  width: 10px;
  height: 10px;
}
</style>
