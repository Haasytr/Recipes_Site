import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray_300',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, buton': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },

  h1: {
    color: '$orange_600',
    fontSize: '$2xl',
    padding: '2rem 0',
  },
})
