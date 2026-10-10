<script setup lang="ts">
import type { HomePageContent } from './types'
import scrollMotion from '~/utils/scroll-motion'
import staggerMotion from '~/utils/stagger-motion'

defineProps<{ page: HomePageContent }>()
</script>

<template>
  <div
    id="localizacao"
    class="scroll-mt-(--ui-header-height)"
  >
    <UPageSection
      orientation="horizontal"
      :ui="{
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

      <template #features>
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

          <div class="grid gap-4 sm:grid-cols-2">
            <Motion
              v-for="(service, index) in page.location.services"
              :key="service.id"
              v-bind="staggerMotion(index)"
            >
              <UPageCard
                variant="subtle"
                class="h-full"
              >
                <UIcon
                  :name="service.icon"
                  class="size-6 text-primary"
                  aria-hidden="true"
                />
                <h3 class="font-display text-xl font-semibold text-fbis-blue">
                  {{ service.title }}
                </h3>
                <p
                  v-if="service.description"
                  class="text-fbis-gray"
                >
                  {{ service.description }}
                </p>
                <ul
                  v-if="service.links?.length"
                  class="space-y-2"
                >
                  <li
                    v-for="link in service.links"
                    :key="link.to"
                  >
                    <NuxtLink
                      :to="link.to"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1 text-fbis-blue underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
                    >
                      {{ link.label }}
                      <UIcon
                        v-if="link.icon"
                        :name="link.icon"
                        class="size-4 shrink-0"
                        aria-hidden="true"
                      />
                    </NuxtLink>
                  </li>
                </ul>
              </UPageCard>
            </Motion>
          </div>
        </Motion>
      </template>

      <Motion
        v-bind="scrollMotion(0.2)"
        class="overflow-hidden rounded-lg border border-default"
      >
        <img
          src="/location/parlamundi.jpg"
          alt="Fachada do ParlaMundi, local do FBIS em Brasília"
          class="aspect-[3/2] h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        >
      </Motion>
    </UPageSection>

    <UPageSection
      :ui="{
        container: 'py-0 lg:py-0 sm:py-0'
      }"
    >
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
    </UPageSection>
  </div>
</template>
