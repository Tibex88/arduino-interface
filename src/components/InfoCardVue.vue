<template>
  <div class="card">
    <div class="card_inner">
      <p class="text-primary-p">{{ "Tank " + index }}</p>
      <span class="font-bold text-title">{{ "Condition: " + condition }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "condition"],
};
</script>

<style></style>
