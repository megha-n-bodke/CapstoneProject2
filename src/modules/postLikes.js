import { involvementUrlLikes } from "./getElements.js";

const postLikes = async (id, likesPara) => {
  try {
    await fetch(involvementUrlLikes, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        item_id: id,
      }),
    });
    const likeCount = await fetch(involvementUrlLikes);
    const likes = await likeCount.json();
    console.log(likes);
    const findId = likes.find((like) => like.item_id === id);
    if (findId === undefined) {
      likesPara.innerText = "Likes 0";
    } else {
      likesPara.innerText = `Likes ${findId.likes}`;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default postLikes;
