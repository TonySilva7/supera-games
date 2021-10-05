import { ICart, IGamesState, IItem, IProduct } from '../../types';
import reducerGames, {
	addToCart,
	changeQuantity,
	checkout,
	getGames,
	removeFromCart,
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
	it('should sort products by name', () => {
		const nextStatePrice = {
			...prevState,
			products: [product3, product1, product2],
		};

		expect(reducerGames(prevState, sortByName(true))).toEqual(nextStatePrice);
	});

	it('should sort products by price', () => {
		const nextStatePrice = {
			...prevState,
			products: [product2, product1, product3],
		};

		expect(reducerGames(prevState, sortByPrice(true))).toEqual(nextStatePrice);
	});

	it('should sort products by score', () => {
		const nextStatePrice = {
			...prevState,
			products: [product1, product3, product2],
		};

		expect(reducerGames(prevState, sortByScore(true))).toEqual(nextStatePrice);
	});

	it('should not sort products', () => {
		expect(reducerGames(prevState, sortByName(false))).toEqual(prevState);
	});

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

	it('should remove item2 from cart', () => {
		const prevStateCart = {
			...prevState,
			cart: {
				...cart,
				items: [item1, item2, item3],
			},
		};

		const nextState = {
			...prevState,
			cart: {
				...cart,
				items: [item1, item3],
				total: 200.0,
			},
		};

		expect(reducerGames(prevStateCart, removeFromCart(2))).toEqual(nextState);

		let games: IGamesState = reducerGames(prevStateCart, removeFromCart(2));

		expect(games.cart.items.length).toBe(2);
	});

	it('should add quantity 5 to item3', () => {
		const prevStateCart = {
			...prevState,
			cart: {
				...cart,
				items: [item3],
			},
		};

		const nextState = {
			...prevState,
			cart: {
				...cart,
				items: [
					{
						...item3,
						quantity: 5,
						total: 100 * 5,
					},
				],
				total: 500,
			},
		};

		expect(prevStateCart.cart.items[0].quantity).toBe(3);

		expect(reducerGames(prevStateCart, changeQuantity({ id: 3, qnt: 5 }))).toEqual(
			nextState
		);
	});

	it('should doing checkout and clear cart', () => {
		const prevStateCart = {
			...prevState,
			cart: {
				...cart,
				items: [item1, item2, item3],
			},
		};

		const nextState = {
			...prevState,
			cart: {
				...cart,
				items: [],
				total: 0,
			},
		};

		expect(nextState.cart.items.length).toBe(0);

		expect(reducerGames(prevStateCart, checkout())).toEqual(nextState);
	});

	it('should return "loading" when getGames is pending', () => {
		const action = { type: getGames.pending.type };
		const state = reducerGames(prevState, action);

		expect(state).toEqual({
			...prevState,
			status: 'loading',
		});
	});

	it('should return "ok" when getGames is success', () => {
		const action = {
			type: getGames.fulfilled.type,
			payload: [product1, product2, product3],
		};

		const state = reducerGames(prevState, action);

		expect(state).toEqual({
			...prevState,
			status: 'ok',
			products: [product1, product2, product3],
		});
	});

	it('should return "error" when getGames is rejected', () => {
		const action = {
			type: getGames.rejected.type,
			payload: new Error('Error'),
		};

		const state = reducerGames(prevState, action);

		expect(state).toEqual({
			...prevState,
			status: 'error',
		});
	});

	it('should be an array with 3 items', () => {
		const action = {
			type: getGames.fulfilled.type,
			payload: [product1, product2, product3],
		};

		const state = reducerGames(prevState, action);

		expect(state).toEqual({
			...prevState,
			status: 'ok',
			products: [product1, product2, product3],
		});

		expect(state.products.length).toBe(3);
	});
});
