<template>
  <div>
    <button
      :class="{ active: list.collapsed }"
      @click="store.commit('toggleList', props.index)"
    >
      V
    </button>
    <label>
      <input
        type="checkbox"
        v-model="list.selected"
        @change="store.commit('selectAllItems', props.index)"
        :indeterminate="list.indeterminate"
      />
      {{ list.name }}</label
    >
  </div>
  <div class="items" v-if="!list.collapsed">
    <Item
      v-for="(item, i) in list.items"
      :key="i"
      :item="item"
      @change="store.commit('itemSelected', props.index)"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Item from "./Item.vue";

const store = useStore();
const props = defineProps(["index"]);

// получаю список из хранилеща
const list = store.state.lists[props.index];
</script>

<style lang="scss" scoped>
.items {
  padding-left: 50px;
}
button {
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
}
.active {
  transform: rotate(-90deg);
}
</style>
