import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import fetchGames from '../../services/api';
import { ICart, IGamesState, IProduct } from '../../types';

const product: IProduct = {
	id: 0,
	name: '',
	price: 0.0,
	score: 0,
	image: '',
};

const cart: ICart = {
	items: [],
	total: 0.0,
};

const initialState: IGamesState = {
	status: 'ok',
	products: [product],
	cart: cart,
};

// Faz requisição para API
export const getGames = createAsyncThunk('games', async (url: string) => {
	const response = await fetchGames(url);
	return response;
});

export const gamesSlice = createSlice({
	name: 'games',
	initialState,

	reducers: {
		// Adiciona um item ao carrinho
		addToCart: (state, action) => {
			const { id, name, price, score, image } = action.payload.product;
			const { quantity } = action.payload;
			const { isSelected } = action.payload;

			if (quantity === 0) return;

			const item: IProduct = {
				id,
				name,
				price,
				score,
				image,
			};

			const cart = state.cart;
			const items = cart.items;
			const itemIndex = items.findIndex((item) => item.id === id);

			if (itemIndex === -1) {
				items.push({
					id,
					product: item,
					quantity: quantity,
					ship: 10.0,
					total: item.price * quantity,
					isSelected,
				});
			} else {
				items[itemIndex].quantity += 1;
				items[itemIndex].total = items[itemIndex].product.price * items[itemIndex].quantity;
			}

			debugger;
			const totalItem = items.reduce((acc, item) => acc + item.product.price, 0);
			if (totalItem > 250.0) {
				items.forEach((item) => {
					item.ship = 0.0;
				});
			}
			const myShip = items.reduce((acc, item) => acc + item.ship, 0);
			cart.total = items.reduce((acc, item) => acc + item.total, 0) + myShip;

			cart.items = items;
			state.cart = cart;
		},

		// Remove um item do carrinho
		removeFromCart: (state, action) => {
			const id = action.payload;

			const cart = state.cart;
			const items = cart.items;
			const itemIndex = items.findIndex((item) => item.product.id === id);

			if (itemIndex === -1) return;

			items.splice(itemIndex, 1);

			cart.items = items;
			cart.total = items.reduce((acc, item) => acc + item.total, 0);
			state.cart = cart;
		},

		// sort games by score
		sortByScore: (state, action) => {
			if (action.payload) {
				state.products.sort((a, b) => b.score - a.score);
			}
		},

		// sort games by price
		sortByPrice: (state, action) => {
			if (action.payload) {
				state.products.sort((a, b) => a.price - b.price);
			}
		},

		// sort games by name
		sortByName: (state, action) => {
			if (action.payload) {
				state.products.sort((a, b) => a.name.localeCompare(b.name));
			}
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getGames.fulfilled, (state: IGamesState, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
			state.status = 'ok';
			console.log(state);
		});

		builder.addCase(getGames.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(getGames.rejected, (state, action) => {
			state.status = 'error';
		});
	},
});

export const { sortByName, sortByPrice, sortByScore, addToCart, removeFromCart } =
	gamesSlice.actions;

export const selectGames = (state: RootState) => state;
export const selectQntItens = (state: RootState) => state.games.cart.items.length;
export const selectIsSelectedItem = (state: RootState) =>
	state.games.cart.items.filter((item) => item.isSelected);

export default gamesSlice.reducer;
