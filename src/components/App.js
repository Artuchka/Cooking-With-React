import React from "react"
import RecipeList from "./RecipeList"

import "./../css/app.css"

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
			{ id: 1, name: "pork", amount: "3pounds" },
			{ id: 2, name: "paprika", amount: "2tbs" },
		],
	},
]

export default App
