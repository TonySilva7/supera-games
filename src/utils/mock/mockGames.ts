import { ICart, IGamesState, IItem, IProduct } from '../../types';

// Produtos
export const product1: IProduct = {
	id: 1,
	name: 'Battle Field',
	price: 50.0,
	score: 5,
	image: '',
};

export const product2: IProduct = {
	id: 2,
	name: 'Clash Of Clans',
	price: 25.0,
	score: 2,
	image: '',
};

export const product3: IProduct = {
	id: 3,
	name: 'Ace Strike ',
	price: 100.0,
	score: 3,
	image: '',
};

// Itens do carrinho
export const item1: IItem = {
	id: 1,
	product: product1,
	quantity: 2,
	shipping: 10.0,
	total: product1.price * 2,
	isSelected: false,
};

export const item2: IItem = {
	id: 2,
	product: product2,
	quantity: 1,
	shipping: 10.0,
	total: product2.price,
	isSelected: false,
};

export const item3: IItem = {
	id: 3,
	product: product3,
	quantity: 3,
	shipping: 10.0,
	total: product3.price,
	isSelected: false,
};

// Carrinho
export const cart: ICart = {
	items: [],
	total: 0.0,
};

// Estado Global
export const prevState: IGamesState = {
	status: 'ok',
	products: [product1, product2, product3],
	cart: cart,
};
