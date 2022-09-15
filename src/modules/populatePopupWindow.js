import getMealsFromApi from './getMealsFromApi.js';
import postComment from './postComment.js';

const popImage = document.querySelector('.meal-img');
const category = document.querySelector('.category');
const country = document.querySelector('.country');
const mealTitle = document.querySelector('.meal-title');

const submitCommit = document.querySelector('.comment-submit-btn');

async function populatePopupWindow(index) {
  const object = await getMealsFromApi();
  const data = object.meals;
  popImage.src = `${data[index].strMealThumb}`;
  mealTitle.innerHTML = `${data[index].strMeal}`;
  category.innerHTML = `Category : ${data[index].strCategory}`;
  country.innerHTML = `Area : ${data[index].strArea}`;

  // const itemId = object[index].idMeal;
  // console.log(itemId);
  submitCommit.id = `${data[index].idMeal}`;

  submitCommit.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = document.querySelector('#name').value;
    const comment = document.querySelector('#textarea').value;
    const itemId = e.target.id;
    const Data = {
      item_id: Number(itemId),
      username,
      comment,
    };
    postComment(Data);
    document.querySelector('#name').value = '';
    document.querySelector('#textarea').value = '';
  });
}

export default populatePopupWindow;