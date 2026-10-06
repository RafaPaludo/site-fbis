<script setup lang="ts">
import HeroSection from '~/ui-features/home/HeroSection.vue'
import MarqueeSection from '~/ui-features/home/MarqueeSection.vue'
import LastExperienceSection from '~/ui-features/home/LastExperienceSection.vue'
import FbisSection from '~/ui-features/home/FbisSection.vue'
import ManifestoSection from '~/ui-features/home/ManifestoSection.vue'
import Themes2027Section from '~/ui-features/home/Themes2027Section.vue'
import ScheduleSection from '~/ui-features/home/ScheduleSection.vue'
import OrganizationInfoSection from '~/ui-features/home/OrganizationInfoSection.vue'
import SponsorsSection from '~/ui-features/home/SponsorsSection.vue'
import LocationSection from '~/ui-features/home/LocationSection.vue'
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
    <ManifestoSection :page="page" />
    <Themes2027Section :page="page" />
    <ScheduleSection :page="page" />
    <OrganizationInfoSection :page="page" />
    <SponsorsSection :page="page" />
    <LocationSection :page="page" />
  </main>
</template>
