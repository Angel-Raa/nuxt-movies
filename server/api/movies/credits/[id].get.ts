export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const movieId = getRouterParam(event, "id");
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const res = await $fetch(url, {
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
  });
  return res;
});
