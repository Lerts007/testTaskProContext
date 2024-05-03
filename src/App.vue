<script setup>
import LeftPanel from "./components/LeftPanel/LeftPanel.vue";
import RightPanel from "./components/RightPanel/RightPanel.vue";
</script>

<template>
  <main>
    <LeftPanel />
    <RightPanel />
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  min-height: 300px;

  padding: 20px;

  display: flex;
  gap: 40px;

  border: 1px solid #ccc;
}
</style>
