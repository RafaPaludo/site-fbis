<script setup lang="ts">
import type { HomePageContent } from './types'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UMarquee
    v-if="page.marquee.label"
    reverse
    pause-on-hover
    :ui="{ root: 'bg-[#152B50] h-12 text-white', content: 'gap-12' }"
  >
    <a
      v-for="value in 4"
      :key="value"
      :href="page.marquee.link"
      class="text-sm font-semibold tracking-[0.08em] uppercase"
    >{{ page.marquee.label }}</a>
  </UMarquee>
</template>
