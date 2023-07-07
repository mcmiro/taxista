<template>
  <div>
    <button @click="toggleAccordion()" class="flex items-center justify-between gap-3 w-full" :aria-expanded="isOpen"
      :aria-controls="`${_uid}`">
      <slot name="title" />
      <div>
        <svg class="w-5 transition-all duration-200 transform text-primary-yellow" :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" aria-hidden="true">
          <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </button>

    <div v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      _uid: 1,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    }
  },
  mounted() {
    this._uid = this.makeid(34);
  }
};
</script>