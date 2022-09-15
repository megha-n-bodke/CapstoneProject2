import { baseUrl, singlecard } from './getElements.js';
import availableDishCount from './dishCount.js';
import postLikes from './postLikes.js';

const display = async () => {
  try {
    const response = await fetch(baseUrl);
    const { meals } = await response.json();
    let dishCount = 0;

    meals.map((dish) => {
      // @sonick include idMeal in line number 12 with strMeal i have removed due to linter error.
      const { idMeal, strMeal, strMealThumb } = dish;

      const columnsDiv = document.createElement('div');
      columnsDiv.className = 'col-md-4';

      const card = document.createElement('div');
      card.className = 'card p-2 my-3 ';

      const img = document.createElement('img');
      img.className = 'card-img-top';
      img.src = strMealThumb;

      // card body
      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body';

      const dishNamePara = document.createElement('p');
      dishNamePara.className = 'card-text';
      dishNamePara.innerText = strMeal;

      const cardLikesDiv = document.createElement('div');
      cardLikesDiv.className = 'd-flex justify-content-between';

      // div for likes
      const cardNameLikesDiv = document.createElement('div');
      const likesPara = document.createElement('p');
      likesPara.innerText = 'Likes 0';

      const heart = document.createElement('i');
      heart.className = 'fa fa-heart';
      heart.addEventListener('click', () => {
        postLikes(idMeal);
      });

      // button div
      const buttonDiv = document.createElement('div');
      const commentBtn = document.createElement('button');
      buttonDiv.className = 'card-actions';
      commentBtn.className = 'btn btn-secondary';

      commentBtn.innerText = 'Comments';

      dishNamePara.innerText = strMeal;

      singlecard.appendChild(columnsDiv);
      columnsDiv.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardLikesDiv);
      cardLikesDiv.appendChild(dishNamePara);

      cardLikesDiv.appendChild(cardNameLikesDiv);
      cardNameLikesDiv.appendChild(heart);
      cardNameLikesDiv.appendChild(likesPara);

      card.appendChild(buttonDiv);
      buttonDiv.appendChild(commentBtn);
      dishCount += 1;
      return dishCount;
    });
    availableDishCount(dishCount);
  } catch (error) {
    console.error(error.message);
  }
};

export default display;
