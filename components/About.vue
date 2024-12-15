<template>

  <section
    id="about"
    class="max-w-[108rem] flex items-start justify-center px-4 pb-8 sm:px-12 sm:pb-12 md:px-16 md-pb-16 xl:px-[15.75rem] xl:pb-8xl"
  >

    <div class="w-full flex flex-col items-start gap-6">

      <h1
        :class="{
          'animate-slide-in-left': isInView,
        }"
        class="text-neutral900 font-bold leading-[150%] text-8"
      >
        About
      </h1>

      <div class="w-full flex flex-wrap items-start gap-6">

        <div
          v-for="aboutCardItem in aboutCardItems"
          :key="aboutCardItem.title"
          
          class="flex flex-col sm:flex-row gap-6 sm:flex-[1_1_28rem]"
        >

          <div
            :class="{
              'animate-zoom-in': isInView,
            }"
            class="h-full aspect-video sm:size-32 shrink-0 rounded-lg overflow-clip"
          >

            <img
              
              :src="aboutCardItem.image"
              :alt="aboutCardItem.title"
              class="size-full object-cover"
            >

          </div>

          <div
            :class="{
              'animate-zoom-in': isInView,
            }"
            class="w-full flex flex-col animate-duration-1000"
          >

            <h2 class="text-neutral900 font-bold leading-[150%] text-5.5 leading-[1.375rem]">
              {{ aboutCardItem.title }}
            </h2>

            <p class="text-neutral700 leading-[170%] text-5">
              {{ aboutCardItem.description }}
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup lang="ts">

const aboutCardItems = ref([
  {
    title: 'OUR CHURCH',
    description: `We are a vibrant community spreading God's love through worship, fellowship, and service in a welcoming environment.`,
    image: '/images/about-our-church.jpeg',
  },
  {
    title: 'OUR PURPOSE',
    description: `Our purpose is to transform lives through Christ's message of hope and healing, making a positive impact in our community.`,
    image: '/images/about-our-purpose.jpeg',
  },
])

const isInView = ref(false)

onMounted(() => {
  const hero = document.getElementById('about')

  if (hero) {
    scrollAnimate(hero, isInView)
  }
})

</script>
