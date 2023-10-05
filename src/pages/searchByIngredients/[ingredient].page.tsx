import React from 'react'
import { api } from '@/lib/axios'
import { GetServerSideProps, GetStaticPaths } from 'next'
import { Container } from './styles'
import FoodList, { recipesInterface } from '@/components/foodList'
import { Recipe } from '../searchMealsByName/index.page'

// import { Container } from './styles';

interface MealInterface {
  recipes: {
    id: string
    name: string
    image: string
  }
  ingredient: string
}

export default function Meal({ recipes, ingredient }: MealInterface) {
  return (
    <Container>
      <h1>Receitas com {ingredient}</h1>

      {ingredient ? (
        <FoodList recipes={recipes as any} />
      ) : (
        'Receitas não encontradas'
      )}
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const ingredient = String(params?.ingredient)

  const { data } = await api.get(`/filter.php?i=${ingredient}`)

  if (!data.meals) {
    return {
      props: {
        recipes: [],
        ingredient,
      },
    }
  }

  const recipes = data.meals.map((meal: Recipe) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
  }))

  return {
    props: {
      recipes,
      ingredient,
    },
  }
}
