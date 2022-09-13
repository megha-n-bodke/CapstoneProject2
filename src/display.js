const display = async () => {
  try {
    const response = await fetch(
      www.themealdb.com / api / json / v1 / 1 / categories.php,
    );
    const { result } = await response.json();
  } catch (error) {}
};
