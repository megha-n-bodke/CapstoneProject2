import getMealsFromApi from './getMealsFromApi.js';

const popImage = document.querySelector('.meal-img');
const category = document.querySelector('.category');
const country = document.querySelector('.country');
const mealTitle = document.querySelector('.meal-title');

async function populatePopupWindow(index) {
  const object = await getMealsFromApi();
  const data = object.meals;
  popImage.src = `${data[index].strMealThumb}`;
  mealTitle.innerHTML = `${data[index].strMeal}`;
  category.innerHTML = `Category : ${data[index].strCategory}`;
  country.innerHTML = `Area : ${data[index].strArea}`;
}

export default populatePopupWindow;