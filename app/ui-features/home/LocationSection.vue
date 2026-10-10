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
          <address class="space-y-1 not-italic">
            <h3 class="text-3xl text-fbis-blue font-bold">
              {{ page.location.venue }}
            </h3>

            <p>{{ page.location.city }}</p>
          </address>

          <div class="grid gap-4 sm:grid-cols-2">
            <Motion v-bind="staggerMotion(0)">
              <UPageCard
                variant="subtle"
                class="h-full"
              >
                <UIcon
                  name="i-lucide-map-pin"
                  class="size-6 text-primary"
                  aria-hidden="true"
                />
                <h3 class="font-display text-xl font-semibold text-fbis-blue">
                  Endereço
                </h3>
                <UButton
                  :to="page.location.addressLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="link"
                  color="neutral"
                  class="h-auto p-0 text-left font-normal text-fbis-gray underline decoration-primary/50 underline-offset-4 hover:text-primary"
                >
                  {{ page.location.address }}
                </UButton>
              </UPageCard>
            </Motion>
            <Motion
              v-for="(service, index) in page.location.services"
              :key="service.id"
              v-bind="staggerMotion(index + 1)"
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
        class="overflow-hidden rounded-lg border-none"
      >
        <img
          src="/location/parlamundi.jpg"
          alt="Fachada do ParlaMundi, local do FBIS em Brasília"
          class="aspect-[3/2] h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        >

        <UPageColumns
          :ui="{ base: 'columns-2 gap-6 sm:columns-2' }"
          class="mt-6"
        >
          <div class="break-inside-avoid border-l-2 border-fbis-yellow py-1 pl-4">
            <h3 class="font-display text-lg font-semibold text-fbis-blue">
              Data
            </h3>
            <p class="mt-1 text-fbis-gray">
              25 e 26 de maio
            </p>
          </div>
          <div class="break-inside-avoid border-l-2 border-fbis-yellow py-1 pl-4">
            <h3 class="font-display text-lg font-semibold text-fbis-blue">
              FORMATO
            </h3>
            <p class="mt-1 text-fbis-gray">
              2 dias presenciais
            </p>
          </div>
        </UPageColumns>
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
