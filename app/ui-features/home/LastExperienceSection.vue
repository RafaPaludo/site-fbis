<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'
import staggerMotion from '~/utils/stagger-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="lastExperience"
    :ui="{ root: 'scroll-mt-(--ui-header-height)', container: 'lg:py-24', headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center', title: '', description: 'text-dimmed' }"
  >
    <template #headline>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        {{ page.lastExperience.headline }}
      </Motion>
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ page.lastExperience.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        {{ page.lastExperience.description }}
      </Motion>
    </template>
    <div class="flex flex-col lg:flex-row">
      <img
        :src="page.lastExperience.image.src"
        :alt="page.lastExperience.image.alt"
      >
      <div class="rounded-r-lg border border-default bg-default overflow-hidden flex lg:flex-col justify-end">
        <Motion
          v-for="(item, index) in page.lastExperience.items"
          :key="item.label"
          v-bind="staggerMotion(index)"
        >
          <UPageCard
            :title="item.label"
            class="rounded-none duration-300"
            :ui="{ leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10', title: 'text-sm tracking-tight', description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed' }"
          />
        </Motion>
      </div>
    </div>
    <UPageColumns>
      <UPageCard
        v-for="(testimonial, index) in page.lastExperience.testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
      >
        <template #footer>
          <UUser
            v-bind="testimonial"
            size="xl"
          />
        </template>
      </UPageCard>
    </UPageColumns>
  </UPageSection>
</template>
