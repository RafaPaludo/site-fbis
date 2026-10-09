<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <UPageGrid
    :ui="{
      base: 'w-full max-w-(--ui-container) mx-auto relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'
    }"
  >
    <UPageSection
      id="group-registration"
      :ui="{
        root: 'h-full',
        container: '',
        title: 'text-left text-2xl font-semibold text-fbis-blue md:text-3xl',
        description: 'text-left text-fbis-gray',
        links: 'mt-6 justify-start'
      }"
    >
      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.organizationInfo.groupRegistration.title }}
        </Motion>
      </template>
      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.organizationInfo.groupRegistration.description }}
        </Motion>
      </template>
      <template #links>
        <UButton
          :to="page.organizationInfo.groupRegistration.buttonTo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ page.organizationInfo.groupRegistration.buttonLabel }}
        </UButton>
      </template>
    </UPageSection>

    <UPageSection
      id="fbis-presentation"
      :ui="{
        root: 'h-full',
        container: '',
        title: 'text-left text-2xl font-semibold text-fbis-blue md:text-3xl',
        description: 'text-left text-fbis-gray',
        links: 'mt-6 justify-start'
      }"
    >
      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.organizationInfo.presentation.title }}
        </Motion>
      </template>
      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.organizationInfo.presentation.description }}
        </Motion>
      </template>
      <template #links>
        <UButton
          :disabled="!page.organizationInfo.presentation.downloadUrl"
          :to="page.organizationInfo.presentation.downloadUrl || undefined"
          download
        >
          {{ page.organizationInfo.presentation.buttonLabel }}
        </UButton>
      </template>
    </UPageSection>
  </UPageGrid>
</template>
