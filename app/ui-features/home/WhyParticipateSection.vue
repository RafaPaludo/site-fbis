<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'
import staggerMotion from '~/utils/stagger-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="por-que-participar"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
      >
        {{ page.whyParticipate.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
      >
        {{ page.whyParticipate.description }}
      </Motion>
    </template>

    <UPageGrid>
      <Motion
        v-for="(item, index) in page.whyParticipate.items"
        :key="item.label"
        v-bind="staggerMotion(index)"
      >
        <UPageCard
          :title="item.label"
          :description="item.description"
          class="duration-300"
          variant="soft"
          :ui="{
            leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
            title: 'text-lg tracking-tight font-display',
            description: 'text-sm leading-relaxed text-dimmed'
          }"
        >
          <template #leading>
            <span class="font-display text-xl font-bold text-primary">{{ index + 1 }}</span>
          </template>
        </UPageCard>
      </Motion>
    </UPageGrid>
  </UPageSection>
</template>
