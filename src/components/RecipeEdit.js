import React from "react"
import RecipeIngredientEdit from "./RecipeIngredientEdit"

export default function RecipeEdit({ recipe }) {
	const { id, name, servings, cookTime, instructions, ingredients } = recipe
	return (
		<div className="recipe-edit">
			<div className="recipe-edit__remove-button-container">
				<button className="btn recipe-edit__remove-btn">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="recipe-edit__input"
					value={name}
				/>

				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input
					type="text"
					name="cookTime"
					id="cookTime"
					className="recipe-edit__input"
					value={cookTime}
				/>

				<label htmlFor="servings" className="recipe-edit__label">
					Servings
				</label>
				<input
					type="number"
					name="servings"
					id="servings"
					className="recipe-edit__input"
					value={servings}
				/>

				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
				<textarea
					name="instructions"
					id="instructions"
					className="recipe-edit__input"
				>
					{instructions}
				</textarea>
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				{ingredients.map((ing) => (
					<RecipeIngredientEdit key={id} ingredient={ing} />
				))}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="recipe-edit__add-ingredient-btn btn btn--primary">
					Add Ingredient
				</button>
			</div>
		</div>
	)
}
