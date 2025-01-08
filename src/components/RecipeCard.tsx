import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative h-48">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {recipe.category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            {recipe.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span className="mr-4">{recipe.prepTime + recipe.cookTime} mins</span>
            <Users className="w-4 h-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </Link>
  );
};