const display = async () => {
  try {
    const response = await fetch(
      "www.themealdb.com / api / json / v1 / 1 / categories.php"
    );
    const { categories } = await response.json();
    categories.map((card) => {
      const { idCategory, strCategory, strCategoryThumb } = card;
    });
  } catch (error) {}
};
