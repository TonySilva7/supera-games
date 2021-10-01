import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import fetchGames from '../../services/api';
import { IProduct } from '../../types';

const initialState: Array<IProduct> = [
	{
		id: 0,
		name: '',
		price: 0.0,
		score: 0,
		image: '',
	},
];

// Faz requisição para API
export const getGames = createAsyncThunk('games', async (url: string) => {
	const response = await fetchGames(url);
	return response;
});

export const gamesSlice = createSlice({
	name: 'games',
	initialState,

	reducers: {},

	extraReducers: (builder) => {},
});

export const {} = gamesSlice.actions;

export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
