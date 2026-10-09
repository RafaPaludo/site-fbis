<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

const props = defineProps<{ page: HomePageContent }>()
const title = computed(() => {
  const words = props.page.manifesto.title.split(' ')
  return {
    highlight: words.slice(0, 2).join(' '),
    rest: words.slice(2).join(' ')
  }
})
</script>

<template>
  <UPageSection
    id="manifesto"
    :ui="{
      root: 'relative isolate overflow-hidden scroll-mt-(--ui-header-height) bg-fbis-blue text-white',
      container: 'relative z-10 py-24 md:py-32 lg:py-30',
      title: 'max-w-5xl text-left font-display text-5xl leading-[0.98] font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl'
    }"
  >
    <template #top>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute right-[-10rem] top-1/2 z-0 hidden -translate-y-1/2 md:block lg:right-[4%]"
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          class="size-[24rem] text-fbis-yellow opacity-15 lg:size-[34rem]"
        >
          <circle
            cx="300"
            cy="300"
            r="270"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="215"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-dasharray="3 12"
          />
          <circle
            cx="300"
            cy="300"
            r="155"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <circle
            cx="300"
            cy="300"
            r="92"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-dasharray="2 10"
          />
          <path
            d="M300 30v540M30 300h540M109 109l382 382M491 109 109 491"
            stroke="currentColor"
            stroke-width="1"
          />
          <circle
            cx="491"
            cy="109"
            r="7"
            fill="currentColor"
          />
        </svg>
      </div>
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="block"
      >
        <span
          aria-hidden="true"
          class="mb-4 block h-1 w-16 rounded-full bg-fbis-yellow md:mb-10"
        />
        <span class="block text-fbis-yellow">{{ title.highlight }}</span>
        <span class="block text-white">{{ title.rest }}</span>
      </Motion>
    </template>
  </UPageSection>
</template>
