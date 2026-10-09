export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      warning: 'yellow',
      neutral: 'zinc'
    },

    pageSection: {
      slots: {
        root: 'scroll-mt-(--ui-header-height)',
        container: 'sm:gap-8 lg:py-24',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: 'text-blue-950',
        description: 'text-dimmed'
      }
    },

    button: {
      slots: {
        base: [
          'font-semibold',
          'transition-colors',
          'duration-200'
        ]
      },

      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: [
            'hover:bg-primary-700',
            'active:bg-primary-800'
          ]
        },
        {
          size: 'xs',
          square: false,
          class: {
            base: 'px-3'
          }
        },
        {
          size: ['sm', 'md'],
          square: false,
          class: {
            base: 'px-4'
          }
        },
        {
          size: 'lg',
          square: false,
          class: {
            base: 'px-5'
          }
        },
        {
          size: 'xl',
          square: false,
          class: {
            base: 'px-6'
          }
        }
      ]
    }
  }
})
