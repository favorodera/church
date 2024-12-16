<template>

  <section
    id="events"
    class="w-full text-neutral100 flex-col gap-24 bg-neutral900 flex items-center justify-center px-4 pt-8 pb-5xl sm:px-12 sm:pt-12 md:pt-16 md:px-16 xl:px-[15.75rem] xl:pt-8xl"
  >
    
    <div class="w-full max-w-[78.65rem] flex flex-wrap gap-8 justify-between items-start gap-6">

      <div class="flex flex-col gap-12 max-w-[15.75rem]">

        <div class="w-full flex flex-col gap-12">

          <div class="w-max flex flex-col items-start">

            <h1 class="font-serrat text-xs tracking-[0.1125rem] font-extrabold leading-[120%] sm:text-sm md:text-4.5">
              GRACE OF GOD
            </h1>

            <div class="w-full flex items-center gap-1">

              <h1 class="font-serrat text-xs font-normal leading-[120%] sm:text-sm md:text-4.5">
                MISSION
              </h1>

              <div class="h-0.25 bg-accent grow-1" />

            </div>

          </div>

        </div>

        <div class="w-full flex flex-col items-start gap-8">

          <div class="w-full flex flex-col items-start gap-4">

            <h3 class="text-5.5 font-semibold  leading-[150%] tracking-[0.1375rem]">
              ADDRESS
            </h3>

            <p class="text-5 leading-[170%]">
              12554 N. Union Abbey Road
              United Way, WA 78400
            </p>

          </div>

          <div class="w-full flex flex-col items-start gap-4">

            <h3 class="text-5.5 font-semibold  leading-[150%] tracking-[0.1375rem]">
              CONTACT
            </h3>

            <div>
              <p class="text-5 leading-[170%]">
                (412) 321-4878
              </p>
              <p class="text-5 leading-[170%]">
                info@graceofgodchurch
              </p>
            </div>

          </div>

        </div>

      </div>

      <div class="flex flex-col gap-8 items-start max-w-[23rem]">

        <div class="flex flex-col items-start gap-4">

          <h3 class="text-5.5 font-semibold  leading-[150%] tracking-[0.1375rem]">
            MESSAGE
          </h3>

          <p class="text-5 leading-[170%]">
            Have any questions or would like to know more about us, please don't hesitate to reach out. May peace and joy be your portion!
          </p>

        </div>

        <form class="w-full flex flex-col gap-6">

          <label
            for="name"
            class="w-full flex flex-col gap-2 text-5 leading-[170%] font-semibold"
          >
            Name
            <input
              id="name-input"
              type="text"
              required
              name="name"
              placeholder="Clinton Harris"
              class="w-full outline-none rounded-lg px-4 py-2 bg-neutral800 h-[2.875rem]"
            >
          </label>

          <label
            for="email"
            class="w-full flex flex-col gap-2 text-5 leading-[170%] font-semibold"
          >
            E-mail
            <input
              id="email-input"
              type="email"
              required
              name="email"
              placeholder="myemail@gmail.com"
              class="w-full outline-none rounded-lg px-4 py-2 bg-neutral800 h-[2.875rem]"
            >
          </label>

          <label
            for="message"
            class="w-full flex flex-col gap-2 text-5 leading-[170%] font-semibold"
          >
            Message
            <textarea
              id="textarea"
              ref="textarea"
              name="textarea"
              placeholder="Enter your message here"
              required
              class="w-full outline-none rounded-lg p-4 min-h-[9.0625rem] bg-neutral800 resize-none"
              maxlength="1000"
              @input="textareaAutoGrow"
              @keydown.enter.exact="enterKeyModification"
            />
          </label>

          <button
            type="submit"
            class="w-max h-[2.875rem] px-12 rounded-lg b-2 b-accent text-5 leading-[170%] font-semibold text-accent shadow-[0px_4px_16px_0px_#0000001A] hover:scale-105 property-transform duration-500 ease"
          >
            Send
          </button>

        </form>
        
      </div>

    </div>

    <p class="text-4 leading-[170%]">
      &copy; {{ new Date().getFullYear() }} - Grace of God Mission
    </p>
    
  </section>
    
</template>

<script setup lang="ts">
const textarea = ref<HTMLTextAreaElement>()

function textareaAutoGrow() {
  if (!textarea.value) return

  textarea.value.style.height = 'auto'
  textarea.value.style.height = `${textarea.value.scrollHeight}px`
}

function enterKeyModification(event: KeyboardEvent) {
  const isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches

  if (event.key === 'Enter') {
    if (isMobileOrTablet) {
      return true
    }
    else if (!event.shiftKey) {
      event.preventDefault()
    }
  }
}
</script>
