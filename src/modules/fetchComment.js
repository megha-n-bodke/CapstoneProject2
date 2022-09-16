const fetchComment = async (itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iIM70JGWh9jMYmdexC2s/comments?item_id=${itemId}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default fetchComment;
