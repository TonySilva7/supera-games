export const baseURL: string = '/products.json';
export const baseUrlImage = '/assets/img';

const fetchGames = async (url: string) => {
	const fullUrl = url === baseURL ? baseURL : baseURL + url;

	const response = await fetch(fullUrl)
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return response;
};

export default fetchGames;
