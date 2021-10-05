import { ICart, IGamesState, IItem, IProduct } from '../../types';
import reducerGames, {
	addToCart,
	sortByName,
	sortByPrice,
	sortByScore,
} from './gamesSlice';

// Produtos
const product1: IProduct = {
	id: 1,
	name: 'Battle Field',
	price: 50.0,
	score: 5,
	image: '',
};

const product2: IProduct = {
	id: 2,
	name: 'Clash Of Clans',
	price: 25.0,
	score: 2,
	image: '',
};

const product3: IProduct = {
	id: 3,
	name: 'Ace Strike ',
	price: 100.0,
	score: 3,
	image: '',
};

// Itens do carrinho
const item1: IItem = {
	id: 1,
	product: product1,
	quantity: 2,
	shipping: 10.0,
	total: product1.price * 2,
	isSelected: false,
};

const item2: IItem = {
	id: 2,
	product: product2,
	quantity: 1,
	shipping: 10.0,
	total: product2.price,
	isSelected: false,
};

const item3: IItem = {
	id: 3,
	product: product3,
	quantity: 3,
	shipping: 10.0,
	total: product3.price,
	isSelected: false,
};

// Carrinho
const cart: ICart = {
	items: [],
	total: 0.0,
};

// Estado Global
const prevState: IGamesState = {
	status: 'ok',
	products: [product1, product2, product3],
	cart: cart,
};

describe('Games Reducer', () => {
	it('should order products by name', () => {
		const nextStatePrice = {
			...prevState,
			products: [product3, product1, product2],
		};

		expect(reducerGames(prevState, sortByName(true))).toEqual(nextStatePrice);
	});

	it('should order products by price', () => {
		const nextStatePrice = {
			...prevState,
			products: [product2, product1, product3],
		};

		expect(reducerGames(prevState, sortByPrice(true))).toEqual(nextStatePrice);
	});

	it('should order products by score', () => {
		const nextStatePrice = {
			...prevState,
			products: [product1, product3, product2],
		};

		expect(reducerGames(prevState, sortByScore(true))).toEqual(nextStatePrice);
	});

	it('should not sort products', () => {
		expect(reducerGames(prevState, sortByName(false))).toEqual(prevState);
	});

	// should add item to cart
	it('should add item1 to cart', () => {
		const nextState = {
			...prevState,
			cart: {
				...cart,
				items: [
					{
						...item1,
						isSelected: true,
						total: 100.0,
					},
				],
				total: 100.0,
			},
		};

		expect(
			reducerGames(
				prevState,
				addToCart({ product: product1, quantity: 2, isSelected: true })
			)
		).toEqual(nextState);

		let games: IGamesState = reducerGames(
			prevState,
			addToCart({ product: product1, quantity: 2, isSelected: true })
		);

		expect(games.cart.items.length).toBe(1);
	});
});
