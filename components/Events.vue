<template>

  <section
    id="events"
    class="w-full flex items-start justify-center px-4 py-8 sm:p-12 md:p-16 xl:px-[15.75rem] xl:py-8xl"
  >
  
    <div class="w-full max-w-[78.65rem] flex flex-col items-start gap-6">
  
      <h1
        :class="{
          'animate-slide-in-left': isInView,
        }"
        class="text-neutral900 font-bold leading-[150%] text-8"
      >
        Events
      </h1>
  
      <div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,37.5rem),1fr))] gap-6">
  
        <div
          v-for="eventsCardItem in eventsCardItems"
          :key="eventsCardItem.title"
          class="flex flex-col sm:flex-row gap-6 rounded-lg "
          :class="{
            'animate-zoom-in': isInView,
          }"
        >
  
          <div class="rounded-lg overflow-clip sm:w-32 aspect-video">
  
            <img
              :src="eventsCardItem.image"
              :alt="eventsCardItem.title"
              class="size-full object-cover"
            >
  
          </div>
  
          <div class="w-full flex flex-col gap-4">
  
            <div class="flex flex-col gap-2">
  
              <p class="text-neutral700 leading-[170%] text-5">
                {{ eventsCardItem.datetime }}
              </p>
  
              <h2 class="text-neutral900 font-bold leading-[150%] text-5.5 leading-[0.1375rem]">
                {{ eventsCardItem.title }}
              </h2>
  
            </div>
  
            <p class="text-neutral700 leading-[170%] text-5">
              {{ eventsCardItem.description }}
            </p>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </section>
  
</template>
  
<script setup lang="ts">
  
const eventsCardItems = ref([
  {
    title: 'YOUTH CONVECTION',
    datetime: 'Monday, May 22nd at 6:30 PM',
    description: `Join us for an inspiring Youth Convention where young people gather to explore faith, build friendships, and engage in meaningful discussions.`,
    image: '/images/events-01.jpeg',
  },
  {
    title: 'THANKSGIVING SERVICE',
    datetime: 'Sunday, May 22nd at 8:30 AM',
    description: `Celebrate gratitude at our Thanksgiving Service with uplifting worship and a chance to reflect on the blessings in our lives.`,
    image: '/images/events-02.jpeg',
  },
])
  
const isInView = ref(false)
  
onMounted(() => {
  const hero = document.getElementById('events')
  
  if (hero) {
    scrollAnimate(hero, isInView)
  }
})
  
</script>
