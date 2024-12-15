<template>

  <nav class="w-full max-w-[108rem] flex items-center justify-center px-4 py-8 sm:p-12 md:p-16 xl:px-[15.75rem]">

    <div class="w-full flex items-center justify-between">

      <div class="w-max flex flex-col items-start">

        <h1 class="font-serrat text-neutral900 text-xs tracking-[0.1125rem] font-extrabold leading-[120%] sm:text-sm md:text-4.5">
          GRACE OF GOD
        </h1>

        <div class="w-full flex items-center gap-1">

          <h1 class="font-serrat text-neutral900 text-xs font-normal leading-[120%] sm:text-sm md:text-4.5">
            MISSION
          </h1>

          <div class="h-0.25 bg-accent grow-1" />

        </div>

      </div>

      <div class="flex items-center gap-6">

        <NuxtLink
          to="https://www.facebook.com/favorodera"
          target="_blank"
          rel="noopener noreferrer"
          class="group"
        >

          <span class="i-hugeicons:facebook-02 size-4 md:size-6 group-hover:scale-110 property-transform duration-500 ease" />

        </NuxtLink>

        <NuxtLink
          to="https://www.facebook.com/favorodera"
          target="_blank"
          rel="noopener noreferrer"
          class="group"
        >

          <span class="i-hugeicons:new-twitter size-4 md:size-6 group-hover:scale-110 property-transform duration-500 ease" />

        </NuxtLink>

      </div>

    </div>

  </nav>

</template>
