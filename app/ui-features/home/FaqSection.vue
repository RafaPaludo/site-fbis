<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

const props = defineProps<{ page: HomePageContent }>()
const items = computed(() => props.page.faq.items.map(item => ({
  label: item.question,
  content: item.answer,
  value: item.id
})))
</script>

<template>
  <UPageSection
    id="faq"
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
        {{ page.faq.title }}
      </Motion>
    </template>

    <UAccordion
      :items="items"
      type="single"
      collapsible
      :ui="{
        item: 'border-b border-default',
        trigger: 'py-5 text-left font-semibold text-fbis-blue',
        content: 'pb-5 leading-relaxed text-fbis-gray'
      }"
      class="w-full"
    />
  </UPageSection>
</template>
