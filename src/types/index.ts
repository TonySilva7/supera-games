export interface IProduct {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
}

export interface IGamesState {
	status: 'ok' | 'loading' | 'error';
	products: Array<IProduct>;
}
