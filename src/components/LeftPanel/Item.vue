<template>
  <div class="item">
    <label>
      <input type="checkbox" class="custom-checkbox" v-model="item.selected" />
      {{ item.name }}
    </label>

    <label>
      <input type="number" v-model="item.quantity" min="0" />
      <input class="item-color" type="color" v-model="item.color" />
    </label>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
</script>

<style lang="scss" scoped>
@import "../../assets/checkbox.css";

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
