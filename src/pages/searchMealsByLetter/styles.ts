import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: 1200,
  margin: 'auto',

  input: {
    width: '100%',
    height: '2rem',
    borderRadius: '5px',
    padding: '0.5rem',
    outline: 0,
    border: 0,

    '&:focus': {
      outline: '3px solid $orange_600',
    },
  },
})

export const Alphabet = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    cursor: 'pointer',
    fontSize: '$md',
    border: 0,
    padding: '0.5rem',
    backgroundColor: 'inherit',
    transition: '0.2s',

    ':hover': {
      transform: 'scale(120%)',
      color: '$orange_600',
    },
  },

  [`@media (max-width: 767px)`]: {
    overflow: 'auto',
    margin: '1rem 0',
  },
})
