<template>
  <div class="mx-auto container px-4 sm:px-6 lg:px-8 mt-8" :class="cssClass">
    <slot></slot>
  </div>
</template>
<script setup>
const props = defineProps({
  cssClass: {
    type: [String],
  },
});
</script>
