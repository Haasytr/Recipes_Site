import React from 'react'
import { Container } from '../styles/pages/home'
import FoodList, { recipesInterface } from '@/components/foodList'
import { api } from '@/lib/axios'
import { GetServerSideProps } from 'next'

export default function Home({ recipes }: recipesInterface) {
  return (
    <Container>
      <h1>Receitas Aleatórias</h1>
      <FoodList recipes={recipes} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const AllMeals = await Promise.all([
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
    api.get('/random.php'),
  ])

  const recipes = AllMeals.map((meal) => ({
    id: String(meal.data.meals[0]?.idMeal),
    name: String(meal.data.meals[0].strMeal),
    instructions: String(meal.data.meals[0].strInstructions),
    image: String(meal.data.meals[0].strMealThumb),
    youtube: String(meal.data.meals[0].strYoutube),
  }))

  return {
    props: { recipes },
  }
}
