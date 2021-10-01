import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import gamesReducer from '../features/games/gamesSlice';

export const createStore = () =>
	configureStore({
		reducer: {
			games: gamesReducer,
		},
	});

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
