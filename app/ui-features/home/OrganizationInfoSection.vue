<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <UPageSection
      id="group-registration"
      :ui="{
        root: 'h-full',
        container: 'flex h-full flex-col items-start p-6 md:p-8',
        title: 'text-left text-2xl font-semibold text-fbis-blue md:text-3xl',
        description: 'text-left text-fbis-gray'
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
      <UButton
        :to="page.organizationInfo.groupRegistration.buttonTo"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6"
      >
        {{ page.organizationInfo.groupRegistration.buttonLabel }}
      </UButton>
    </UPageSection>

    <UPageSection
      id="fbis-presentation"
      :ui="{
        root: 'h-full',
        container: 'flex h-full flex-col items-start p-6 md:p-8',
        title: 'text-left text-2xl font-semibold text-fbis-blue md:text-3xl',
        description: 'text-left text-fbis-gray'
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
      <UButton
        :disabled="!page.organizationInfo.presentation.downloadUrl"
        :to="page.organizationInfo.presentation.downloadUrl || undefined"
        download
        class="mt-6"
      >
        {{ page.organizationInfo.presentation.buttonLabel }}
      </UButton>
    </UPageSection>
  </div>
</template>
