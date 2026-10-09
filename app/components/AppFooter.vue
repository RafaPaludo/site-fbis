<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const columns: FooterColumn[] = [
  {
    label: 'Siga nas redes',
    children: [
      { label: 'Instagram', icon: 'i-simple-icons-instagram', to: 'https://www.instagram.com/', target: '_blank' },
      { label: 'YouTube', icon: 'i-simple-icons-youtube', to: 'https://www.youtube.com/', target: '_blank' },
      { label: 'TikTok', icon: 'i-simple-icons-tiktok', to: 'https://www.tiktok.com/', target: '_blank' }
    ]
  },
  {
    label: 'Entre em contato',
    children: [
      { label: '+55 (48) 99121-8168', to: 'tel:+5548991218168' }
    ]
  }
]
</script>

<template>
  <UFooter class="bg-fbis-navy text-fbis-off-white">
    <template #top>
      <UContainer class="pt-14 sm:pt-20">
        <UFooterColumns
          :columns="columns"
          :ui="{
            root: 'grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12',
            left: 'mb-0',
            center: 'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2',
            label: 'text-sm font-semibold text-white',
            list: 'mt-4 space-y-3',
            link: 'inline-flex items-center gap-3 text-sm text-fbis-off-white/75 transition-colors hover:text-white',
            linkLeadingIcon: 'size-4 shrink-0'
          }"
        >
          <template #left>
            <p class="max-w-sm text-xl font-medium leading-snug text-white sm:text-2xl">
              Inovação sindical<br>
              para transformar<br>
              o futuro do trabalho.
            </p>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>
  </UFooter>
</template>
