export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert';
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  featured: boolean;
}