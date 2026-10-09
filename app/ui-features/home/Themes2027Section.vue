<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

const props = defineProps<{ page: HomePageContent }>()
const selectedThemeId = ref(props.page.themes2027.items[0]?.id)
const selectedTheme = computed(() => props.page.themes2027.items.find(item => item.id === selectedThemeId.value) ?? props.page.themes2027.items[0])
</script>

<template>
  <UPageSection
    id="themes-2027"
    :ui="{
      root: 'scroll-mt-(--ui-header-height)',
      container: 'py-20 md:py-24 lg:py-32'
    }"
  >
    <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <Motion v-bind="scrollMotion()">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            {{ page.themes2027.headline }}
          </p>
          <h2 class="max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-fbis-blue md:text-5xl lg:text-6xl">
            {{ page.themes2027.title }}
          </h2>
          <p class="mt-5 text-lg text-fbis-gray">
            {{ page.themes2027.description }}
          </p>
        </Motion>

        <ul class="mt-8 space-y-2">
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
      </div>

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
    </div>
  </UPageSection>
</template>
