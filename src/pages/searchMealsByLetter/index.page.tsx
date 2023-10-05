import React, { useState } from 'react'
import { Alphabet, Container } from './styles'
import FoodList, { recipesInterface } from '@/components/foodList'
import { api } from '@/lib/axios'
import { Recipe } from '../searchMealsByName/index.page'

export default function SearchMealsByName() {
  const [recipes, setRecipes] = useState<recipesInterface | any>()
  const [selectedLetter, setSelectedLetter] = useState<string>()

  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))

  async function setSelectedRecipes(letter: string) {
    api.get(`/search.php?f=${letter.toLowerCase()}`).then((response) => {
      const meals = response.data.meals.map((meal: Recipe) => ({
        id: String(meal.idMeal),
        name: String(meal.strMeal),
        instructions: String(meal.strInstructions),
        image: String(meal.strMealThumb),
        youtube: String(meal.strYoutube),
      }))

      setRecipes(meals)
      setSelectedLetter(letter)
    })
  }
  return (
    <Container>
      <h1>Procurar Receitas pela letra</h1>
      <Alphabet>
        {alphabet.map((letter) => (
          <button key={letter} onClick={() => setSelectedRecipes(letter)}>
            <span
              style={{
                color: `${selectedLetter === letter ? '#F97316' : '#000'}`,
              }}
            >
              {letter}
            </span>
          </button>
        ))}
      </Alphabet>
      {recipes && <FoodList recipes={recipes} />}
    </Container>
  )
}
