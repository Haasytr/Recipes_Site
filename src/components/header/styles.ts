import { styled } from '@stitches/react'
import Link from 'next/link'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  minHeight: '3.5rem',
  boxShadow: 'rgb(72, 72, 72) -1px 2px 5px -1px',

  backgroundColor: '$white',

  '& > a': {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    color: '$orange_600',
    fontWeight: 'bold',

    [`@media (max-width: 767px)`]: {
      margin: '0.75rem 0',
    },
  },

  [`@media (max-width: 767px)`]: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
  },
})

export const Navigation = styled('nav', {
  display: 'flex',

  alignItems: 'center',

  [`@media (max-width: 767px)`]: {
    width: '100%',
    flexDirection: 'column',
  },
})

export const NavLink = styled(Link, {
  height: '100%',
  padding: '0 1rem',

  color: '#000',

  display: 'flex',
  alignItems: 'center',

  transition: '0.2s',

  '&:hover': {
    backgroundColor: '$orange_600',
  },

  [`@media (max-width: 767px)`]: {
    padding: '0.75rem 0',
    width: '100%',
  },
})
