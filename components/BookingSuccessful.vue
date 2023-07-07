<template>
  <div>
    <client-only>
      <Transition name="slide-fade">
        <div v-if="cartStore.cart.open" class="
            bg-white
            overflow-auto
            h-screen
            w-full
            md:w-2/4
            lg:w-1/3
            right-0
            top-0
            shadow-lg
            fixed
            z-50
            pt-8 pb-32 px-6
          ">
          <div class="flex justify-between">
            <LogoDark class="h-7 w-auto text-slate-900" />
            <MenuCloseIcon @click="cartStore.closeCart()" />
          </div>
          <div class="mt-16 pb-8 border-dashed">
            <h1 class="text-4xl font-bold py-4">{{ $t("sharedMessages.your") }}<br> {{ $t("sharedMessages.order") }}</h1>
          </div>
          <!-- Time Line START -->
          <div class="py-16 border-dashed">
            <ol class="relative border-l border-primary-yellow ml-5">
              <li class="relative -top-10 ml-10">
                <div
                  class="flex items-center justify-center absolute w-10 h-10 bg-primary-yellow rounded-full mt-5 -left-[3.75rem] border-2 border-white text-white text-sm">
                  {{ $t("sharedMessages.from") }}
                </div>
                <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 relative -top-2">{{ $t("sharedMessages.Date") }}
                  {{ $t("sharedMessages.parking") }}</time>
                <h3 class="text-2xl font-semibold text-primary-black -mt-1">{{
                    formatDate(cartStore.cart.dateFrom)}}
                }}</h3>
                <NuxtLink :to="localePath('/')" class="pt-2 mb-4 text-sm font-normal text-primary-black underline">{{ $t("sharedMessages.change") }} {{ $t("sharedMessages.date") }}
                </NuxtLink>
              </li>
              <li class="relative top-10 ml-10">
                <div
                  class="flex items-center justify-center absolute w-10 h-10 bg-primary-yellow rounded-full mt-5 -left-[3.75rem] border-2 border-white text-white text-sm">
                  {{ $t("sharedMessages.to") }}
                </div>
                <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 relative -top-2">{{ $t("sharedMessages.Date") }}
                  {{ $t("sharedMessages.pickup") }}</time>
                <h3 class="text-2xl font-semibold text-primary-black -mt-1">{{
                 formatDate(cartStore.cart.dateTo)}}
                </h3>
                <NuxtLink  :to="localePath('/')" class="pt-2 mb-4 text-sm font-normal text-primary-black underline">{{ $t("sharedMessages.change") }}
                  {{ $t("sharedMessages.date") }}
                </NuxtLink>
              </li>
            </ol>
          </div>
          <!-- Time Line END -->
          <!-- Price START -->
          <div class="flex items-center justify-between pt-3.5 pb-4 border-dashed text-xl font-semibold">
            <div>
              {{ $t("sharedMessages.Price") }}:
            </div>
            <div>
              {{ cartStore.cart.total }} rsd
            </div>
          </div>
          <!-- Price END -->
          <!-- CheckBox Car Wash START -->
          <label class="flex items-start mt-4">
            <input type="checkbox" class="w-5 h-5  border-primary-black rounded-lg accent-primary-black">
            <p class="ml-2 text-sm">{{ $t("sharedMessages.add") }} <span class="text-primary-yellow"> {{ $t("sharedMessages.carWash") }}</span> {{ $t("sharedMessages.carWash") }} 1.199 rsd</p>
          </label>
          <!-- CheckBox Car Wash END -->
          <NuxtLink  :to="localePath('/')" @click="closeMenu()"
            class="rounded-xl p-4 bg-primary-yellow cursor-pointer block mt-8 text-white">
            <div class="flex items-center justify-center h-full font-bold text-xl whitespace-nowrap">{{ $t("sharedMessages.continue") }}
            </div>
          </NuxtLink>
          <div
            class="flex justify-center items-center gap-1 pt-4 text-xs xl:text-lg transition ease-in-out duration-500">
            <CheckIcon class="text-secondary-gray" />
            <p>{{ $t("sharedMessages.freeParking") }}</p>
          </div>
        </div>
      </Transition>
    </client-only>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '../stores/cart'

export default {
  setup() {
    const cartStore = useCartStore();
    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
    return {
      cartStore,
      formatDate
    }
  },
  methods: {
    ...mapActions(useCartStore, ['closeCart', 'openCart']),
  }
}
</script>
