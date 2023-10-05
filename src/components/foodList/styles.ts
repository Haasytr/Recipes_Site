import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '2rem 0',
  maxHeight: 400,

  [`@media (max-width: 767px)`]: {
    gridTemplateColumns: '1fr',

    padding: '0.5rem 1rem',
  },
})

export const FoodItem = styled('div', {
  backgroundColor: '$white',
  transition: '0.2s',
  borderRadius: '20px 20px 0 0',
  color: '$black',

  img: {
    maxHeight: '12rem',
    objectFit: 'cover',
    width: '100%',
    borderRadius: '20px 20px 0 0',
  },

  '&:hover': {
    transform: 'scale(105%)',
  },
})

export const Description = styled('div', {
  padding: '0 0.75rem',
  color: '$black',

  '> p': {
    fontSize: '$sm',
  },
})

export const Button = styled('button', {
  width: '100px',
  height: '40px',
  padding: '0.75rem',
  margin: '1.5rem 0.75rem',

  backgroundColor: '$orange_600',

  border: 'none',
  borderRadius: '5px',

  a: {
    color: '$white',
    fontSize: '$md',
  },
})
