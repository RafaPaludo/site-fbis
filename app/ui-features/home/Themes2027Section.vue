<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

const props = defineProps<{ page: HomePageContent }>()
const selectedThemeId = ref(props.page.themes2027.items[0]?.id)
const selectedTheme = computed(() => props.page.themes2027.items.find(item => item.id === selectedThemeId.value) ?? props.page.themes2027.items[0])
</script>

<template>
  <UPageSection
    id="temas-2027"
    orientation="horizontal"
    :ui="{ headline: 'text-left' }"
  >
    <template #headline>
      <Motion
        as="span"
        v-bind="scrollMotion()"
      >
        {{ page.themes2027.headline }}
      </Motion>
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
      >
        {{ page.themes2027.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
      >
        {{ page.themes2027.description }}
      </Motion>
    </template>
    <template #features>
      <ul class="mt-2 space-y-2">
        <li
          v-for="item in page.themes2027.items"
          :key="item.id"
        >
          <button
            :id="`theme-button-${item.id}`"
            type="button"
            class="group flex w-full items-center gap-3 rounded-md px-3 py-3 text-left font-semibold text-fbis-blue transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            :class="{ 'bg-primary/5': item.id === selectedThemeId }"
            :aria-pressed="item.id === selectedThemeId"
            aria-controls="theme-panel"
            @click="selectedThemeId = item.id"
          >
            <UIcon
              :name="item.icon"
              class="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </template>
    <Motion
      v-if="selectedTheme"
      v-bind="scrollMotion(0.15)"
      id="theme-panel"
      :key="selectedTheme.id"
      aria-live="polite"
      class="overflow-hidden rounded-lg bg-muted"
    >
      <img
        :src="selectedTheme.image.src"
        :alt="selectedTheme.image.alt"
        class="aspect-[4/3] h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      >
    </Motion>
  </UPageSection>
</template>
