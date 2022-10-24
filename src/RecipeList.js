import React from "react"
import Recipe from "./Recipe"

export default function RecipeList({ recipies }) {
	return (
		<div>
			{recipies.map((rec) => {
				return <Recipe {...rec}></Recipe>
			})}
		</div>
	)
}
