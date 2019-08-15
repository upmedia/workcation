module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      }
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          },

        },
        select: {
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.default'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          borderColor: 'transparent',
          focusBorderColor: 'transparent',
          focusShadow: 'none',
          lineHeight: theme('lineHeight.snug'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
        },
        checkbox: {
          width: '1.5em',
          height: '1.5em',
          borderColor: 'transparent',
          focusBorderColor: 'transparent',
          focusShadow: 'none',
          backgroundColor: theme('colors.gray.900'),
          checkedColor: theme('colors.indigo.500')
        },
        radio: {
          width: '1.5em',
          height: '1.5em',
          borderColor: 'transparent',
          focusBorderColor: 'transparent',
          focusShadow: 'none',
          backgroundColor: theme('colors.gray.900'),
          checkedColor: theme('colors.indigo.500')
        },
      },
    })

  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
