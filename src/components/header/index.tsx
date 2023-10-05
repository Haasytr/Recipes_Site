import Link from 'next/link'
import React from 'react'

import { Container, NavLink, Navigation } from './styles'

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <span>Início</span>
      </Link>
      <Navigation>
        <NavLink href="/searchMealsByName">Pesquisar Receitas</NavLink>
        <NavLink href="/searchMealsByLetter">Receitas por letra</NavLink>
        <NavLink href="/searchByIngredients">Receitas por Ingredientes</NavLink>
      </Navigation>
    </Container>
  )
}
