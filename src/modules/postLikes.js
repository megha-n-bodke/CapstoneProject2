import { involvementUrlLikes } from './getElements.js';

const postLikes = async (id) => {
  try {
    await fetch(involvementUrlLikes, {
      method: 'POST',

      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify({
        item_id: id,
      }),
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default postLikes;
