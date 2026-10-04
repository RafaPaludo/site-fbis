<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'
import staggerMotion from '~/utils/stagger-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="whyParticipate"
    :ui="{ root: 'scroll-mt-(--ui-header-height)', container: 'lg:py-24', headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center', title: '', description: 'text-dimmed' }"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ page.whyParticipate.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        {{ page.whyParticipate.description }}
      </Motion>
    </template>
    <Motion
      v-for="(item, index) in page.whyParticipate.items"
      :key="item.label"
      v-bind="staggerMotion(index)"
    >
      <UPageFeature
        :title="item.label"
        :description="item.description"
        icon="i-lucide-swatch-book"
        class="rounded-none duration-300"
        :ui="{ leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10', title: 'text-sm tracking-tight', description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed' }"
      />
    </Motion>
  </UPageSection>
</template>
