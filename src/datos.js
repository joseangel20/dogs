const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const filterBeerds = async ({ request}) => {
  try {
    const url = new URL(request.url);
    const breed = url.searchParams.get("q") || "";
    const endpoint = breed
      ? `${BASE_URL}/breeds/search?q=${breed}`
      : `${BASE_URL}/breeds?limit=12`;

    const response = await fetch(endpoint, {
      headers: { "x-api-key": API_KEY },
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const datos = await response.json();
    return datos;
  } catch (error) {
    throw new Error("No se pudieron cargar los perros", { cause: error });
  }
};

const dogsLoadersBreedsList = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all", {
      headers: { "x-api-key": API_KEY },
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    return response.json();
  } catch (error) {
    throw new Error("No se pudieron cargar las razas", { cause: error });
  }
};

const homeLoader = async ({ request }) => {
  const [breeds, filter] = await Promise.all([
    dogsLoadersBreedsList(),
    filterBeerds({ request }),
  ]);

  return {
    breeds: breeds.message,
    filter,
  };
};

export { homeLoader };
