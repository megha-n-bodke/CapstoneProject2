import { baseUrl, singlecard, involvementUrlLikes } from './getElements.js';
import availableDishCount from './dishCount.js';
import postLikes from './postLikes.js';
// import { baseUrl, singlecard } from "./getElements.js";
// import availableDishCount from "./dishCount.js";

const display = async () => {
  try {
    const response = await fetch(baseUrl);
    const { meals } = await response.json();
    let dishCount = 0;

    // likes
    const likeCount = await fetch(involvementUrlLikes);
    const likes = await likeCount.json();

    meals.map((dish) => {
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
      const findId = likes.find((like) => like.item_id === idMeal);

      const cardNameLikesDiv = document.createElement('div');
      const likesPara = document.createElement('p');
      if (findId === undefined) {
        likesPara.innerText = 'Likes 0';
      } else {
        likesPara.innerText = `Likes ${findId.likes}`;
      }

      const heart = document.createElement('i');
      heart.className = 'fa fa-heart';
      heart.addEventListener('click', () => {
        postLikes(idMeal, likesPara);
      });

      // const cardNameLikesDiv = document.createElement("div");
      // const likesPara = document.createElement("p");
      // likesPara.innerText = "";

      // const heart = document.createElement("i");
      // heart.className = "fa fa-heart";

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
      return dish;
    });
    availableDishCount(dishCount);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default display;
