<script setup lang="ts">
import type { HomePageContent } from './types'

const props = defineProps<{ page: HomePageContent }>()
const title = computed(() => {
  const [primary = '', ...parts] = (props.page.title ?? '').split('\n')
  return { primary, secondary: parts.join(' ').trim() }
})
const heroBackground = computed(() => ({
  backgroundImage: `linear-gradient(90deg, rgba(11, 23, 42, 0.92) 0%, rgba(11, 23, 42, 0.78) 55%, rgba(11, 23, 42, 0.55) 100%), url("${props.page.hero.image.src}")`
}))

function enterMotion(delay = 0) {
  return { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
}
</script>

<template>
  <UPageHero
    :ui="{ root: 'relative isolate overflow-hidden bg-cover bg-center bg-no-repeat pb-0 sm:pb-0', container: 'relative z-10 lg:py-40', wrapper: 'flex flex-col', title: 'text-white sm:text-6xl lg:text-7xl', description: 'mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-white/95', links: 'gap-3' }"
    :style="heroBackground"
  >
    <template #top>
      <Motion v-bind="{ initial: { opacity: 0 }, whileInView: { opacity: 1 }, inViewOptions: { once: true }, transition: { duration: 0.6 } }">
        <HeroShaders class="absolute top-0 inset-x-0 opacity-15 h-full" />
      </Motion>
    </template>
    <template #headline>
      <Motion v-bind="enterMotion(0.2)">
        <UBadge
          color="neutral"
          variant="subtle"
          :label="page.hero.headline"
          class="rounded-full px-3 py-1.5 gap-1.5 bg-white/95 text-fbis-blue backdrop-blur-sm"
        >
          <template #leading>
            <UChip
              inset
              standalone
              :ui="{ base: 'animate-pulse ring-0' }"
            />
          </template>
        </UBadge>
      </Motion>
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="enterMotion(0.35)"
        class="inline-block font-display"
      >
        {{ title.primary }}<br v-if="title.secondary">
        <span
          v-if="title.secondary"
          class="text-fbis-yellow"
        >{{ title.secondary }}</span>
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="enterMotion(0.5)"
        class="inline-block font-display"
      >
        {{ page.description }}
      </Motion>
    </template>
    <template #links>
      <Motion
        class="gap-6"
        v-bind="enterMotion(0.65)"
      >
        <UButton
          v-for="link in page.hero.links"
          :key="link.label"
          v-bind="link"
        />
      </Motion>
    </template>
  </UPageHero>
</template>
