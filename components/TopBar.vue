<template>
<Container class="mt-0">
  <div class="flex justify-between pb-16">
    <Logo class="h-7 w-auto text-slate-900" />
    <div class="cursor-pointer">
      <MenuIcon @click="menuOpen = true" class="text-white" />
    </div>
    <div
      v-if="menuOpen"
      class="fixed left-0 top-0 w-full h-full bg-primary-white z-50 overflow-y-auto"
    >
      <MobMenu @closeMenu="closeMenu()" />
    </div>
  </div>
</Container>
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
