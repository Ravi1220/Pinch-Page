import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Masala Dosa',
    description: 'Crispy rice and lentil crepe filled with spiced potato filling',
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    ingredients: [
      'Dosa batter',
      'Potatoes - 4 medium, boiled and mashed',
      'Onions - 2 medium, finely chopped',
      'Mustard seeds - 1 tsp',
      'Curry leaves - 10-12',
      'Turmeric powder - 1/2 tsp',
      'Green chilies - 2-3, finely chopped',
      'Coconut chutney for serving'
    ],
    instructions: [
      'Start by preparing the potato filling. Heat 2 tablespoons of oil in a pan over medium heat',
      'Add mustard seeds and let them crackle. Then add curry leaves and sauté for 30 seconds',
      'Add finely chopped onions and green chilies. Sauté until onions turn translucent',
      'Add turmeric powder and mashed potatoes. Mix well and cook for 5 minutes. Set aside',
      'Heat a non-stick dosa tawa or griddle on medium-high heat. Sprinkle some water to test - it should sizzle',
      'Pour a ladleful of dosa batter in the center and spread in circular motions to form a thin crepe',
      'Drizzle oil around the edges and on top. Cook until the bottom turns golden brown',
      'Place a portion of potato filling in the center of the dosa',
      'Using a spatula, carefully fold the dosa in half or roll it',
      'Serve hot with coconut chutney and sambar'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Butter Chicken',
    description: 'Tender chicken in rich, creamy tomato-based curry',
    category: 'Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    prepTime: 40,
    cookTime: 30,
    servings: 4,
    ingredients: [
      '800g chicken thighs, cut into pieces',
      '1 cup yogurt',
      '200g butter',
      '2 cups tomato puree',
      '1 cup heavy cream',
      '2 tbsp garam masala',
      '2 tbsp kasuri methi (dried fenugreek leaves)',
      '1 tbsp honey'
    ],
    instructions: [
      'First marinade: Mix chicken with yogurt, 1 tbsp garam masala, salt, and let it rest for 30 minutes',
      'Preheat your grill or oven to 200°C (400°F). Grill the marinated chicken for 15-20 minutes until charred',
      'Meanwhile, start the sauce. Melt butter in a large pot over medium heat',
      'Add pureed tomatoes, remaining garam masala, and salt. Cook for 15-20 minutes until oil separates',
      'Add grilled chicken pieces to the sauce and simmer for 5-7 minutes',
      'Pour in the heavy cream and honey. Stir well and cook for another 5 minutes',
      'Crush the kasuri methi between your palms and add to the curry',
      'Simmer for final 5 minutes until the curry reaches desired consistency',
      'Finish with a dollop of butter on top',
      'Serve hot with naan bread or rice'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Palak Paneer',
    description: 'Cottage cheese cubes in creamy spinach gravy',
    category: 'Lunch',
    imageUrl: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    ingredients: [
      '500g spinach leaves',
      '250g paneer, cubed',
      '2 onions, finely chopped',
      '3 tomatoes, pureed',
      '2 tbsp ginger-garlic paste',
      '1 tbsp garam masala',
      '1/2 cup cream',
      '2 tbsp butter'
    ],
    instructions: [
      'Blanch spinach leaves in boiling water for 2-3 minutes, then immediately transfer to ice water',
      'Drain the spinach and blend into a smooth puree. Set aside',
      'Heat butter in a pan. Add cubed paneer and lightly fry until golden. Remove and set aside',
      'In the same pan, add more butter if needed. Add ginger-garlic paste and sauté for 1 minute',
      'Add chopped onions and cook until golden brown, about 5-6 minutes',
      'Add tomato puree and cook until oil starts to separate, about 5-7 minutes',
      'Add garam masala and salt. Cook for 2 minutes',
      'Add the spinach puree and simmer for 5 minutes',
      'Stir in cream and fried paneer cubes. Simmer for another 3-4 minutes',
      'Serve hot with roti or naan'
    ],
    featured: false
  },
  {
    id: '4',
    title: 'Gulab Jamun',
    description: 'Deep-fried milk solids soaked in sugar syrup',
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    prepTime: 30,
    cookTime: 20,
    servings: 6,
    ingredients: [
      '1 cup milk powder',
      '1/4 cup all-purpose flour',
      '1/2 tsp cardamom powder',
      '2 cups sugar',
      '1 cup water',
      '1 tsp rose water',
      'Ghee for frying',
      'Few saffron strands'
    ],
    instructions: [
      'Start with the sugar syrup. In a pan, combine sugar and water. Bring to a boil',
      'Add cardamom powder and saffron strands. Simmer until slightly sticky. Add rose water and keep warm',
      'For the jamuns, mix milk powder and flour in a bowl',
      'Add a little milk, knead into a soft dough. Don\'t overknead',
      'Divide the dough into small portions and roll into smooth balls. Ensure no cracks',
      'Heat ghee in a deep pan on medium-low heat',
      'Fry the balls in batches, stirring gently and continuously',
      'Fry until golden brown, about 5-7 minutes',
      'Immediately transfer the hot jamuns into the warm sugar syrup',
      'Let them soak for at least 30 minutes before serving',
      'Garnish with saffron strands and serve warm or at room temperature'
    ],
    featured: true
  },
  {
    id: '5',
    title: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    category: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    prepTime: 45,
    cookTime: 20,
    servings: 8,
    ingredients: [
      '2 cups all-purpose flour',
      '4 potatoes, boiled and mashed',
      '1 cup green peas',
      '1 tbsp cumin seeds',
      '1 tbsp ginger, finely chopped',
      '2-3 green chilies, chopped',
      '1/4 cup coriander leaves',
      'Oil for deep frying'
    ],
    instructions: [
      'For the pastry, mix flour with salt and oil until crumbly. Add water gradually to make firm dough',
      'Cover and let the dough rest for 30 minutes',
      'Meanwhile, heat oil in a pan. Add cumin seeds and let them crackle',
      'Add ginger and green chilies. Sauté for a minute',
      'Add mashed potatoes, peas, and spices. Cook for 5-7 minutes. Let it cool',
      'Divide the dough into small portions. Roll each portion into an oval',
      'Cut each oval in half to form two semicircles',
      'Form a cone, fill with potato mixture, and seal edges with water',
      'Heat oil for deep frying. Fry samosas on medium heat until golden brown',
      'Serve hot with mint chutney and tamarind chutney'
    ],
    featured: false
  },
  {
    id: '6',
    title: 'Paneer Tikka',
    description: 'Grilled Indian cottage cheese with aromatic spices',
    category: 'Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    ingredients: [
      '400g paneer, cubed',
      '1 cup thick yogurt',
      '2 tbsp ginger-garlic paste',
      '2 tbsp tandoori masala',
      '1 tsp garam masala',
      '1 tbsp lemon juice',
      '2 bell peppers and 1 large onion, cubed',
      'Salt to taste'
    ],
    instructions: [
      'In a large bowl, whisk yogurt until smooth. Add ginger-garlic paste, tandoori masala, garam masala, and salt',
      'Add lemon juice and mix well to form a thick marinade',
      'Cut paneer into 1-inch cubes. Similarly, cut bell peppers and onions into chunks',
      'Add the paneer and vegetables to the marinade, coating them well',
      'Cover and refrigerate for at least 30 minutes, preferably 2-3 hours',
      'Preheat your grill or oven to 200°C (400°F)',
      'Thread marinated paneer and vegetables alternately onto skewers',
      'Brush with oil and grill for 12-15 minutes, turning occasionally',
      'Baste with butter and grill for another 2-3 minutes until charred spots appear',
      'Serve hot with mint chutney and sliced onions'
    ],
    featured: true
  }
];