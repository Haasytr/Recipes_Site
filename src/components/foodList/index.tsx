import { Button, Description, FoodItem, Container } from './styles'

export interface recipesInterface {
  recipes: {
    id: string
    name: string
    instructions?: string
    image: string
    youtube?: string
  }[]
}

export default function FoodList(recipeList: recipesInterface) {
  return (
    <Container>
      {recipeList.recipes.map((recipe) => (
        <FoodItem key={recipe.id}>
          <a href={`/meal/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.name} />
          </a>
          <Description>
            <h3>{recipe.name}</h3>
            {recipe.instructions && (
              <p>{recipe.instructions?.substring(0, 100)}...</p>
            )}
          </Description>

          <Button type="button">
            <a href={recipe.youtube ? recipe.youtube : ''}>Youtube</a>
          </Button>
        </FoodItem>
      ))}
    </Container>
  )
}
