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
    <UCarousel
      :items="page.fbisSpeakers.speakers"
      dots
      class="pb-12"
      :ui="{
        item: 'basis-full md:basis-1/3',
        container: 'p-1',
        prev: 'top-auto bottom-0 start-4',
        next: 'top-auto bottom-0 end-4',
        dots: 'inset-x-12 bottom-2'
      }"
    >
      <template #default="{ item: speaker, index }">
        <Motion
          v-bind="staggerMotion(index)"
          class="group/card relative pt-14"
        >
          <UPageCard
            :title="speaker.name"
            :description="speaker.bio"
            reverse
            class="transition-transform duration-300 ease-out hover:-translate-y-2 motion-reduce:transition-none"
            :ui="{
              root: 'overflow-visible',
              leading: 'mb-5 justify-center rounded-lg bg-primary/10',
              title: 'text-sm tracking-tight',
              description: 'line-clamp-3 text-sm leading-relaxed text-dimmed'
            }"
          >
            <img
              :src="speaker.image"
              :alt="`Foto de ${speaker.name}`"
              class=""
              loading="lazy"
            >
          </UPageCard>
        </Motion>
      </template>
    </UCarousel>
  </UPageSection>
</template>
