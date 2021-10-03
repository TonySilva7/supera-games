export const baseURL: string = '../api/products.json';

const fetchGames = async (url: string) => {
	const fullUrl = `${baseURL}`;

	const response = await fetch(fullUrl)
		.then((res) => res.json())
		.then((games) => games)
		.catch((err) => console.log(err));

	return response;
};

export default fetchGames;
