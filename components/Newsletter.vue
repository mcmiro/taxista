<template>
  <div class="bg-primary-yellow my-20 md:my-24 xl:my-28 py-20 md:py-24 xl:py-28 px-4 md:px-36 lg:px-56 xl:px-96"
    id="newsletter-section">
    <client-only>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-headline text-primary-white w-4/5 mb-6">
          {{ $t("sectionEight.headline") }}
        </h2>
        <p class="text-paragraph text-left text-primary-white">
          {{ $t("sectionEight.paragraph") }}
        </p>
        <div class="flex flex-col mt-12">
          <label for="email" class="text-primary-white font-semibold text-paragraph mb-4">{{
            $t("sectionEight.formLabel")
          }}</label>
          <div class="relative">
            <input v-model="email" type="email" id="newsletter" aria-describedby="newsletter"
              class="px-4 pb-3.5 pt-4 w-full peer rounded-xl border border-secondary-yellow bg-primary-yellow focus:outline-none text-primary-white placeholder:text-sm"
              placeholder=" " />
            <label for="newsletter"
              class="absolute text-sm text-primary-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{{
                $t("sectionEight.formPlaceholder")
              }}</label>
            <div class="text-xs pt-1">
              <div v-for="error of v$.email.$errors" :key="error.$uid">
                <div class="text-red-400">{{ error.$message }}</div>
              </div>
            </div>
          </div>
          <label class="flex items-start mt-4">
            <div class="w-5 h-5">
              <input type="checkbox" v-model="privacyCheck"
                class="w-5 h-5 bg-primary-white border-primary-white rounded-lg accent-primary-white" />
            </div>
            <span class="ml-2 text-sm text-primary-white">{{ $t("sectionEight.formLegal") }}</span>
          </label>
          <div class="text-xs pt-1">
            <div v-for="error of v$.privacyCheck.$errors" :key="error.$uid">
              <div class="text-red-400">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <button @click="setNewsletter()"
            class="bg-primary-white text-primary-black px-6 py-4 text-base font-semibold rounded-xl w-full text-center">
            {{ $t("sectionEight.formButton") }}
          </button>
        </div>

        <Transition name="slide-fade-long">
          <div class="fixed bottom-8 right-8 bg-primary-white rounded-lg px-8 py-4 w-full md:w-4/12 shadow-lg z-20"
            v-if="message">
            <div class="text-xl text-primary-black">
              {{ message }}
            </div>
          </div>
        </Transition>
      </div>
    </client-only>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, sameAs } from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      loading: false,
      email: '',
      privacyCheck: false,
      message: false
    }
  },
  methods: {
    async setNewsletter() {
      const valid = await this.v$.$validate()
      if (valid) {

        this.loading = true;
        // Data
        let formData = new FormData();
        formData.append('email', this.email);

        // Settings
        const settings = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "X-localization": "rs"
          },
          body: formData,
        };

        let fetchResponse = await fetch(
          "https://dev.nikola-arsic.com/api/mailchimp/put",
          settings
        ).then((response) => {
          this.loading = false;
          return response.json();
        })
          .then((responseJson) => {
            this.message = responseJson.message
          })
          .catch((error) => {
            console.log(error)
          });

        setTimeout(() => {
          this.message = ''
        }, 3500)
      }
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('Unesi E-Mail adresu', required),
        email: helpers.withMessage('Unesi važeću E-Mail adresu', email),
      },
      privacyCheck: {
        sameAs: helpers.withMessage('Prihvati uslove korišćenja', sameAs(true))
      },
    }
  }
}
</script>
