import React from "react"
import RecipeList from "./RecipeList"
function App() {
	return (
		<>
			<RecipeList recipies={sampleRecipies} />
		</>
	)
}

const sampleRecipies = [
	{
		id: 1,
		name: "Plain chicken",
		servings: 3,
		cookTime: "1:45",
		instructions: `1. Put salt on chicken 2. Put chicken in oven 3. Eat the chicken
		`,
	},
	{
		id: 2,
		name: "Plain Pork",
		servings: 5,
		cookTime: "0:45",
		instructions: `1. Put paprika on pork 2. Put pork in oven 3. Eat the pork
		`,
	},
]

export default App
