<template>

  <section
    id="schedule"
    class="w-full bg-neutral400 flex items-start justify-center px-4 py-8 sm:p-12 md:p-16 xl:px-[15.75rem] xl:py-8xl"
  >

    <div class="w-full max-w-[78.65rem] flex flex-col items-start gap-6">

      <h1
        :class="{
          'animate-slide-in-left': isInView,
        }"
        class="text-neutral900 font-bold leading-[150%] text-8"
      >
        Weekly Schedule
      </h1>

      <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(min(100%,30rem),1fr))] gap-6">

        <div
          v-for="weeklyScheduleCardItem in weeklyScheduleCardItems"
          :key="weeklyScheduleCardItem.title"
          class="min-h-full flex flex-col sm:flex-row gap-6 bg-auxiliary500 p-4 rounded-lg"
          :class="{
            'animate-zoom-in': isInView,
          }"
        >

          <div class="rounded-lg bg-neutral100 p-4 min-w-40 h-min shadow-xl">

            <p class="text-5 font-bold leading-[170%] text-neutral900">
              {{ weeklyScheduleCardItem.day }}
            </p>
            <p class="text-5 font-normal leading-[170%] text-neutral700">
              {{ weeklyScheduleCardItem.time }}
            </p>

          </div>

          <div class="w-full flex flex-col">

            <h2 class="text-neutral900 font-bold leading-[150%] text-5.5 leading-[0.1375rem]">
              {{ weeklyScheduleCardItem.title }}
            </h2>

            <p class="text-neutral700 leading-[170%] text-5">
              {{ weeklyScheduleCardItem.description }}
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup lang="ts">

const weeklyScheduleCardItems = ref([
  {
    title: 'SUNDAY SERVICE',
    time: '8:00 AM',
    day: 'SUNDAY',
    description: `A vibrant gathering for worship and fellowship.`,
  },
  {
    title: 'MID-WEEK SERVICE',
    time: '6:30 PM',
    day: 'WEDNESDAY',
    description: `An opportunity for connection and spiritual enrichment.`,
  },
  {
    title: 'BIBLE STUDY',
    time: '6:30 PM',
    day: 'FRIDAY',
    description: `A session focused on deepening understanding of scripture.`,
  },
])

const isInView = ref(false)

onMounted(() => {
  const hero = document.getElementById('schedule')

  if (hero) {
    scrollAnimate(hero, isInView)
  }
})

</script>
