<template>
  <div>
    <div class="flex items-center gap-4 bg-white rounded-xl px-4 py-2 h-[4.5rem]">
      <!-- Datepicker 1 START -->
      <div class="grow">
        <!-- Label START -->
        <div class="text-black text-xxs font-bold uppercase">Datum:</div>
        <!-- Label END -->
        <!-- Picker START -->
        <div class="flex items-center h-[36px]">
          <div>
            <DatePickerIcon :class="['stroke-secondary-yellow']" />
          </div>

          <ClientOnly>
            <Datepicker @update:model="setDate" v-model="dateFrom" auto-apply :enable-time-picker="false"
              disable-year-select locale="hr" position="center" :format="format" :day-names="dayNames" no-today
              :placeholder="$t('header.bookingPlaceholderOne')" hide-input-icon :transitions="false" close-on-scroll
              :min-date="new Date()">
              <template> </template>
            </Datepicker>
          </ClientOnly>
        </div>
        <!-- Picker END -->
      </div>
      <!-- Datepicker 1 END -->
      <!-- Separator START -->
      <div class="w-0.5 h-8 bg-secondary-yellow"></div>
      <!-- Separator END -->
      <!-- Timepicker START -->
      <div class="grow">
        <!-- Label START -->
        <div class="text-black text-xxs font-bold uppercase">Vrijeme:</div>
        <!-- Label END -->
        <!-- Picker START -->
        <div class="flex items-center h-[36px]">
          <div>
            <TimePickerIcon :class="['stroke-secondary-yellow']" />
          </div>

          <ClientOnly>
            
          </ClientOnly>
        </div>
        <!-- Picker END -->
      </div>
      <!-- Timepicker END -->
    </div>
    <!-- CTA START -->
    <div class="h-32 mt-8">
      <div
        class="flex justify-center items-center rounded-xl px-4 h-[4.5rem] bg-secondary-yellow transition ease-in-out duration-500 cursor-pointer text-gray-800">
        <div @click="cartStore.openCart()"
          class="flex flex-col sm:flex-row justify-center items-center sm:gap-4 w-full h-full font-bold">
          <div class="text-xl whitespace-nowrap flex justify-center">{{ $t("header.bookingButton") }}</div>
        </div>
      </div>
      <div class="pt-4 text-center transition ease-in-out duration-500">
        <span class="text-secondary-white text-sm flex gap-2 items-center justify-center">
          <CheckIcon />{{ $t("header.bookingButtonIcon") }}
        </span>
      </div>
    </div>
    <!-- CTA END -->
  </div>
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import { ref } from "vue";
import { mapActions } from "pinia";
import { useCartStore } from "../stores/cart";

export default {
  components: {
    Datepicker,
  },
  setup() {
    const dateFrom = ref();
    const dateTo = ref();
    const parkingDays = ref(0);
    const cartStore = useCartStore();
    const dateInfoReady = ref();
    const maxDate = ref();

    const setDate = (value) => {
      date.value = value;
    };

    const dayNames = ["Pon", "Uto", "Sre", "Čet", "Pet", "Sub", "Ned"];

    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    };

    return {
      dateFrom,
      dateTo,
      setDate,
      format,
      dayNames,
      cartStore,
      dateInfoReady,
      parkingDays,
      maxDate
    };
  },
  methods: {
    dateSelected(e) {
      this.$nextTick(() => console.log(this.appointment.appointmet_date));
    },
    calculateDays() {
      if (this.dateFrom && this.dateTo) {
        let difference = this.dateTo.getTime() - this.dateFrom.getTime();
        let totalDays = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
        this.parkingDays = totalDays;
        this.cartStore.setDuration(totalDays);
        this.calculatePrice()
      }
    },
    calculatePrice() {
      this.cartStore.prices.forEach(el => {
        if (el.title.split(' ')[0] == this.parkingDays) {
          this.cartStore.setTotal(el.price_sm);
        }
      })
    },
    ...mapActions(useCartStore, [
      "openCart",
      "setDateFrom",
      "setDateTo",
      "setDuration",
      "setTotal"
    ]),
  },
  watch: {
    dateFrom(val) {
      this.cartStore.setDateFrom(val);
      this.calculateDays();
      this.maxDate = new Date();

      // Set max date
      this.maxDate = new Date(this.maxDate.setDate(this.dateFrom.getDate() + 29));
    },
    dateTo(val) {
      this.cartStore.setDateTo(val);
      this.calculateDays();
    },
  },
};
</script>
