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
            <MenuCloseIcon @click="cartStore.closeCart()" class="cursor-pointer" />
          </div>
          <div class="mt-16 pb-8 border-dashed">
            <h1 class="text-4xl font-bold py-4">{{ $t("sharedMessages.your") }}<br> {{ $t("sharedMessages.order") }}
            </h1>
          </div>
          <!-- Date Line START -->
          <div class="border-dashed ">
            <div class="text-xl font-semibold pt-3.5">
              <div>
                {{ $t("sharedMessages.Date") }}:
              </div>
            </div>
            <div class="py-16">
              <ol class="relative border-l border-primary-yellow ml-5">
                <li class="relative -top-10 ml-10">
                  <div
                    class="flex items-center justify-center absolute w-10 h-10 bg-primary-yellow rounded-full mt-5 -left-[3.75rem] border-2 border-white text-white text-sm">
                    {{ $t("sharedMessages.FROM") }}
                  </div>
                  <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 relative -top-2">{{
                    $t("sharedMessages.Date")
                  }}
                    {{ $t("sharedMessages.parking") }}</time>
                  <h3 class="text-2xl font-semibold text-primary-black -mt-1">{{
                    formatDate(cartStore.cart.dateFrom)
                  }}</h3>
                  <NuxtLink :to="localePath('/')" class="pt-2 mb-4 text-sm font-normal text-primary-black underline">
                    {{ $t("sharedMessages.change") }}
                    {{ $t("sharedMessages.date") }}
                  </NuxtLink>
                </li>
                <li class="relative top-10 ml-10">
                  <div
                    class="flex items-center justify-center absolute w-10 h-10 bg-primary-yellow rounded-full mt-5 -left-[3.75rem] border-2 border-white text-white text-sm">
                    {{ $t("sharedMessages.TO") }}
                  </div>
                  <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 relative -top-2"> {{
                    $t("sharedMessages.Date")
                  }}
                    {{ $t("sharedMessages.parking") }}</time>
                  <h3 class="text-2xl font-semibold text-primary-black -mt-1">{{
                    formatDate(cartStore.cart.dateTo)
                  }}</h3>
                  <NuxtLink :to="localePath('/')" class="pt-2 mb-4 text-sm font-normal text-primary-black underline">
                    {{ $t("sharedMessages.change") }}
                    {{ $t("sharedMessages.date") }}
                  </NuxtLink>
                </li>
              </ol>
            </div>
          </div>
          <!-- Date Line END -->
          <!-- Time START -->
          <div class="border-dashed pt-4 pb-8">
            <div class="text-xl font-semibold">
              <div>
                Vreme:
              </div>
            </div>
            <div class="flex gap-4 pt-4">
              <div>
                <!-- Time from START -->
                <div class="relative">
                  <input v-model="timeFrom" type="text" id="timeFrom" aria-describedby="timeFrom"
                    class="px-4 pb-3 pt-4 w-full peer rounded-xl border border-primary-yellow focus:outline-none placeholder:text-sm"
                    placeholder=" " />
                  <label for="timeFrom"
                    class="absolute text-sm duration-300 text-secondary-gray transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Vreme od:</label>
                </div>
                <div class="text-xs pt-1">
                  <div v-for="error of v$.timeFrom.$errors" :key="error.$uid">
                    <div class="text-red-400">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <!-- Time from END -->
              <!-- Time to START -->
              <div>
                <div class="relative">
                  <input v-model="timeTo" type="text" id="timeTo" aria-describedby="timeTo"
                    class="px-4 pb-3 pt-4 w-full peer rounded-xl border border-primary-yellow focus:outline-none placeholder:text-sm"
                    placeholder=" " />
                  <label for="timeTo"
                    class="absolute text-sm duration-300 text-secondary-gray transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Vreme od:</label>
                </div>
                <div class="text-xs pt-1">
                  <div v-for="error of v$.timeTo.$errors" :key="error.$uid">
                    <div class="text-red-400">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Time to END -->
          <!-- Time END -->
          <!-- User Information START -->
          <div class="border-dashed pt-4 pb-8">
            <div class="text-xl font-semibold">
              <div>
                {{ $t("sharedMessages.personalData") }}
              </div>
            </div>
            <div class="pt-4">
              <!-- User Name START -->
              <div class="relative">
                <input v-model="fullName" type="text" id="fullname" aria-describedby="fullname"
                  class="px-4 pb-3 pt-4 w-full peer rounded-xl border border-primary-yellow focus:outline-none placeholder:text-sm"
                  placeholder=" " />
                <label for="fullname"
                  class="absolute text-sm duration-300 text-secondary-gray transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  {{ $t("sharedMessages.fullName") }}</label>
              </div>
              <div class="text-xs pt-1">
                <div v-for="error of v$.fullName.$errors" :key="error.$uid">
                  <div class="text-red-400">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- User Name END -->
            <!-- User E-Mail START -->
            <div class="pt-6">
              <div class="relative">
                <input v-model="email" type="text" id="email" aria-describedby="email"
                  class="px-4 pb-3 pt-4 w-full peer rounded-xl border border-primary-yellow focus:outline-none placeholder:text-sm"
                  placeholder=" " />
                <label for="email"
                  class="absolute text-sm duration-300 text-secondary-gray transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-Mail</label>
              </div>
              <div class="text-xs pt-1">
                <div v-for="error of v$.email.$errors" :key="error.$uid">
                  <div class="text-red-400">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- User E-Mail END -->
            <!-- User Phone START -->
            <div class="pt-6">
              <div class="relative">
                <input v-model="phone" type="text" id="phone" aria-describedby="phone"
                  class="px-4 pb-3 pt-4 w-full peer rounded-xl border border-primary-yellow focus:outline-none placeholder:text-sm"
                  placeholder=" " />
                <label for="phone"
                  class="absolute text-sm duration-300 text-secondary-gray transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  {{ $t("sharedMessages.phone") }}</label>
              </div>
              <div class="text-xs pt-1">
                <div v-for="error of v$.phone.$errors" :key="error.$uid">
                  <div class="text-red-400">{{ error.$message }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- User Phone END -->
          <!-- User Information END -->
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
          <!-- Submit START -->
          <NuxtLink :to="localePath('/')" @click="submit()"
            class="flex items-center justify-center rounded-xl p-4 bg-primary-yellow cursor-pointer mt-8 text-white h-16">
            <div v-if="!loading" class="flex items-center justify-center h-full font-bold text-xl whitespace-nowrap">
              {{ $t("sharedMessages.reserveParking") }}
            </div>
            <LoadingSpinerIcon v-if="loading" />
          </NuxtLink>
          <!-- Submit END -->
          <!-- Note START -->
          <div
            class="flex justify-center items-center gap-1 pt-4 text-xs xl:text-lg transition ease-in-out duration-500">
            <CheckIcon class="text-secondary-gray" />
            <p>{{ $t("sharedMessages.freeParking") }}</p>
          </div>
          <!-- Note END -->
        </div>
      </Transition>
    </client-only>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '../stores/cart'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

export default {
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();
    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
    return {
      cartStore,
      router,
      formatDate,
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      loading: false,
      fullName: '',
      email: '',
      phone: '',
      timeFrom: '',
      timeTo: '',
    }
  },
  methods: {
    ...mapActions(useCartStore, ['closeCart', 'openCart']),
    async submit() {
      const valid = await this.v$.$validate()
      if (valid) {

        this.loading = true;
        // Data
        let formData = new FormData();

        formData.append('full_name', this.fullName);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('date_from', this.formatDate(this.cartStore.cart.dateFrom));
        formData.append('date_to', this.formatDate(this.cartStore.cart.dateTo));
        formData.append('time_from', this.timeFrom);
        formData.append('time_to', this.timeTo);
        formData.append('days_total', this.cartStore.cart.duration);
        formData.append('total', this.cartStore.cart.total);

        // Settings
        const settings = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: formData,
        };
console.log(this.formatDate(this.cartStore.cart.dateFrom))
        let fetchResponse = await fetch(
          "https://dev.nikola-arsic.com/api/order/store",
          settings
        ).then((response) => {
          this.loading = false;
          if (response.ok) {
            return response.json();
          }
          throw new Error('Greška');
        })
          .then((responseJson) => {
            if (responseJson.status == 'success') {
              this.closeCart()
              this.router.push({ path: "/rezervacija-uspesna" });
            }
          })
          .catch((error) => {
            console.log(error)
          });

      }
    }
  },
  validations() {
    return {
      fullName: {
        required: helpers.withMessage('Unesi puno ime i prezime', required)
      },
      email: {
        required: helpers.withMessage('Unesi E-Mail adresu', required),
        email: helpers.withMessage('Unesi važeću E-Mail adresu', email),
      },
      phone: {
        required: helpers.withMessage('Unesi broj telefona', required)
      },
      timeFrom: {
        required: helpers.withMessage('Unesi vreme od', required),
        format: helpers.withMessage('Vreme u formatu ČČ:MM', helpers.regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/))
      },
      timeTo: {
        required: helpers.withMessage('Unesi vreme do', required),
        format: helpers.withMessage('Vreme u formatu ČČ:MM', helpers.regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/))
      },
    }
  }
}
</script>
