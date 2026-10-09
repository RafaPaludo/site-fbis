<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="patrocinadores"
    :ui="{
      wrapper: 'w-full flex-col md:flex-row md:items-center md:justify-between',
      title: 'text-left',
      links: 'mt-0 justify-end'
    }"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="flex justify-between"
      >
        {{ page.sponsors.title }}

        <UButton
          :to="page.sponsors.buttonTo"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          class="font-sans"
        >
          {{ page.sponsors.buttonLabel }}
        </UButton>
      </Motion>
    </template>

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
