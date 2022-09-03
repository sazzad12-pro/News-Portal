const newsCategory = () => {
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then((res) => res.json())
    .then((data) => newsDisplay(data.data.news_category))
    .catch((error) => console.log(error));
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
  toggleSpiner(true);
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  singleNewsDisplay(data.data);
};

const singleNewsDisplay = (oneNews) => {
  const newsNotFound = document.getElementById("found-data");
  if (oneNews.length === 0) {
    newsNotFound.classList.remove("d-none");
  } else {
    newsNotFound.classList.add("d-none");
  }

  const perNewsFiled = document.getElementById("single-news");
  perNewsFiled.innerHTML = ``;
  oneNews.forEach((news) => {
    const {
      author,
      details,
      image_url,
      thumbnail_url,
      others_info,
      rating,
      title,
      total_view,
      _id,
    } = news;
    const makediv = document.createElement("div");
    makediv.innerHTML = `
    <div class="card mb-3 container" style="max-width: auto;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details.slice(0, 300)}...</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div class="d-flex justify-content-between">
          <div class="d-flex">
             <img src="${author.img}" class="img-1" alt="...">
             <div class="ms-3">
             <p class="mb-0">${author.name}</p>
             <p>${author.published_date}</p>
             </div>
           </div>
          <div>
           <p> <i class="fa-regular fa-eye"></i>${
             total_view ? total_view : "no reached here"
           }</p>       
                  
          </div>
          <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <i class="fa-regular fa-star"></i>
          </div>
          <div>
          <i onclick="perPersonDisplay('${_id}')" class='fa-solid fa-arrow-right' data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"></i>
          </div>
      </div>
    </div>
     </div>
    </div>
    
    `;
    perNewsFiled.appendChild(makediv);
  });
  toggleSpiner(false);
};

// modal open
const perPersonDisplay = async (news_id) => {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  const res = await fetch(url);
  const data = await res.json();
  personShowModal(data.data[0]);
};

const personShowModal = (user) => {
  console.log(user);
};

// load spiner
const toggleSpiner = (isloder) => {
  const spinerFiled = document.getElementById("loader");
  if (isloder) {
    spinerFiled.classList.remove("d-none");
  } else {
    spinerFiled.classList.add("d-none");
  }
};

newsCategory();
