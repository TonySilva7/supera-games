import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import fetchGames from '../../services/api';
import { IGamesState, IProduct } from '../../types';

const product: IProduct = {
	id: 0,
	name: '',
	price: 0.0,
	score: 0,
	image: '',
};

const initialState: IGamesState = {
	status: 'ok',
	products: [product],
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
			const temp = state.products;

			if (action.payload) {
				state.products.sort((a, b) => a.name.localeCompare(b.name));
			} else {
				state.products = temp;
				// state.products.sort((a, b) => b.name.localeCompare(a.name));
			}
		},
	},

	// extraReducers: (builder) => {
	// 	builder.addCase(getGames.fulfilled, (state, action: PayloadAction<any>) => {
	// 		state.products = action.payload.products;
	// 		state.status = 'ok';
	// 	});

	// 	builder.addCase(getGames.rejected, (state, action: PayloadAction<any>) => {
	// 		state.status = 'error';
	// 	});
	// },

	extraReducers: (builder) => {
		builder.addCase(getGames.fulfilled, (state: IGamesState, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
			state.status = 'ok';
		});

		builder.addCase(getGames.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(getGames.rejected, (state, action) => {
			state.status = 'error';
		});
	},
});

export const { sortByName, sortByPrice, sortByScore } = gamesSlice.actions;

export const selectGames = (state: RootState) => state;

export default gamesSlice.reducer;
