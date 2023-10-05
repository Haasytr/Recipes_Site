import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: 750,
  margin: 'auto',

  img: {
    width: '100%',
  },

  [`@media (max-width: 767px)`]: {
    padding: '0 1rem',
  },
})

export const Description = styled('div', {
  fontSize: '$sm',
})

export const Categories = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
})

export const Box = styled('div', {
  fontSize: '$lg',

  [`@media (max-width: 767px)`]: {
    fontSize: '$sm',
  },
})

export const Ingredients = styled('div', {
  fontSize: '$md',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '2rem 0',

  li: {
    padding: '0.25rem 0',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '2rem',
})
