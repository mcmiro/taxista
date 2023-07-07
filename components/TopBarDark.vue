<template>
  <div class="flex justify-between pb-16">
    <LogoDark class="h-7 w-auto" />
    <MenuIcon @click="menuOpen = true" class="cursor-pointer" />
    <div
      v-if="menuOpen"
      class="fixed left-0 top-0 w-full h-full bg-primary-white z-50"
    >
      <MobMenu @closeMenu="closeMenu()" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const menuOpen = ref(false);

    return {
      menuOpen,
    };
  },
  mounted() {
    this.menuOpen = false;
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>
