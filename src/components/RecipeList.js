import React from "react"
import Recipe from "./Recipe"

export default function RecipeList({ recipies }) {
	return (
		<div className="recipe-list">
			<div>
				{recipies.map((rec) => {
					return <Recipe key={rec.id} {...rec}></Recipe>
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button className="btn btn--primary">Add Recipe</button>
			</div>
		</div>
	)
}
