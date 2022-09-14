import { baseUrl, singlecard } from './getElements.js';

const display = async () => {
  try {
    console.log('inside display');
    const response = await fetch(baseUrl);

    const { meals } = await response.json();
    // console.log(meals);

    meals.map((dish) => {
      // @sonick include idMeal in line number 12 with strMeal i have removed due to linter error.
      const { strMeal, strMealThumb } = dish;

      // console.log(strCategory);
      const columnsDiv = document.createElement('div');
      columnsDiv.className = 'col-md-4';

      const card = document.createElement('div');
      card.className = 'card';
      card.className = 'p-3';

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
      cardLikesDiv.className = 'd-flex';
      // cardLikesDiv.className = "justify-content-between";

      // div for likes
      const cardNameLikesDiv = document.createElement('div');
      const likesPara = document.createElement('p');
      likesPara.innerText = 'Likes 0';

      const heart = document.createElement('i');
      heart.className = 'fa fa-heart';

      // button div
      const buttonDiv = document.createElement('div');
      const commentBtn = document.createElement('button');
      buttonDiv.className = 'card-buttons';
      commentBtn.className = 'btn';
      commentBtn.className = 'btn-secondary';

      commentBtn.className = 'w-25';
      commentBtn.innerText = 'Comments';

      dishNamePara.innerText = strMeal;

      singlecard.appendChild(columnsDiv);
      columnsDiv.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardLikesDiv);
      cardLikesDiv.appendChild(dishNamePara);

      cardLikesDiv.appendChild(cardNameLikesDiv);
      cardNameLikesDiv.appendChild(likesPara);
      cardNameLikesDiv.appendChild(heart);

      card.appendChild(buttonDiv);
      buttonDiv.appendChild(commentBtn);

      return dish;
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default display;
