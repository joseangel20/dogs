const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const dogsLoaders = async () => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      headers: { "x-api-key": API_KEY },
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    return response.json();
  } catch (error) {
    throw new Error("No se pudieron cargar los perros", { cause: error });
  }
};

const dogsLoadersBreeds = async () => {
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

const homeLoader = async () => {
  const [dogs, breeds] = await Promise.all([
    dogsLoaders(),
    dogsLoadersBreeds(),
  ]);

  return {
    dogs,
    breeds: breeds.message,
  };
};

export { homeLoader };
