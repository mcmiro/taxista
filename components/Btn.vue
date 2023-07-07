<template>
  <div>
    <NuxtLink :class="cssClass" :to="href" v-if="href">
      <slot></slot>
    </NuxtLink>
    <button :class="cssClass" v-else>
      <slot></slot>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  cssClass: {
    type: [String],
  },
  href: {
    type: [String],
  }
})
</script>