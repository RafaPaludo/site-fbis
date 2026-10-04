<script setup lang="ts">
import HeroSection from '~/ui-features/home/HeroSection.vue'
import MarqueeSection from '~/ui-features/home/MarqueeSection.vue'
import LastExperienceSection from '~/ui-features/home/LastExperienceSection.vue'
import FbisSection from '~/ui-features/home/FbisSection.vue'
import WhyParticipateSection from '~/ui-features/home/WhyParticipateSection.vue'
import SpeakersSection from '~/ui-features/home/SpeakersSection.vue'

definePageMeta({ colorMode: 'light' })

const { data: contentBlocks } = await useAsyncData('index', () => queryCollection('content').all())

if (!contentBlocks.value?.length) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada', fatal: true })
}

const page = computed(() => Object.assign({}, ...(contentBlocks.value ?? []).map(block => block.meta)))
const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({ title, ogTitle: title, description, ogDescription: description })
</script>

<template>
  <main v-if="page">
    <HeroSection :page="page" />
    <MarqueeSection :page="page" />
    <LastExperienceSection :page="page" />
    <FbisSection :page="page" />
    <WhyParticipateSection :page="page" />
    <SpeakersSection :page="page" />
  </main>
</template>
