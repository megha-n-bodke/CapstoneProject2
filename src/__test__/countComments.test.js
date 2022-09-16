global.fetch = () => Promise.resolve({
  json: () => Promise.resolve([
    {
      item_id: 52977,
    },
  ]),
});
test('Check comment counts for meal', async () => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iIM70JGWh9jMYmdexC2s/comments?item_id=52977');
  const comments = await data.json();
  const numberOfComments = comments.length;
  expect(comments).toHaveLength(numberOfComments);
});