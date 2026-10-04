<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="fbis"
    :ui="{ root: 'scroll-mt-(--ui-header-height)', container: 'lg:py-24', headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center', title: '', description: 'text-dimmed' }"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ page.fbis.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        {{ page.fbis.description }}
      </Motion>
    </template>
    <Motion
      as="span"
      v-bind="scrollMotion(0.1)"
      class="inline-block"
    >
      <p>{{ page.fbis.paragraph }}</p>
    </Motion>
    <Motion
      as="span"
      v-bind="scrollMotion(0.1)"
      class="inline-block"
    >
      <img
        :src="page.fbis.image.src"
        :alt="page.fbis.image.alt"
        class="mx-auto rounded-lg"
      >
    </Motion>
  </UPageSection>
</template>
