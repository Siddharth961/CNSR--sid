const apiKey = "044a017fcd7140fba193651c3ca2c84a";
const apiUrl = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${apiKey}`;
const newsContainer = document.querySelector(".news-container");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let articles = [];
let currentPage = 1;
const articlesPerPage = 4;

async function getArticles() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function showArticles(page) {
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const articles = await getArticles();
  const currentArticles = articles.slice(startIndex, endIndex);
  newsContainer.innerHTML = "";
  currentArticles.map((news) => {
    const author = news.author ?? "Anonymous";
    const title = news.title;
    const description = news.description;
    const url = news.url;
    const imageUrl = news.urlToImage;

    const html = `
    <figure class="snip1208">
        <img
          src="${imageUrl}"
          alt="image"
        />
        <figcaption>
          <h3>${title}</h3>
          <p>
            ${description}
          </p>
          <button href="${url}">Read More</button>
          </figcaption>
          <a href="${url}"></a>
          </figure>
          `;
    newsContainer.insertAdjacentHTML("afterbegin", html);
  });
  //////////////////////////////////////////

  // const getArticles = (articles = fetch(apiUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Use the data returned by the API call
  //     console.log(data);
  //     return data.articles;
  //   })
  //   .catch((error) => {
  //     // Handle any errors that occurred
  //     console.error(error);
  //   }));
  // articles.then(function (article) {
  //   article.map((news) => {
  //     const author = news.author ?? "Anonymous";
  //     const title = news.title;
  //     const description = news.description;
  //     const url = news.url;
  //     const imageUrl = news.urlToImage;

  //     const html = `
  //   <figure class="snip1208">
  //       <img
  //         src="${imageUrl}"
  //         alt="image"
  //       />
  //       <figcaption>
  //         <h3>${title}</h3>
  //         <p>
  //           ${description}
  //         </p>
  //         <button href="${url}">Read More</button>
  //         </figcaption>
  //         <a href="${url}"></a>
  //         </figure>
  //         `;
  //     newsContainer.insertAdjacentHTML("afterbegin", html);
  //   });
  // });

  //////////////////////////////////////////////////////////////////////////
  /////////////////Buttons//////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  // Hide "Previous" button on first page
  if (currentPage === 1) {
    prevButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
  }

  // Hide "Next" button on last page
  if (currentArticles.length < articlesPerPage) {
    nextButton.classList.add("hidden");
  } else {
    nextButton.classList.remove("hidden");
  }
}

prevButton.addEventListener("click", () => {
  currentPage--;
  showArticles(currentPage);
});

nextButton.addEventListener("click", () => {
  currentPage++;
  showArticles(currentPage);
});

showArticles(currentPage);
