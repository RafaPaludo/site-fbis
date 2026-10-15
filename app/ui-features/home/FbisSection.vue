<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="evento"
    orientation="horizontal"
    :ui="{
      root: 'bg-fbis-off-white text-fbis-black',
      container: 'lg:items-start',
      title: 'text-fbis-black',
      description: 'text-fbis-red-dark',
      features: 'text-fbis-gray'
    }"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
      >
        {{ page.fbis.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
      >
        {{ page.fbis.description }}
      </Motion>
    </template>
    <template #features>
      <div class="flex flex-col justify-start">
        <Motion
          as="div"
          v-bind="scrollMotion(0.3)"
          class="space-y-4 text-lg leading-relaxed text-fbis-gray"
        >
          <p
            v-for="(paragraph, index) in page.fbis.paragraph"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </Motion>
      </div>
    </template>

    <div class="flex gap-4 flex-col">
      <Motion
        v-for="(image, index) in page.fbis.images"
        :key="image.src"
        v-bind="scrollMotion((index + 1) * 0.08)"
      >
        <UPageCard
          variant="outline"
          class="w-full overflow-hidden ring-fbis-gray/20"
          :ui="{
            container: 'relative flex flex-col flex-1 sm:p-0 p-0'
          }"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="block aspect-video w-full object-cover"
            loading="lazy"
            decoding="async"
          >
        </UPageCard>
      </Motion>
    </div>
  </UPageSection>
</template>
