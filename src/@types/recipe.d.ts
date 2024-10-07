export type Recipe = {
    id: string;
    name: string;
    ingredients: RecipeIngredient[];
    steps: string;
};

export type RecipeIngredient = {
    name: string;
    quantity: string;
}

export type RecipeNew = Omit<Recipe, 'id'>