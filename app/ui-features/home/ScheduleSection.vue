<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

const props = defineProps<{ page: HomePageContent }>()
const tabs = computed(() => props.page.schedule.days.map(day => ({
  label: day.label,
  value: day.id,
  activities: day.activities
})))
</script>

<template>
  <UPageSection
    id="programacao"
  >
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ page.schedule.title }}
      </Motion>
    </template>

    <UTabs
      :items="tabs"
      :default-value="tabs[0]?.value"
      color="primary"
      :ui="{
        list: 'w-full justify-start',
        trigger: 'px-5 py-3 text-base font-semibold',
        content: 'pt-6'
      }"
      class="w-full"
    >
      <template #content="{ item }">
        <ol class="divide-y divide-default border-y border-default">
          <li
            v-for="(activity, index) in item.activities"
            :key="`${item.value}-${activity.time}-${activity.title}`"
            class="grid gap-x-6 gap-y-3 px-4 py-6 md:grid-cols-[7rem_1fr] md:py-8"
            :class="index % 2 === 0 ? 'bg-fbis-off-white' : 'bg-[#EAF0F7]'"
          >
            <p class="font-display text-xl font-semibold tabular-nums text-fbis-blue md:text-2xl">
              {{ activity.time }}
            </p>
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
                {{ activity.stage }}
              </p>
              <h3 class="mt-2 font-display text-xl font-semibold text-fbis-blue md:text-2xl">
                {{ activity.title }}
              </h3>
              <p class="mt-2 max-w-3xl leading-relaxed text-fbis-gray">
                {{ activity.description }}
              </p>
              <p class="mt-3 text-sm font-medium text-fbis-black">
                {{ activity.speaker }}
              </p>
            </div>
          </li>
        </ol>
      </template>
    </UTabs>
  </UPageSection>
</template>
