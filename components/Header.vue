<template>
  <header class="pt-8 pb-32 relative overflow-hidden" id="header">
    <div class="absolute left-0 top-0 z-0 w-full h-full bg-image">
      <div class="w-full h-full absolute left-0 top-0 bg-black opacity-70 z-20">
      </div>
      <nuxt-picture src="/images/header/taxi-porec-3.jpg" :imgAttrs="{ class: 'object-cover min-h-[100%] min-w-[100%] absolute top-1/2 -translate-y-1/2' }"
        alt="Taxi Porec vozilo" preload />
    </div>
    <div class="relative z-10">
      <TopBar />
      <Container class="container mx-auto text-primary-white flex flex-col justify-between lg:flex-row">
        <div class="w-full lg:w-1/2 mt-0 lg:mt-8">
          <h1 class="text-headline text-primary-white w-full">
            {{ $t("header.headline") }}<br>
            <span>{{ $t("header.headlineSpan") }}</span>
          </h1>
          <ul class="flex gap-4 text-xs md:text-md xl:text-lg mt-4 lg:mt-8 mb-4 lg:mb-8 text-primary-white">
            <li class="flex flex-row gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-primary-white">
                <path fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd" />
              </svg>
              {{ $t("header.iconOne") }}
            </li>
            <li class="flex flex-row gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-primary-white">
                <path fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd" />
              </svg>
              {{ $t("header.iconTwo") }}
            </li>
          </ul>
          <div class="pt-8 lg:pt-2">
            <p class="text-lg text-primary-white w-full lg:w-4/5">
              {{ $t("header.paragraph") }}<br>
              <span class="text-primary-yellow"> {{ $t("header.paragraphSpan") }}</span>.
            </p>
          </div>
        </div>
        <div class="pt-8 lg:pl-16 text-2xl">
          <h3 class="text-xl xl:text-headline font-bold">
            {{ $t("header.bookingHeadline") }}
          </h3>
          <div class="pt-2 -mx-2 lg:pt-6">
            <LazyPreBookingForm />
          </div>
        </div>
      </Container>
    </div>
  </header>
</template>
