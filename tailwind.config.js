const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_site/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-color': '#1188D6',
        'theme-header-bg': '#1188D6',
        'theme-header-nav-link': '#FFFFFF',
        'theme-header-nav-link-sel': '#3CA8EF',
        'theme-header-logo-message': '#FFFFFF',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            h1: {
              'border-bottom': '1px solid ' + theme('colors.theme-color'),
              'padding-bottom': '0.5rem',
            },
            'h1, h2, h3, h4, h5, h6':{
              'font-weight': 'bold',
            },
            a: {
              color: theme('colors.theme-color'),
              'font-weight': 'medium',
              'text-decoration': 'none',
            },
            'a:hover': {
              color: theme('colors.theme-color'),
              'text-decoration': 'underline',
            },
            code: {
              color: theme('colors.theme-color'),
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            pre: {
              'background-color': theme('colors.gray.100'),
            },
            code: {
              'background-color': theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
            },
            'pre code': {
              'background-color': theme('colors.gray.100'),
              'font-size': theme('fontSize.lg'),
              'color': theme('colors.gray.800'),
            },
            table: {
              'border-top': '1px solid ' + theme('colors.gray.200'),
              'border-bottom': '1px solid ' + theme('colors.gray.200'),
            },
            th: {
              'background-color': theme('colors.gray.50'),
              padding: '0.5rem !important',
              'text-transform': 'uppercase',
            },
            td: {
              padding: '0.5rem !important',
            },
            'td ul, td li': {
              'padding-left': '0 !important',
              'margin-left': '0 !important',
            },
            'td img': {
              'display': 'inline-block',
              margin: '0 !important',
            },
            'blockquote': {
              background: theme('colors.slate.50'),
              'padding-top': '0.1rem',
              'padding-bottom': '0.1rem',
              'border-left': '5px solid ' + theme('colors.theme-color'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
