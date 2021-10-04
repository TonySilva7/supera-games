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

			// verifica se o item já está no carrinho
			if (itemIndex === -1) {
				// monta o item
				items.push({
					id,
					product: item,
					quantity: quantity,
					shipping: 10.0,
					total: item.price * quantity,
					isSelected,
				});
			} else {
				items[itemIndex].quantity += 1;
				items[itemIndex].total = items[itemIndex].product.price * items[itemIndex].quantity;
			}

			// Calcula total do carrinho
			cart.total = items.reduce((acc, item) => acc + item.total, 0);

			//add item ao carrinho
			cart.items = items;
			// atualiza o carrinho
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

			// atualiza lista de itens
			cart.items = items;
			cart.total = items.reduce((acc, item) => acc + item.total, 0);
			state.cart = cart;
		},

		// musa a quantidade de um item no carrinho
		changeQuantity: (state, action) => {
			debugger;
			const { id, qnt } = action.payload;
			if (qnt === 0) return;

			const cart = state.cart;
			const items = cart.items;
			const itemIndex = items.findIndex((item) => item.product.id === id);

			if (itemIndex === -1) return;

			items[itemIndex].quantity = qnt;
			items[itemIndex].total = items[itemIndex].product.price * qnt;

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

export const { sortByName, sortByPrice, sortByScore, addToCart, removeFromCart, changeQuantity } =
	gamesSlice.actions;

export const selectGames = (state: RootState) => state;
export const selectQntItens = (state: RootState) => state.games.cart.items.length;
export const selectIsSelectedItem = (state: RootState) =>
	state.games.cart.items.filter((item) => item.isSelected);
export const selectCart = (state: RootState) => state.games.cart;
export const selectItens = (state: RootState) => state.games.cart.items;

export default gamesSlice.reducer;
