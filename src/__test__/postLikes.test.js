test("Check likes count for dish", async () => {
  const data = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aTMYq3Wixuk5kWkomKWK/likes"
  );
  const likes = await data.json();
  expect(likes).toBe();
});
