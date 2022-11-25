import "./vanilla-framework.scss";

import fetchPosts from "./api/fetch-posts";
import renderPostsCards from "./ui/render-posts-cards";

// Main function (posts cards rendering)
const main = async () => {
  const posts = await fetchPosts();

  const targetEl = document.querySelector("#posts-cards");
  targetEl.innerHTML = renderPostsCards(posts);
};

main();
