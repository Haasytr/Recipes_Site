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
})

export const IngredientList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',

  [`@media (max-width: 767px)`]: {
    gridTemplateColumns: '1fr',
    margin: '1rem 0',
  },
})

export const IngredientItem = styled('div', {
  background: '$white',
  height: '50px',

  margin: '1rem',
  padding: '0.75rem',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  borderRadius: '5px',

  boxShadow: 'rgb(72, 72, 72) -1px 2px 5px -1px',

  h2: {
    color: '$black',
  },
})
