import { defineCollection, z } from '@nuxt/content'

export const collections = {
  content: defineCollection({
    source: '**/*.yml',
    type: 'data',
    schema: z.object({}).passthrough()
  })
}
