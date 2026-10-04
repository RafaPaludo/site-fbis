<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})

const { data: page } = await useAsyncData('index', () => queryCollection('content').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada', fatal: true })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const heroTitle = computed(() => {
  const [primary = '', ...secondaryParts] = (page.value?.title ?? '').split('\n')

  return {
    primary,
    secondary: secondaryParts.join(' ').trim()
  }
})

function enterMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }
}

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 1 },
    transition: { duration: 0.6, delay }
  }
}

function staggerMotion(index: number = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    inViewOptions: { once: true, amount: 1 },
    transition: { duration: 0.6, delay: index * 0.08 }
  }
}
</script>

<template>
  <div v-if="page">
    <!-- Hero -->
    <UPageHero
      orientation="horizontal"
      :ui="{
        root: 'pb-0 sm:pb-0',
        container: 'relative z-10 lg:py-24',
        wrapper: 'flex flex-col',
        title: 'sm:text-6xl lg:text-7xl',
        description: 'mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-default',
        links: 'gap-3'
      }"
    >
      <template #top>
        <Motion v-bind="staggerMotion(0)">
          <HeroShaders class="absolute top-0 inset-x-0 opacity-15 h-full" />
        </Motion>

        <GradientGlow class="top-0 w-2/3 h-1/2" />
      </template>

      <template #headline>
        <Motion v-bind="enterMotion(0.2)">
          <UBadge
            color="neutral"
            variant="soft"
            :label="page.hero.headline"
            class="rounded-full px-3 py-1.5 gap-1.5 bg-primary/5 backdrop-blur-sm"
          >
            <template #leading>
              <UChip
                inset
                standalone
                :ui="{ base: 'animate-pulse ring-0' }"
              />
            </template>
          </UBadge>
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="enterMotion(0.35)"
          class="inline-block font-display"
        >
          {{ heroTitle.primary }}
          <br v-if="heroTitle.secondary">
          <span
            v-if="heroTitle.secondary"
            class="animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent"
            :style="{
              backgroundImage: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))',
              animationDuration: '10s'
            }"
          >
            {{ heroTitle.secondary }}
          </span>
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="enterMotion(0.5)"
          class="inline-block font-display"
        >
          {{ page.description }}
        </Motion>
      </template>

      <template #links>
        <Motion
          class="gap-6"
          v-bind="enterMotion(0.65)"
        >
          <UButton
            v-for="link in page.hero.links"
            :key="link.label"
            v-bind="link"
          />
        </Motion>
      </template>
    </UPageHero>

    <!-- Marquee -->
    <UMarquee
      v-if="page.marquee.label"
      reverse
      pause-on-hover
      :ui="{
        root: 'bg-[#152B50] h-12 text-white',
        content: 'gap-12'
      }"
    >
      <a
        v-for="value in 4"
        :key="value"
        :href="page.marquee.link"
        class="text-sm font-semibold tracking-[0.08em] uppercase"
      >
        {{ page.marquee.label }}
      </a>
    </UMarquee>

    <!-- Experiência 2025 -->
    <UPageSection
      id="lastExperience"
      :ui="{
        root: 'scroll-mt-(--ui-header-height)',
        container: 'lg:py-24',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: '',
        description: 'text-dimmed'
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.lastExperience.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.lastExperience.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.lastExperience.description }}
        </Motion>
      </template>

      <div class="flex flex-col lg:flex-row">
        <img :src="page.lastExperience.image.src">
        <div class="rounded-r-lg border border-default bg-default overflow-hidden flex lg:flex-col justify-end">
          <Motion
            v-for="(items, index) in page.lastExperience.items"
            :key="items.label"
            v-bind="staggerMotion(index)"
          >
            <UPageCard
              :title="items.label"
              class="rounded-none duration-300"
              :ui="{
                leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
                title: 'text-sm tracking-tight',
                description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed'
              }"
            />
          </Motion>
        </div>
      </div>

      <!-- Comentários sobre o evento -->
      <UPageColumns>
        <UPageCard
          v-for="(testimonial, index) in page.lastExperience.testimonials"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
        >
          <template #footer>
            <UUser
              v-bind="testimonial"
              size="xl"
            />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <!-- FBIS 2027 -->
    <UPageSection
      id="fbis"
      :ui="{
        root: 'scroll-mt-(--ui-header-height)',
        container: 'lg:py-24',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: '',
        description: 'text-dimmed'
      }"
    >
      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.fbis.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.fbis.description }}
        </Motion>
      </template>

      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        <p>{{ page.fbis.paragraph }}</p>
      </Motion>

      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        <img
          :src="page.fbis.image.src"
          :alt="page.fbis.image.alt"
          class="mx-auto rounded-lg"
        >
      </Motion>
    </UPageSection>

    <!-- Porque participar -->
    <UPageSection
      id="whyParticipate"
      :ui="{
        root: 'scroll-mt-(--ui-header-height)',
        container: 'lg:py-24',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: '',
        description: 'text-dimmed'
      }"
    >
      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.whyParticipate.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.whyParticipate.description }}
        </Motion>
      </template>

      <Motion
        v-for="(item, index) in page.whyParticipate.items"
        :key="item.label"
        v-bind="staggerMotion(index)"
      >
        <UPageFeature
          :title="item.label"
          :description="item.description"
          icon="i-lucide-swatch-book"
          class="rounded-none duration-300"
          :ui="{
            leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
            title: 'text-sm tracking-tight',
            description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed'
          }"
        />
      </Motion>
    </UPageSection>

    <!-- Quem estará no FBIS -->
    <UPageSection
      id="fbisSpeakers"
      :ui="{
        root: 'scroll-mt-(--ui-header-height)',
        container: 'lg:py-24',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: '',
        description: 'text-dimmed'
      }"
    >
      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.fbisSpeakers.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.fbisSpeakers.description }}
        </Motion>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Motion
          v-for="(speaker, index) in page.fbisSpeakers.speakers"
          :key="speaker.name"
          v-bind="staggerMotion(index)"
        >
          <UPageCard
            :title="speaker.name"
            :description="speaker.bio"
            reverse
            class="duration-300"
            :ui="{
              leading: 'mb-5 justify-center rounded-lg bg-primary/10',
              title: 'text-sm tracking-tight',
              description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed'
            }"
          >
            <img
              :src="speaker.image.src"
              :alt="speaker.image.alt"
            >
          </UPageCard>
        </Motion>
      </div>

      <!-- Adicionar um carrossel com os demais participantes -->
    </UPageSection>
  </div>
</template>
