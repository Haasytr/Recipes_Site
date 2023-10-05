import React, { useEffect, useState } from 'react'
import { Container, IngredientList, IngredientItem } from './styles'
import { api } from '@/lib/axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
// import { Container } from './styles';

interface IngredientsInterface {
  ingredients: {
    id: string
    name: string
  }[]
}

export default function SearchMealsByName({
  ingredients,
}: IngredientsInterface) {
  const [searchedIngredient, setSearchedIngredient] = useState('')
  const [filtredIngredients, setFiltredIngredients] = useState(ingredients)

  useEffect(() => {
    const filtredIngredients = ingredients.filter((ingredient) =>
      ingredient.name
        .toLowerCase()
        .includes(String(searchedIngredient.toLowerCase())),
    )

    setFiltredIngredients(filtredIngredients)
  }, [searchedIngredient, ingredients])

  return (
    <Container>
      <h1>Procurar Receitas por ingrediente</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setSearchedIngredient(e.target.value)}
          placeholder="Procurar por ingrediente"
        />
      </form>
      <IngredientList>
        {filtredIngredients?.map((ingredient) => (
          <IngredientItem key={ingredient.id}>
            <Link href={`/searchByIngredients/${ingredient.name}`}>
              <h2>{ingredient.name}</h2>
            </Link>
          </IngredientItem>
        ))}
      </IngredientList>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ingredientsList = await api.get(`list.php?i=list`)

  const ingredients = ingredientsList.data.meals.map((ingredient: any) => ({
    id: String(ingredient.idIngredient),
    name: String(ingredient.strIngredient),
  }))

  return {
    props: {
      ingredients,
    },
  }
}
