import React, { useContext } from "react"
import { RecipeContext } from "./App"
import Recipe from "./Recipe"

export default function RecipeList({ recipies }) {
	const { handleRecipeAdd } = useContext(RecipeContext)
	return (
		<div className="recipe-list">
			<div>
				{recipies.map((rec) => {
					return <Recipe key={rec.id} {...rec} />
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button
					onClick={handleRecipeAdd}
					className="btn
				btn--primary"
				>
					Add Recipe
				</button>
			</div>
		</div>
	)
}
