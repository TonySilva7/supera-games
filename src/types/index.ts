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

export interface IItem {
	id: number;
	product: IProduct;
	quantity: number;
	frete: 0.0 | 10.0;
	total: number;
}

export interface ICart {
	items: Array<IItem>;
}
