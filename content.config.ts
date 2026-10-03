import { defineCollection, z } from '@nuxt/content'

const createEnum = (options: [string, ...string[]]) => z.enum(options)

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: 'icon' }),
  trailingIcon: z.string().optional().editor({ input: 'icon' }),
  size: createEnum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  trailing: z.boolean().optional(),
  target: createEnum(['_blank', '_self']).optional(),
  color: createEnum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info']).optional(),
  variant: createEnum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional()
})

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object({
        headline: z.string().optional(),
        links: z.array(createLinkSchema())
      }),
      marquee: z.object({
        label: z.string(),
        link: z.string().optional()
      }),
      lastExperience: z.object({
        headline: z.string().optional(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.object({
          src: z.string().nonempty(),
          alt: z.string().nonempty()
        }),
        items: z.array(z.object({
          label: z.string()
        })),
        testimonials: z.array(z.object({
          name: z.string().nonempty(),
          description: z.string().nonempty(),
          quote: z.string().nonempty(),
          avatar: z.object({
            src: z.string().nonempty(),
            alt: z.string().nonempty(),
            loading: z.enum(['lazy', 'eager']).default('lazy')
          })
        }))
      }),
      fbis: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        paragraph: z.string().nonempty(),
        image: z.object({
          src: z.string().nonempty(),
          alt: z.string().nonempty()
        })
      }),
      whyParticipate: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(z.object({
          label: z.string(),
          description: z.string().nonempty()
        }))
      }),
      fbisSpeakers: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        speakers: z.array(z.object({
          name: z.string().nonempty(),
          org: z.string().nonempty(),
          bio: z.string().nonempty(),
          image: z.object({
            src: z.string().nonempty(),
            alt: z.string().nonempty()
          })
        }))
      })
    })
  })
}
