<template>
  <main>
    <Header />
    <LazyContainer class="mt-20">
      <!-- Section 1 Start -->
      <div
        class="flex flex-col lg:flex-row gap-0 lg:gap-12 items-start lg:items-center"
      >
        <div class="w-full lg:w-1/2">
          <h2
            class="text-headline text-left text-primary-black w-full md:w-4/5"
          >
            {{ $t('sectionOne.headline') }}
            <span class="text-primary-yellow">
              {{ $t('sectionOne.headlineSpan') }}</span
            >.
          </h2>
          <p
            class="text-paragraph text-left text-secondary-gray mt-6 lg:mt-8 xl:mt-12"
          >
            {{ $t('sectionOne.paragraphOne') }}
            <span class="text-primary-yellow">{{
              $t('sectionOne.paragraphSpan')
            }}</span>
            {{ $t('sectionOne.paragraphTwo') }}
          </p>
        </div>
        <div class="hidden lg:block w-1/2 h-auto rounded-lg overflow-hidden">
          <nuxt-picture
            src="/images/aerodrom-parking-beograd.webp"
            class="object-contain w-full"
            alt="Aerodrom parking od vec 700 dinara po danu"
            loading="lazy"
          />
        </div>
      </div>
      <!-- Section 1 End -->
      <!-- Section 2 Start -->
      <div class="mt-24 md:mt-44 xl:mt-40">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t('sectionTwo.headlineOne') }}
          <span class="text-primary-yellow">
            {{ $t('sectionTwo.headlineSpan') }}</span
          >
          {{ $t('sectionTwo.headlineTwo') }}.
        </h2>
        <div
          class="flex flex-col xl:flex-row items-start gap-12 mt-16 md:mt-20 xl:mt-24"
        >
          <!-- Icon Box 1 Start -->
          <div class="flex flex-col gap-4">
            <!-- Icon -->
            <div class="flex flex-row items-center gap-2">
              <div
                class="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="Besplatan transfer"
                >
                  <path
                    d="M4.33333 7.66667L1 4.33333M1 4.33333L4.33333 1M1 4.33333H16"
                    stroke="#FAF9F7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.6667 8.00002L16 11.3334M16 11.3334L12.6667 14.6667M16 11.3334L1 11.3334"
                    stroke="#FAF9F7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- Headline -->
              <h3 class="text-2xl text-primary-black font-semibold">
                {{ $t('sectionTwo.iconOneHeadline') }}
              </h3>
            </div>
            <p class="text-paragraph text-left text-secondary-gray">
              {{ $t('sectionTwo.iconOneParagraph') }}
            </p>
          </div>
          <!-- Icon Box 1 End -->
          <!-- Icon Box 2 Start -->
          <div class="flex flex-col gap-4">
            <!-- Icon -->
            <div class="flex flex-row items-center gap-2">
              <div
                class="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="Povoljnije i od taksija"
                >
                  <path
                    d="M4.33332 4.33332H4.34166M4.33332 1H8.49998C8.92656 0.999992 9.35306 1.16271 9.67847 1.48816L15.5119 7.32148C16.1627 7.97231 16.1627 9.02764 15.5119 9.67847L9.67847 15.5118C9.02764 16.1627 7.97231 16.1627 7.32148 15.5118L1.48816 9.67847C1.16272 9.35306 1 8.92648 1 8.49998V4.33332C1 2.49238 2.49238 1 4.33332 1V1Z"
                    stroke="#FAF9F7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- Headline -->
              <h3 class="text-2xl text-primary-black font-semibold">
                {{ $t('sectionTwo.iconTwoHeadline') }}
              </h3>
            </div>
            <p class="text-paragraph text-left text-secondary-gray">
              {{ $t('sectionTwo.iconTwoParagraph') }}
            </p>
          </div>
          <!-- Icon Box 2 End -->
          <!-- Icon Box 3 Start -->
          <div class="flex flex-col gap-4">
            <!-- Icon -->
            <div class="flex flex-row items-center gap-2">
              <div
                class="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center"
              >
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="Jednostavna rezervacija"
                >
                  <path
                    d="M7.5 14.9286H7.50929M2.85714 17.7143H12.1429C13.1686 17.7143 14 16.8828 14 15.8571V2.85714C14 1.83147 13.1686 1 12.1429 1H2.85714C1.83147 1 1 1.83147 1 2.85714V15.8571C1 16.8828 1.83147 17.7143 2.85714 17.7143Z"
                    stroke="#FAF9F7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- Headline -->
              <h3 class="text-2xl text-primary-black font-semibold">
                {{ $t('sectionTwo.iconThreeHeadline') }}
              </h3>
            </div>
            <p class="text-paragraph text-left text-secondary-gray">
              <a href="#header" class="text-primary-yellow underline"
                >{{ $t('sectionTwo.iconThreeLink') }}
              </a>
              {{ $t('sectionTwo.iconThreeParagraph') }}
            </p>
          </div>
        </div>
        <!-- Section 2 End -->
        <!-- Section 3 Start -->
        <div
          class="flex flex-col xl:flex-row gap-0 xl:gap-12 items-start xl:items-center mt-24 md:mt-44 xl:mt-40"
        >
          <div class="w-full xl:w-1/2">
            <h2
              class="text-headline text-left text-primary-black w-full md:w-4/5"
            >
              {{ $t('sectionThree.headlineOne') }}
              <span class="text-primary-yellow">
                {{ $t('sectionThree.headlineSpan') }}</span
              >?
            </h2>
            <p
              class="text-paragraph text-left text-secondary-gray mt-6 md:mt-8 xl:mt-12"
            >
              {{ $t('sectionThree.paragraph') }}
            </p>
          </div>
          <div class="mx-auto rounded-lg overflow-hidden mt-16">
            <nuxt-picture
              src="/images/kako-funcionise-aerodrom-parking.webp"
              class="w-full"
              alt="Aerodrom parking Beograd od vec 700 dinara po danu"
              loading="lazy"
            />
          </div>
        </div>
        <div
          class="mx-auto flex flex-col items-center gap-4 xl:gap-12 mt-20 md:mt-24 xl:mt-44"
        >
          <div
            class="w-16 h-16 border-2 border-primary-yellow rounded-full flex items-center justify-center text-primary-black font-bold text-2xl"
          >
            1
          </div>
          <p
            class="text-paragraph text-center text-primary-black font-bold w-full lg:w-3/5"
          >
            <a href="#header" class="text-primary-yellow underline">{{
              $t('sectionThree.stepOneLink')
            }}</a>
            <br />
            {{ $t('sectionThree.stepOne') }}
          </p>
          <div
            class="w-16 h-16 border-2 border-primary-yellow rounded-full flex items-center justify-center text-primary-black font-bold text-2xl mt-12 xl:mt-0"
          >
            2
          </div>
          <p
            class="text-paragraph text-center text-primary-black font-bold w-full lg:w-3/5"
          >
            {{ $t('sectionThree.stepTwo') }}
          </p>
          <div
            class="w-16 h-16 border-2 border-primary-yellow rounded-full flex items-center justify-center text-primary-black font-bold text-2xl mt-12 xl:mt-0"
          >
            3
          </div>
          <p
            class="text-paragraph text-center text-primary-black font-bold w-full lg:w-3/5"
          >
            {{ $t('sectionThree.stepThree') }}
          </p>
          <a
            class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl mt-6"
            href="#header"
          >
            {{ $t('sectionThree.button') }}
          </a>
        </div>
        <!-- Section 3 End -->
      </div>
    </LazyContainer>
    <!-- Review Start -->
    <div
      class="bg-primary-yellow my-20 md:my-24 xl:my-32 py-20 md:py-24 xl:py-28 px-4 md:px-36 lg:px-56 xl:px-96"
    >
      <div class="mx-auto">
        <h2 class="text-headline text-primary-white">
          {{ $t('sectionReviews.headlineOne') }}<br />
          {{ $t('sectionReviews.headlineTwo') }}
        </h2>
        <div class="mt-16 md:mt-20 xl:mt-40 relative">
          <!-- Review right top -->
          <div class="inline-block mr-4 mb-4">
            <div
              class="bg-white flex items-center justify-start -top-6 xl:-top-12 right-0 xl:-right-8 rounded-lg py-2 xl:py-4 pl-2 xl:pl-6 pr-6 xl:pr-12 gap-2"
            >
              <div
                class="flex items-center justify-items-start h-10 w-10 xl:h-16 xl:w-16 rounded-full overflow-hidden img-ratio img-square"
              >
                <figure>
                  <nuxt-picture
                    src="/images/avatars/mare.jpeg"
                    :imgAttrs="{
                      class:
                        'rounded-full h-10 w-10 xl:h-16 xl:w-16 object-cover object-center',
                    }"
                    alt="Marko Miljkovic review"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="flex flex-col justify-start pl-0 xl:pl-2">
                <h3 class="text-primary-black text-xs xl:text-lg font-semibold">
                  Marko Miljkovic
                </h3>
                <h3 class="text-secondary-gray text-xs xl:text-base">
                  {{ $t('sectionReviews.rated') }}
                  <span class="text-primary-yellow pl-0.5">5.0</span>
                </h3>
              </div>
            </div>
          </div>
          <!-- Review right middle -->
          <div class="inline-block mr-4 mb-4">
            <div
              class="bg-white flex items-center justify-start top-40 md:top-60 xl:top-64 right-0 xl:-right-8 rounded-lg py-2 xl:py-4 pl-2 xl:pl-6 pr-6 xl:pr-12 gap-2"
            >
              <div
                class="flex items-center justify-items-start h-10 w-10 xl:h-16 xl:w-16 rounded-full overflow-hidden img-ratio img-square"
              >
                <figure>
                  <nuxt-picture
                    src="/images/avatars/zeka.jpeg"
                    :imgAttrs="{
                      class:
                        'rounded-full h-10 w-10 xl:h-16 xl:w-16 object-cover object-center',
                    }"
                    alt=""
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="flex flex-col justify-start pl-0 xl:pl-2">
                <h3 class="text-primary-black text-xs xl:text-lg font-semibold">
                  Milos Zecevic
                </h3>
                <h3 class="text-secondary-gray text-xs xl:text-base">
                  {{ $t('sectionReviews.rated') }}
                  <span class="text-primary-yellow pl-0.5">5.0</span>
                </h3>
              </div>
            </div>
          </div>
          <!-- Review right bottom -->
          <div class="inline-block mr-4 mb-4">
            <div
              class="bg-white flex items-center justify-start -bottom-6 xl:-bottom-12 right-0 xl:-right-8 rounded-lg py-2 xl:py-4 pl-2 xl:pl-6 pr-6 xl:pr-12 gap-2"
            >
              <div
                class="flex items-center justify-items-start h-10 w-10 xl:h-16 xl:w-16 rounded-full overflow-hidden img-ratio img-square"
              >
                <figure>
                  <nuxt-picture
                    src="/images/avatars/vlada.jpeg"
                    :imgAttrs="{
                      class:
                        'rounded-full h-10 w-10 xl:h-16 xl:w-16 object-cover object-center',
                    }"
                    alt="Vladimir Todorovic review"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="flex flex-col justify-start pl-0 xl:pl-2">
                <h3 class="text-primary-black text-xs xl:text-lg font-semibold">
                  Vladimir Todorovic
                </h3>
                <h3 class="text-secondary-gray text-xs xl:text-base">
                  {{ $t('sectionReviews.rated') }}
                  <span class="text-primary-yellow pl-0.5">5.0</span>
                </h3>
              </div>
            </div>
          </div>
          <!-- Review left top -->
          <div class="inline-block mr-4 mb-4">
            <div
              class="bg-white flex items-center justify-start top-20 xl:top-28 left-0 xl:-left-8 rounded-lg py-2 xl:py-4 pl-2 xl:pl-6 pr-6 xl:pr-12 gap-2"
            >
              <div
                class="flex items-center justify-items-start h-10 w-10 xl:h-16 xl:w-16 rounded-full overflow-hidden img-ratio img-square"
              >
                <figure>
                  <nuxt-picture
                    src="/images/avatars/aca.png"
                    :imgAttrs="{
                      class:
                        'rounded-full h-10 w-10 xl:h-16 xl:w-16 object-cover object-center',
                    }"
                    alt="Aleksandar Petrovic review"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="flex flex-col justify-start pl-0 xl:pl-2">
                <h3 class="text-primary-black text-xs xl:text-lg font-semibold">
                  Aleksandar Petrovic
                </h3>
                <h3 class="text-secondary-gray text-xs xl:text-base">
                  {{ $t('sectionReviews.rated') }}
                  <span class="text-primary-yellow pl-0.5">5.0</span>
                </h3>
              </div>
            </div>
          </div>
          <!-- Review left bottom -->
          <div class="inline-block mr-4 mb-4">
            <div
              class="bg-white flex items-center justify-start top-64 md:top-96 left-0 rounded-lg py-2 xl:py-4 pl-2 xl:pl-6 pr-6 xl:pr-12 gap-2"
            >
              <div
                class="flex items-center justify-items-start h-10 w-10 xl:h-16 xl:w-16 rounded-full overflow-hidden img-ratio img-square"
              >
                <figure>
                  <nuxt-picture
                    src="/images/avatars/aleksa.png"
                    :imgAttrs="{
                      class:
                        'rounded-full h-10 w-10 xl:h-16 xl:w-16 object-cover object-center',
                    }"
                    alt="Aleksa Camilovic review"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="flex flex-col justify-start pl-0 xl:pl-2">
                <h3 class="text-primary-black text-xs xl:text-lg font-semibold">
                  Aleksa Camilovic
                </h3>
                <h3 class="text-secondary-gray text-xs xl:text-base">
                  {{ $t('sectionReviews.rated') }}
                  <span class="text-primary-yellow pl-0.5">5.0</span>
                </h3>
              </div>
            </div>
          </div>
          <div class="inline-block mr-4 mb-4">
            <div
              class="bg-white flex items-center justify-start top-64 md:top-96 left-0 rounded-lg py-2 xl:py-4 pl-2 xl:pl-6 pr-6 xl:pr-12 gap-2"
            >
              <div
                class="flex items-center justify-items-start h-10 w-10 xl:h-16 xl:w-16 rounded-full overflow-hidden img-ratio img-square"
              >
                <figure>
                  <nuxt-picture
                    src="/images/avatars/laki.jpeg"
                    :imgAttrs="{
                      class:
                        'rounded-full h-10 w-10 xl:h-16 xl:w-16 object-cover object-center',
                    }"
                    alt="Danica Vukovic review"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div class="flex flex-col justify-start pl-0 xl:pl-2">
                <h3 class="text-primary-black text-xs xl:text-lg font-semibold">
                  Lazar Stanojevic
                </h3>
                <h3 class="text-secondary-gray text-xs xl:text-base">
                  {{ $t('sectionReviews.rated') }}
                  <span class="text-primary-yellow pl-0.5">5.0</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Review End -->
    <Container>
      <!-- Section 5 Start -->
      <div class="mt-20 md:mt-24 xl:mt-28">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t('sectionSix.headline') }}
          <span class="text-primary-yellow">{{
            $t('sectionSix.headlineSpan')
          }}</span
          >.
        </h2>
        <div
          class="flex flex-col xl:flex-row items-start gap-12 mt-20 md:mt-24 xl:mt-28"
        >
          <!-- Icon Box 1 Start -->
          <div class="flex flex-col gap-4 w-full lg:w-1/3">
            <!-- Icon -->
            <div class="flex flex-row items-center gap-2">
              <div
                class="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center"
              >
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2667 4.42222L15.1618 2.47464C15.7307 2.19021 16.4 2.60387 16.4 3.23987V9.02682C16.4 9.66276 15.7307 10.0764 15.1618 9.79203L11.2667 7.84445M2.71111 11.2667H9.55556C10.5006 11.2667 11.2667 10.5006 11.2667 9.55556V2.71111C11.2667 1.76609 10.5006 1 9.55556 1H2.71111C1.76609 1 1 1.76609 1 2.71111V9.55556C1 10.5006 1.76609 11.2667 2.71111 11.2667Z"
                    stroke="#F5FFFA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- Headline -->
              <h3 class="text-2xl text-primary-black font-semibold">
                {{ $t('sectionSix.iconOneHeadline') }}
              </h3>
            </div>
            <p class="text-paragraph text-left text-secondary-gray">
              {{ $t('sectionSix.iconOneParagraph') }}
            </p>
          </div>
          <!-- Icon Box 1 End -->
          <!-- Icon Box 2 Start -->
          <div class="flex flex-col gap-4 w-full lg:w-1/3">
            <!-- Icon -->
            <div class="flex flex-row items-center gap-2">
              <div
                class="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2.55556C1 1.69645 1.69645 1 2.55556 1H5.10608C5.44085 1 5.73807 1.21422 5.84394 1.53182L7.00888 5.02672C7.1313 5.39392 6.96509 5.79524 6.6189 5.96834L4.86323 6.84617C5.72053 8.7476 7.2524 10.2795 9.15383 11.1368L10.0316 9.3811C10.2048 9.03491 10.6061 8.8687 10.9733 8.99112L14.4682 10.1561C14.7858 10.2619 15 10.5591 15 10.894V13.4444C15 14.3036 14.3036 15 13.4444 15H12.6667C6.22335 15 1 9.77668 1 3.33333V2.55556Z"
                    stroke="#F5FFFA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- Headline -->
              <h3 class="text-2xl text-primary-black font-semibold">
                {{ $t('sectionSix.iconTwoHeadline') }}
              </h3>
            </div>
            <p class="text-paragraph text-left text-secondary-gray">
              {{ $t('sectionSix.iconTwoParagraph') }}
            </p>
          </div>
          <!-- Icon Box 2 End -->
          <!-- Icon Box 3 Start -->
          <div class="flex flex-col gap-4 w-full lg:w-1/3">
            <!-- Icon -->
            <div class="flex flex-row items-center gap-2">
              <div
                class="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3333 4.11111C11.1925 4.11111 11.8889 4.80756 11.8889 5.66667M15 5.66667C15 8.24399 12.9107 10.3333 10.3333 10.3333C9.86184 10.3333 9.40677 10.2634 8.97774 10.1334L7.22222 11.8889H5.66667V13.4444H4.11111V15H1.77778C1.34823 15 1 14.6518 1 14.2222V12.211C1 12.0048 1.08195 11.8069 1.2278 11.6611L5.86661 7.02226C5.73658 6.59331 5.66667 6.13813 5.66667 5.66667C5.66667 3.08934 7.75601 1 10.3333 1C12.9107 1 15 3.08934 15 5.66667Z"
                    stroke="#F5FFFA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <!-- Headline -->
              <h3 class="text-2xl text-primary-black font-semibold">
                {{ $t('sectionSix.iconThreeHeadline') }}
              </h3>
            </div>
            <p class="text-paragraph text-left text-secondary-gray">
              {{ $t('sectionSix.iconThreeParagraph') }}
            </p>
          </div>
          <!-- Icon Box 3 End -->
        </div>
      </div>
      <!-- Section 5 End -->
      <!-- Prices Start -->
      <h2
        class="text-headline text-left text-primary-black w-full md:w-4/5 mt-20 md:mt-24 xl:mt-28"
      >
        {{ $t('sectionSeven.headline') }}
        <span class="text-primary-yellow">{{
          $t('sectionSeven.headlineSpan')
        }}</span
        >.
      </h2>
      <p
        class="text-left text-paragraph text-primary-black mt-6 md:mt-8 xl:mt-12"
      >
        {{ $t('sectionSeven.paragraph') }}
      </p>
      <!-- Table Start -->
      <table class="table-auto w-full mt-12 md:mt-16 text-sm">
        <thead class="border border-gray-400 h-8">
          <tr class="text-left">
            <th class="py-3 px-4 bg-gray-100 w-32 md:w-48">
              {{ $t('sectionSeven.tableDays') }}
            </th>
            <th
              class="py-3 px-4 bg-gray-100 border-x border-gray-400 text-right"
            >
              {{ $t('sectionSeven.tablePrice') }}
            </th>
            <th class="py-3 px-4 bg-gray-100 text-right">
              {{ $t('sectionSeven.tablePerDay') }}
            </th>
          </tr>
        </thead>
        <tbody class="border border-gray-400">
          <template v-if="pending"> loading.... </template>
          <template v-else v-for="(price, index) in data.prices">
            <tr v-if="index < 10" class="w-1/3 border border-gray-400">
              <td
                class="border border-gray-400 bg-gray-100 py-3 px-4 w-32 md:w-48"
              >
                {{ price.title }}
              </td>
              <td
                class="border border-gray-400 bg-white py-3 px-4 text-right font-bold"
              >
                {{ price.price_sm }} rsd
              </td>
              <td class="border border-gray-400 bg-white py-3 px-4 text-right">
                {{ Math.floor(price.price_sm / price.title.split(' ')[0]) }}/{{
                  $t('sharedMessages.day')
                }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <small class="flex justify-end mt-2 text-xs text-primary-black">{{
        $t('sectionSeven.tableFootnote')
      }}</small>
      <!-- Table End -->
      <div class="flex justify-center mt-8">
        <a
          class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl"
          href="cenovnik"
        >
          {{ $t('sectionSeven.button') }}
        </a>
      </div>
      <!-- Prices End -->
    </Container>
    <!-- Newsletter Start -->
    <Newsletter />
    <!-- Newsletter End -->
    <!-- FAQ Start -->
    <Lazycontainer>
      <div class="w-full">
        <h2 class="text-headline text-left text-primary-black w-full md:w-4/5">
          {{ $t('sectionNine.headline') }}
          <span class="text-primary-yellow">{{
            $t('sectionNine.headlineSpan')
          }}</span
          >.
        </h2>
      </div>
      <div class="my-12 mx-auto">
        <Lazyfaq class="py-8 lg:py-12 border-y border-secondary-gray">
          <template v-slot:title>
            <span
              class="text-paragraph text-primary-black font-semibold text-left pr-2"
              >{{ $t('sectionNine.faqOneTitle') }}</span
            >
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t('sectionNine.faqOneAnswer') }}
              <NuxtLink
                :to="localePath('/lokacija')"
                class="text-primary-yellow underline"
                >{{ $t('sectionNine.faqLink') }}</NuxtLink
              >.
            </p>
          </template>
        </Lazyfaq>
        <Lazyfaq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span
              class="text-paragraph text-primary-black font-semibold text-left pr-2"
              >{{ $t('sectionNine.faqTwoTitle') }}</span
            >
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t('sectionNine.faqTwoAnswer') }}
            </p>
          </template>
        </Lazyfaq>
        <Lazyfaq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span
              class="text-paragraph text-primary-black font-semibold text-left pr-2"
              >{{ $t('sectionNine.faqThreeTitle') }}</span
            >
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t('sectionNine.faqThreeAnswer') }}
            </p>
          </template>
        </Lazyfaq>
        <Lazyfaq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span
              class="text-paragraph text-primary-black font-semibold text-left pr-2"
              >{{ $t('sectionNine.faqFourTitle') }}</span
            >
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t('sectionNine.faqFourAnswer') }}
            </p>
          </template>
        </Lazyfaq>
        <Lazyfaq class="py-8 lg:py-12 border-b border-secondary-gray">
          <template v-slot:title>
            <span
              class="text-paragraph text-primary-black font-semibold text-left pr-2"
              >{{ $t('sectionNine.faqFiveTitle') }}</span
            >
          </template>
          <template v-slot:content>
            <p class="pt-4 lg:pt-8 text-secondary-gray text-lg">
              {{ $t('sectionNine.faqFiveAnswer') }}
              <NuxtLink
                :to="localePath('cenovnik')"
                class="text-primary-yellow underline"
              >
                {{ $t('sectionNine.faqLink') }}</NuxtLink
              >.
            </p>
          </template>
        </Lazyfaq>
        <div class="my-12 flex justify-center">
          <a
            class="bg-primary-yellow text-primary-white px-6 py-4 text-base font-semibold rounded-xl"
            href="#header"
          >
            {{ $t('sectionNine.button') }}
          </a>
        </div>
      </div>
    </Lazycontainer>
    <!-- FAQ End -->
  </main>
</template>
<script setup>
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
const { t } = useI18n();

const { pending, data: data } = await useFetch(
  'https://dev.nikola-arsic.com/api/prices/get',
  {
    onResponse({ response }) {
      cartStore.setPrices(response._data.prices);
    },
  }
);

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: t('seo.home.schemaTitle'),
  address: {
    '@type': 'PostalAddress',
    postalCode: '11271',
    streetAddress: 'Sremskih partizana 141',
    addressCountry: 'SRB',
    addressRegion: 'Surčin',
    addressLocality: '',
  },
  image: 'https://carport.rs/public/images/serp-image.png',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '111',
    reviewCount: '111',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    opens: '00:00',
    closes: '24:00',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  priceRange: '$',
  url: '',
});

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: t('pageFaq.parkingOneTitle'),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t('pageFaq.parkingOneAnswer'),
      },
    },
    {
      '@type': 'Question',
      name: t('pageFaq.parkingTwoTitle'),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t('pageFaq.parkingTwoAnswer'),
      },
    },
    {
      '@type': 'Question',
      name: t('pageFaq.parkingThreeTitle'),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t('pageFaq.parkingThreeAnswer'),
      },
    },
    {
      '@type': 'Question',
      name: t('pageFaq.bookingFourTitle'),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t('pageFaq.bookingFourAnswer'),
      },
    },
    {
      '@type': 'Question',
      name: t('pageFaq.parkingFourTitle'),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t('pageFaq.parkingFourAnswer'),
      },
    },
  ],
});
definePageMeta({
  title: 'seo.home.title',
  ogTitle: 'seo.home.ogTitle',
  description: 'seo.home.description',
  ogImage: 'carport.rs/images/og-image.png',
  twitterCard: 'carport.rs/images/twitter-card.png',
});
</script>
