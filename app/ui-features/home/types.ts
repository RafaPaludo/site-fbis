type ImageContent = { src: string, alt: string }
type ThemeContent = { id: string, label: string, icon: string, image: ImageContent }
type ScheduleActivity = { time: string, stage: string, title: string, description: string, speaker: string }
type ScheduleDay = { id: string, label: string, activities: ScheduleActivity[] }
type OrganizationInfo = {
  groupRegistration: { title: string, description: string, buttonLabel: string, buttonTo: string }
  presentation: { title: string, description: string, buttonLabel: string, downloadUrl: string }
}
type SponsorLogo = { id: string, src: string, alt: string }
type Sponsors = { title: string, buttonLabel: string, buttonTo: string, logos: SponsorLogo[] }
type LocationService = { id: string, icon: string, title: string, description: string }
type LocationContent = { title: string, date: string, venue: string, address: string, city: string, mapEmbed: string, services: LocationService[] }
type FaqContent = { title: string, items: Array<{ id: string, question: string, answer: string }> }

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
  manifesto: { title: string }
  themes2027: { headline: string, title: string, description: string, items: ThemeContent[] }
  schedule: { title: string, days: ScheduleDay[] }
  organizationInfo: OrganizationInfo
  sponsors: Sponsors
  location: LocationContent
  faq: FaqContent
  whyParticipate: { title: string, description: string, items: Array<{ label: string, description: string }> }
  fbisSpeakers: { title: string, description: string, speakers: Array<{ name: string, bio: string, image: ImageContent }> }
  seo?: { title?: string, description?: string }
}
