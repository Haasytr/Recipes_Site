import React from 'react'
import { api } from '@/lib/axios'
import { GetServerSideProps, GetStaticPaths } from 'next'
import {
  Actions,
  Box,
  Categories,
  Container,
  Description,
  Ingredients,
} from './styles'
import { Button } from '@/components/foodList/styles'
import Link from 'next/link'

// import { Container } from './styles';

interface MealInterface {
  name: string
  instructions: string
  area: string
  tags: string
  image: string
  category: string
  youtube: string
  source: string
  ingredients: string[]
  measures: string[]
}

export default function Meal({
  area,
  image,
  instructions,
  name,
  tags,
  category,
  ingredients,
  measures,
  youtube,
  source,
}: MealInterface) {
  return (
    <Container>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <Description>
        <Categories>
          <Box>
            <b>Categoria:</b>
            <span>{category}</span>
          </Box>
          <Box>
            <b>Area:</b>
            <span>{area}</span>
          </Box>
          <Box>
            <b>Tags:</b>
            <span>{tags}</span>
          </Box>
        </Categories>
        <p>{instructions}</p>
      </Description>
      <Ingredients>
        <ol>
          <h2>Ingredientes</h2>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ol>
        <ol>
          <h2>Medidas</h2>
          {measures.map((measure) => (
            <li key={measure}>{measure}</li>
          ))}
        </ol>
      </Ingredients>
      <Actions>
        <Button>
          <Link href={youtube}>Youtube</Link>
        </Button>
        <Link href={source}>fonte original</Link>
      </Actions>
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
  const mealId = String(params?.meal)

  const meal = await api.get(`/lookup.php?i=${mealId}`)

  const mealIngredients = []
  const mealMeasures = []

  for (let index = 1; index <= 20; index++) {
    if (meal.data.meals[0][`strIngredient${index}`] !== '') {
      mealIngredients[index - 1] = meal.data.meals[0][`strIngredient${index}`]
    }
    if (meal.data.meals[0][`strMeasure${index}`] !== '') {
      mealMeasures[index - 1] = meal.data.meals[0][`strMeasure${index}`]
    }
  }

  return {
    props: {
      name: meal.data.meals[0].strMeal,
      instructions: meal.data.meals[0].strInstructions,
      area: meal.data.meals[0].strArea,
      tags: meal.data.meals[0].strTags,
      image: meal.data.meals[0].strMealThumb,
      category: meal.data.meals[0].strCategory,
      youtube: meal.data.meals[0].strYoutube,
      source: meal.data.meals[0].strSource,
      ingredients: mealIngredients,
      measures: mealMeasures,
    },
  }
}
