<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'
import staggerMotion from '~/utils/stagger-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="palestrantes"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
      >
        {{ page.fbisSpeakers.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
      >
        {{ page.fbisSpeakers.description }}
      </Motion>
    </template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Motion
        v-for="(speaker, index) in page.fbisSpeakers.speakers"
        :key="speaker.name"
        v-bind="staggerMotion(index)"
      >
        <UPageCard
          :title="speaker.name"
          :description="speaker.bio"
          reverse
          class="duration-300"
          :ui="{ leading: 'mb-5 justify-center rounded-lg bg-primary/10', title: 'text-sm tracking-tight', description: 'line-clamp-3 text-sm leading-relaxed text-dimmed' }"
        />
      </Motion>
    </div>
  </UPageSection>
</template>
