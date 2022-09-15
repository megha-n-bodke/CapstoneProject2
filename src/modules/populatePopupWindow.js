import getMealsFromApi from './getMealsFromApi.js';
import postComment from './postComment.js';
import fetchComment from './fetchComment.js';
import countComments from './countComments.js';

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
    const itemId = e.target.id;
    const DataComment = {
      item_id: Number(itemId),
      username,
      comment,
    };
    postComment(DataComment);
    document.querySelector('#name').value = '';
    document.querySelector('#textarea').value = '';
  });
  const comments = await fetchComment(itemId);
  const numberOfComments = document.querySelector('.count-comments');
  numberOfComments.innerHTML = `(${countComments(comments)})`;
  const commentDiv = document.querySelector('.show-comments');

  if (comments.length > 0) {
    comments.forEach((comment) => {
      commentDiv.innerHTML += `
        <div class="view-comments">
          <p class="date-comment">${comment.creation_date}</p>
          <p class="username-comment">${comment.username}:</p>
          <p>${comment.comment}</p>
        </div>
      `;
    });
  } else {
    const noCommentDiv = document.createElement('p');
    noCommentDiv.className = 'no-comment';
    noCommentDiv.innerHTML = 'No comments Yet. Kindly add some!!';
    commentDiv.appendChild(noCommentDiv);
  }
}

export default populatePopupWindow;