import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: 1200,
  margin: 'auto',

  input: {
    width: '100%',
    height: '1.5rem',
    borderRadius: '5px',
    padding: '0.5rem',
    outline: 0,
    border: 0,
    boxShadow: 'rgb(72, 72, 72) -1px 2px 5px -1px',

    '&:focus': {
      outline: '3px solid $orange_600',
    },

    [`@media (max-width: 767px)`]: {
      height: '2.5rem',
      padding: '0.25rem',
    },
  },

  '> h2': {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '$sm',
    color: '$gray_500',
  },

  [`@media (max-width: 767px)`]: {
    height: '2.5rem',
    padding: '1rem 1rem',
  },
})
