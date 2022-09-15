const postComment = async (formData = {}) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iIM70JGWh9jMYmdexC2s/comments/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
};

export default postComment;
