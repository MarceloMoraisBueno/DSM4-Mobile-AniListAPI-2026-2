const API_URL = "https://graphql.anilist.co";

export async function buscarAnimePorNome(nome) {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        status
        episodes
        genres
        description
      }
    }
  `;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { search: nome },
    }),
  });

  const data = await response.json();

  if (!data.data || !data.data.Media) {
    return null;
  }

  return data.data.Media;
}