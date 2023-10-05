import React, { useState } from 'react'
import { Container } from './styles'
import FoodList, { recipesInterface } from '@/components/foodList'
import { api } from '@/lib/axios'
import { useForm } from 'react-hook-form'

interface FormDataInterface {
  name: string
}

export interface Recipe {
  idMeal: string
  strMeal: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string
}

export default function SearchMealsByName() {
  const [recipes, setRecipes] = useState<recipesInterface | any>()

  const { register, handleSubmit } = useForm()

  async function SearchRecipeByName(data: unknown) {
    const { name } = data as FormDataInterface

    api.get(`/search.php?s=${name}`).then((response) => {
      if (response.data.meals) {
        const meals = response.data.meals.map((meal: Recipe) => ({
          id: String(meal.idMeal),
          name: String(meal.strMeal),
          instructions: String(meal.strInstructions),
          image: String(meal.strMealThumb),
          youtube: String(meal.strYoutube),
        }))

        return setRecipes(meals)
      }
      return setRecipes(undefined)
    })
  }

  return (
    <Container>
      <h1>Procurar Receitas pelo nome</h1>
      <form onSubmit={handleSubmit(SearchRecipeByName)}>
        <input
          {...register('name')}
          type="text"
          placeholder="Procurar comida"
        />
      </form>
      {recipes ? (
        <FoodList recipes={recipes} />
      ) : (
        <h2>Receitas não encontradas</h2>
      )}
    </Container>
  )
}
