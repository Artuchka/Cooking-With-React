import React, { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import RecipeEdit from "./RecipeEdit"

import "./../css/app.css"
import { v4 as uuidv4 } from "uuid"

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
	const [selectedRecipeId, setSelectedRecipeId] = useState()
	const [recipes, setRecipies] = useState(sampleRecipies)

	const selectedRecipe = recipes.find(
		(recipe) => recipe.id === selectedRecipeId
	)

	useEffect(() => {
		const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
		if (recipesJSON != null) {
			setRecipies(JSON.parse(recipesJSON))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
		return () => {
			console.log("recipies set")
		}
	}, [recipes])

	const recipeContextValue = {
		handleRecipeAdd,
		handleRecipeDelete,
		handleRecipeSelect,
	}

	function handleRecipeSelect(id) {
		setSelectedRecipeId(id)
	}

	function handleRecipeAdd() {
		const newRecipe = {
			id: uuidv4(),
			name: "New",
			servings: 1,
			servings: "1:00",
			instructions: "Instr.",
			ingredients: [{ id: uuidv4(), name: "name", amount: "1 tbs" }],
		}

		setRecipies([...recipes, newRecipe])
	}

	function handleRecipeDelete(id) {
		setRecipies(recipes.filter((recipe) => recipe.id != id))
	}

	return (
		<React.StrictMode>
			<RecipeContext.Provider value={recipeContextValue}>
				<RecipeList recipies={recipes} />
				{selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
			</RecipeContext.Provider>
		</React.StrictMode>
	)
}

const sampleRecipies = [
	{
		id: 1,
		name: "Plain chicken",
		servings: 3,
		cookTime: "1:45",
		instructions: `1. Put salt on chicken\n2. Put chicken in oven\n3. Eat the chicken
		`,
		ingredients: [
			{ id: 1, name: "chicken", amount: "2pounds" },
			{ id: 2, name: "solt", amount: "1tbs" },
		],
	},
	{
		id: 2,
		name: "Plain Pork",
		servings: 5,
		cookTime: "0:45",
		instructions: `1. Put paprika on pork\n2. Put pork in oven\n3. Eat the pork`,
		ingredients: [
			{ id: 3, name: "pork", amount: "3pounds" },
			{ id: 4, name: "paprika", amount: "2tbs" },
		],
	},
]

export default App
