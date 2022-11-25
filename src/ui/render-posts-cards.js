import { upperFirstChar } from "../util/strings";
import { formatDate } from "../util/dates";

const renderPostCard = (post) => {
  const title = post.title.rendered;
  const link = post.link;
  const category = post._embedded["wp:term"][2][0]?.name || "General";
  const imgLink =
    post.featured_media ||
    "https://assets.ubuntu.com/v1/36f1139e-Design-and-Web-Team-Blog.jpg";
  const authorLink = post._embedded.author[0].link;
  const author = post._embedded.author[0].name;
  const date = post.date;
  const type = post.type;

  return `
    <div class="col-4">
      <div class="p-card">
        <h2 class="p-heading--4" style="font-weight: 300">${category.toUpperCase()}</h2>
        <hr class="u-sv1 is-muted">
        <img class="p-card__image u-sv1" alt="" height="185" width="330" src="${imgLink}">
        <h4><a href="${link}">${title}</a></h4>
        <em>By <a href="${authorLink}">${author}</a> on ${formatDate(date)}</em>
        <hr class="u-sv2 is-muted">
        <p class="p-card__content">${upperFirstChar(type)}</p>
      </div>
    </div>
  `;
};

const renderPostsCards = (posts) => {
  let postsCards = "";
  posts.forEach((post) => {
    postsCards += renderPostCard(post);
  });

  return `
    <div class="row">
        ${postsCards}
    </div>
  `;
};

export default renderPostsCards;
