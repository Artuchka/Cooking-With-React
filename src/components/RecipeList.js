import React from "react"
import Recipe from "./Recipe"

export default function RecipeList({ recipies }) {
	return (
		<>
			<div>
				{recipies.map((rec) => {
					return <Recipe key={rec.id} {...rec}></Recipe>
				})}
			</div>
			<button>Add Recipe</button>
		</>
	)
}
