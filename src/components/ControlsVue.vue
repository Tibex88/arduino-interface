<template>
  <div
    class="control"
    :class="{
      card1: types == 'card1',
      card2: types === 'card2',
      card3: types === 'card3',
      card4: types === 'card4',
    }"
  >
    <h1>{{ controlName || "Unnamed" }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["type", "controlName"],
  data() {
    return {
      types: null,
    };
  },
  mounted() {
    this.types = this.type;
    console.log(this.type ? this.type : "");
  },
};
</script>

<style></style>
