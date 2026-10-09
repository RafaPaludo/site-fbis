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
    <UPageGrid>
      <div class="relative isolate grid w-full place-items-center lg:col-span-2 lg:py-8">
        <div
          aria-hidden="true"
          class="pointer-events-none col-start-1 row-start-1 h-[min(80vh,640px)] aspect-[9/16] translate-x-5 translate-y-5 rotate-16 rounded-lg bg-fbis-yellow-soft lg:block"
        />
        <video
          class="relative z-10 col-start-1 row-start-1 mx-auto h-[min(80vh,640px)] aspect-[9/16] max-w-full rounded-lg bg-black object-contain"
          controls
          playsinline
          preload="metadata"
          aria-label="Aftermovie do FBIS"
        >
          <source
            src="/videos/FBIS%20(Aftermovie-Reels).mp4"
            type="video/mp4"
          >
          Seu navegador não oferece suporte à reprodução de vídeo.
        </video>
      </div>
      <div class="flex w-full flex-col justify-center gap-8 px-4 py-6 lg:w-auto lg:px-0 relative">
        <Motion
          v-for="(item, index) in page.lastExperience.items"
          :key="item.label"
          v-bind="staggerMotion(index)"
        >
          <div class="flex flex-col text-center lg:text-left">
            <span class="font-display text-5xl leading-none font-bold text-fbis-yellow sm:text-6xl">{{ item.label.split(' ')[0] }}</span>
            <span class="mt-2 text-base font-medium text-default">{{ item.label.split(' ').slice(1).join(' ') }}</span>
          </div>
        </Motion>
      </div>
    </UPageGrid>
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
