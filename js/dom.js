const newsCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  newsDisplay(data.data.news_category);
};

const newsDisplay = (categories) => {
  categories.forEach((category) => {
    console.log(category.category_name);
  });
};

newsCategory();
