import { baseUrl, singlecard } from "./getElements.js";

export const display = async () => {
  try {
    console.log("inside display");
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
      //"https://www.themealdb.com/api/json/v1/1/lookup.php?i=52789"
    );
    const { meals } = await response.json();
    //console.log(meals);

    let cardContent = "";
    meals.map((dish) => {
      const { idMeal, strMeal, strMealThumb } = dish;

      //console.log(strCategory);
      const columnsDiv = document.createElement("div");
      columnsDiv.className = "col-md-4";

      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = strMealThumb;

      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "card-body";

      const cardNameLikesDiv = document.createElement("div");

      const dishNamePara = document.createElement("p");
      dishNamePara.className = "card-text";

      const cardLikesDiv = document.createElement("div");
      const likesPara = document.createElement("p");

      const buttonDiv = document.createElement("div");
      const commentBtn = document.createElement("button");
      dishNamePara.innerText = strMeal;

      singlecard.appendChild(img);
      singlecard.appendChild(dishNamePara);

      /* cardContent += `dishNamePara`;
      singlecard.innerHTML = cardContent;
       */ //return card;
    });
  } catch (error) {
    console.error(error.message);
  }
};
