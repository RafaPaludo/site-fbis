<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="manifesto"
    :ui="{
      root: 'scroll-mt-(--ui-header-height) bg-fbis-blue text-white',
      container: 'py-20 md:py-24 lg:py-32',
      title: 'max-w-5xl text-left font-display text-5xl leading-[0.98] font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl'
    }"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        {{ page.manifesto.title }}
      </Motion>
    </template>
  </UPageSection>
</template>
