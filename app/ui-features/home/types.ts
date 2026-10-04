type ImageContent = { src: string, alt: string }

export type HomePageContent = {
  title: string
  description: string
  hero: { headline: string, links: Array<Record<string, string>> }
  marquee: { label: string, link: string }
  lastExperience: {
    headline: string
    title: string
    description: string
    image: ImageContent
    items: Array<{ label: string }>
    testimonials: Array<Record<string, unknown> & { quote: string }>
  }
  fbis: { title: string, description: string, paragraph: string, image: ImageContent }
  whyParticipate: { title: string, description: string, items: Array<{ label: string, description: string }> }
  fbisSpeakers: { title: string, description: string, speakers: Array<{ name: string, bio: string, image: ImageContent }> }
  seo?: { title?: string, description?: string }
}
