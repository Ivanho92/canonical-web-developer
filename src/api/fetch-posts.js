const fetchPosts = async () => {
  const response = await fetch(
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
  );
  const data = await response.json();
  return data;
};

export default fetchPosts;
