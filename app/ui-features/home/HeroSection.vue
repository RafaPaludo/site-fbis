<script setup lang="ts">
import type { HomePageContent } from './types'

const props = defineProps<{ page: HomePageContent }>()
const title = computed(() => {
  const [primary = '', ...parts] = (props.page.title ?? '').split('\n')
  return { primary, secondary: parts.join(' ').trim() }
})

function enterMotion(delay = 0) {
  return { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
}
</script>

<template>
  <UPageHero
    orientation="horizontal"
    :ui="{ root: 'pb-0 sm:pb-0', container: 'relative z-10 lg:py-16', wrapper: 'flex flex-col', title: 'sm:text-6xl lg:text-7xl', description: 'mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-default', links: 'gap-3' }"
  >
    <template #top>
      <Motion v-bind="{ initial: { opacity: 0 }, whileInView: { opacity: 1 }, inViewOptions: { once: true }, transition: { duration: 0.6 } }">
        <HeroShaders class="absolute top-0 inset-x-0 opacity-15 h-full" />
      </Motion>
      <GradientGlow class="top-0 w-2/3 h-1/2" />
    </template>
    <template #headline>
      <Motion v-bind="enterMotion(0.2)">
        <UBadge
          color="neutral"
          variant="soft"
          :label="page.hero.headline"
          class="rounded-full px-3 py-1.5 gap-1.5 bg-primary/5 backdrop-blur-sm"
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
          class="animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent"
          :style="{ backgroundImage: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))', animationDuration: '10s' }"
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

    <img
      :src="page.hero.image.src"
      :alt="page.hero.image.alt"
      class="mx-auto rounded-lg"
    >
  </UPageHero>
</template>
