export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      warning: 'yellow',
      neutral: 'zinc'
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