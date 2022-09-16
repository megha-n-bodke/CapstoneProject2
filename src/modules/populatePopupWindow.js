import getMealsFromApi from './getMealsFromApi.js';
import postComment from './postComment.js';
import fetchComment from './fetchComment.js';
import countComments from './countComments.js';
import displayFetchedComments from './displayFetchedComment.js';

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

  const itemId = data[index].idMeal;
  submitCommit.id = `${data[index].idMeal}`;

  submitCommit.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = document.querySelector('#name').value;
    const comment = document.querySelector('#textarea').value;
    
    const commentDiv = document.querySelector('.show-comments');
    const itemId = e.target.id;
    const DataComment = {
      item_id: Number(itemId),
      username,
      comment,
    };
    let d = new Date();
    const currentDate = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    const div = document.createElement('div');
    div.className = 'view-comments';
    const date = document.createElement('p');
    date.className = 'date-comment';
    date.innerHTML = `${currentDate}`
    const usernameComment = document.createElement('p');
    usernameComment.className = 'username-comment';
    usernameComment.innerHTML = `${username}:`;
    const com = document.createElement('p');
    com.innerHTML = `${comment}`;
    div.append(date,usernameComment,com);
    
    commentDiv.appendChild(div);

    postComment(DataComment);
    document.querySelector('#name').value = '';
    document.querySelector('#textarea').value = '';

    const numberOfComments = document.querySelector('.count-comments');
    numberOfComments.value = Number(numberOfComments.value) + 1;
  });
  displayFetchedComments(itemId);
}

export default populatePopupWindow;