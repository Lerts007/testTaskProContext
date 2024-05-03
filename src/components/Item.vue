<template>
  <div class="item">
    <label>
      <input type="checkbox" class="checkbox" v-model="item.selected" />
      {{ item.name }}
    </label>

    <label>
      {{ item.quantity }}
      <input class="item-color" type="color" v-model="item.color" />
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["item"]);
</script>

<style scoped>
.item {
  margin-bottom: 5px;

  display: flex;
  justify-content: space-between;
}
label {
  display: flex;
  align-items: center;
}

.item-color {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 30px;
  height: 30px;

  margin-left: 5px;
  padding: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
  }
  &::-moz-color-swatch {
    border-radius: 50%;
    border: none;
  }
}
</style>
