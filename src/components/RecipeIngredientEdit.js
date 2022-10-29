import React from "react"

export default function RecipeIngredientEdit({ ingredient }) {
	const { name, amount } = ingredient
	return (
		<>
			<input type="text" className="recipe-edit__input" value={name} />
			<input type="text" className="recipe-edit__input" value={amount} />
			<button className="btn btn--danger">&times;</button>
		</>
	)
}
