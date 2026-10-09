<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'
import staggerMotion from '~/utils/stagger-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageSection
    id="localizacao"
    :ui="{
      root: 'scroll-mt-(--ui-header-height)',
      container: 'lg:py-24',
      title: 'text-left'
    }"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ page.location.title }}
      </Motion>
    </template>

    <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <Motion
        v-bind="scrollMotion()"
        class="space-y-4 text-lg text-fbis-gray"
      >
        <p class="font-semibold text-fbis-blue">
          {{ page.location.date }}
        </p>
        <address class="space-y-1 not-italic">
          <p>{{ page.location.venue }}</p>
          <p>{{ page.location.address }}</p>
          <p>{{ page.location.city }}</p>
        </address>
      </Motion>

      <Motion
        v-bind="scrollMotion(0.1)"
        class="overflow-hidden rounded-lg border border-default bg-muted"
      >
        <iframe
          :src="page.location.mapEmbed"
          title="Mapa de Brasília"
          class="h-64 w-full md:h-80"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </Motion>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-3 lg:mt-16">
      <Motion
        v-for="(service, index) in page.location.services"
        :key="service.id"
        v-bind="staggerMotion(index)"
        class="border-t border-default pt-6"
      >
        <UIcon
          :name="service.icon"
          class="size-6 text-primary"
          aria-hidden="true"
        />
        <h3 class="mt-4 font-display text-xl font-semibold text-fbis-blue">
          {{ service.title }}
        </h3>
        <p class="mt-2 text-fbis-gray">
          {{ service.description }}
        </p>
      </Motion>
    </div>
  </UPageSection>
</template>
