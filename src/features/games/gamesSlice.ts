import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import fetchGames from '../../services/api';
import { IProduct } from '../../types';

// const initialState: Array<IProduct> = [
// 	{
// 		id: 0,
// 		name: '...',
// 		price: 0.0,
// 		score: 0,
// 		image: '',
// 	},
// ];

interface IGamesState {
	info: string;
	products: Array<IProduct>;
}

const product: IProduct = {
	id: 0,
	name: '...',
	price: 0.0,
	score: 0,
	image: '',
};

const initialState: IGamesState = {
	info: '',
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

	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(getGames.fulfilled, (state: IGamesState, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
		});

		builder.addCase(getGames.rejected, (state, action) => {
			// console.log(action.error);
		});

		builder.addCase(getGames.pending, (state, action) => {
			// console.log(action.meta.arg);
		});
	},
});

// export const {} = gamesSlice.actions;

export const selectGames = (state: RootState) => state;

export default gamesSlice.reducer;
