const apikey = "5oYC4I1mQuSmXPzR1M8slFD4E4KyYzHA";

export default function getApi({ keyword = "cat" } = {}) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => image.images.downsized_medium.url);
        return gifs;
      }
    });
}
