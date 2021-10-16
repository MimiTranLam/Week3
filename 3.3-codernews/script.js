//let promise = fetch(url, [options]);
const API_KEY = "f6c1a49539e442899c7f011974578653";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// async function fetchURL(){
//     try {
        
//     } catch (err) {
//         alert(err);
//     }
// };

const fetchURL = async () => {
    try {
        let response = await fetch(url);
        let commits = await response.json(); // read response body and parse as JSON
        console.log(commits);
    } catch (error) {
      console.log("ERROR : getData", error);
    }
};

fetchURL();

async function getArticles() {
    const response = await fetch(url);
    const json = await response.json();
    const { articles } = json;
    console.log(articles.length);
    document.getElementById("title").innerHTML = `CoderNews (${articles.length})`;
    const articlesHTML = articles.map(renderArticle);
    const newsList = document.createElement("ul");
    newsList.setAttribute("id", "newsList");
    document.body.appendChild(newsList);
    document.getElementById("newsList").innerHTML = articlesHTML.join("");
};

getArticles();

// Refactor renderArticle() to make the news article more beautiful.
function renderArticle(article) {
    return `
      <li class="mb-3 align-self-center article">
          ${article.title}
          <img src="${article.urlToImage}" alt="Snow" />
        </div>
          <i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
          <h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
        <p><i class="fa fa-envelope"></i>${article.content}</p>
      </li>
    `;
};

//* [ ] As a reader, I can easily read articles on the page when viewing from my mobile device.

//* [ ] As a reader I can see a headline, image, writer, source, date, and body of each article.
//pretty up
//make an encasing div for list of articles? change newslist ul to div
//use icons for sources or link for sources. or just if the article has these sources, highlight/change color of source and make link?

//* [ ] Next to the source name, the user sees a number representing the number of stories from that source. To continue the previous example: bbc-news (2), cnn (1), spiegel-de (1).
//* [ ] As a user I can toggle the checkbox to hide or show stories from that source in the list.
// make filter for sources like shopping sites where next to category they display quant num
// filter with search bar

//* [ ] As a reader I can see the total number of stories currently shown.
//"n of ${articles.length}" ? , scroll for more

//* [ ] As a reader I can click a link at the bottom of the page to load the next 20 stories. The page should not refresh; the stories should add to the bottom of the page.
//scroll for more
//back to top
//add 20 each time

//* [?] As a user I can see new stories related to the category I chose.
//* [ ] As a reader I can see all the categories available.
//* [ ] As a reader I can see click on a category and see stories in that category.
//make navbar - responsive, can hide in a small screen, choose style - burger? or navbar at bottom and search at top
//make category button for each article to load page into one only containing articles - hide unrelated ones?
//nav - logo/name, home, crypto, (my) favourited/bookmarked, languages

//* [ ] As a user I see the date is formatted to my preferred language.
//* [ ] As a reader I can see all the languages available.
//* [ ] As a reader I can search for articles using a search bar at the top of the page.
//* [ ] As a reader I can see click on a language and see stories in that language.
// language dropdown

//* [ ] As a reader I can see how long ago the story was published in a human-friendly format; e.g. "15 minutes ago". To accomplish this, we recommend you use momentjs. Load it into your page using cdnjs or jsdelivr (these are called CDNs)
//get time, put date and time at top

//* [ ] As a reader I can save articles that I like for later viewing.
//like an add to cart? favourites or bookmark - make a side toggle flag thing on the side when you hover over, it sticks out, animation for bookmarked and copy page into a favourites list in navbar
// animation = fold over corner?

//* [ ] As a user I can see the price of Bitcoin & Ethereum as well. Use this API.
//take from thurs lab

// let user = {
//     name: "John",
//     email: "john2020@gmail.com",
// };

// let response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(user),
// });

// let result = await response.json();
// console.log(result.message);