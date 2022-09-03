const newsCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  newsDisplay(data.data.news_category);
};

const newsDisplay = (categories) => {
  console.log(categories);
};

newsCategory();
