<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="sponsors"
    :ui="{
      root: 'scroll-mt-(--ui-header-height)',
      container: 'py-20 md:py-24 lg:py-32'
    }"
  >
    <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <Motion v-bind="scrollMotion()">
        <h2 class="font-display text-3xl font-semibold tracking-tight text-fbis-blue md:text-4xl">
          {{ page.sponsors.title }}
        </h2>
      </Motion>
      <UButton
        :to="page.sponsors.buttonTo"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ page.sponsors.buttonLabel }}
      </UButton>
    </div>

    <UMarquee
      pause-on-hover
      :ui="{
        root: 'mt-12',
        content: 'items-center gap-14 md:gap-20'
      }"
    >
      <div
        v-for="logo in page.sponsors.logos"
        :key="logo.id"
        class="flex h-24 w-36 shrink-0 items-center justify-center"
      >
        <img
          :src="logo.src"
          :alt="logo.alt"
          class="h-20 w-20 object-contain"
          width="80"
          height="80"
          loading="lazy"
          decoding="async"
        >
      </div>
    </UMarquee>
  </UPageSection>
</template>
