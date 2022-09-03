const newsCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  newsDisplay(data.data.news_category);
};

const newsDisplay = (categories) => {
  const categoryItemFiled = document.getElementById("category-container");
  categories.forEach((category) => {
    const makeUl = document.createElement("ul");
    makeUl.classList.add("nav");
    makeUl.innerHTML = `
    <li onclick="singleCategory('${category.category_id}')" >${category.category_name}</li>
    `;
    categoryItemFiled.appendChild(makeUl);
  });
};

const singleCategory = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  singleNewsDisplay(data.data);
};

const singleNewsDisplay = (oneNews) => {
  const perNewsFiled = document.getElementById("single-news");
  oneNews.forEach((news) => {
    const {
      author,
      details,
      image_url,
      others_info,
      rating,
      title,
      total_view,
      _id,
    } = news;
    const makediv = document.createElement("div");
  });
};

newsCategory();
