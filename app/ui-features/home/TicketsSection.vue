<script setup lang="ts">
import { ref } from 'vue'
import type { PricingPlanProps } from '@nuxt/ui/components/PricingPlan.vue'

const plans = ref<PricingPlanProps[]>([
  {
    scale: true,
    variant: 'solid',
    badge: '1º lote',
    title: 'Solo',
    description: 'Tailored for indie hackers.',
    price: '$249',
    features: [
      'One developer',
      'Lifetime access'
    ],
    button: {
      label: 'Comprar agora'
    }
  },
  {
    title: 'Startup',
    description: 'Best suited for small teams.',
    price: '$499',
    features: [
      'Up to 5 developers',
      'Everything in Solo'
    ],
    button: {
      label: 'Comprar agora'
    }
  },
  {
    title: 'Organization',
    description: 'Ideal for larger teams and organizations.',
    price: '$999',
    features: [
      'Up to 20 developers',
      'Everything in Startup'
    ],
    button: {
      label: 'Comprar agora'
    }
  }
])
</script>

<template>
  <UPageSection
    id="ingressos"
    orientation="horizontal"
    :ui="{
      container: 'grid-cols-2 lg:grid-cols-3',
      headline: 'text-left'
    }"
  >
    <template #headline>
      <Motion
        as="span"
        v-bind="scrollMotion()"
      >
        1º lote
      </motion>
    </template>

    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion()"
      >
        Ingressos
      </motion>
    </template>

    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion()"
      >
        Garanta seu espaço no evento antes que o preço aumente
      </motion>
    </template>

    <UPricingPlans
      compact
      :plans="plans"
      class="lg:col-span-2"
    />
  </UPageSection>
</template>
