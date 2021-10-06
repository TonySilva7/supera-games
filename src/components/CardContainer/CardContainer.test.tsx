import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardContainer from '.';
import { store } from '../../app/store';
import { IGamesState } from '../../types';
import { prevState } from '../../utils/mock/mockGames';
import CardProduct from '../CardProduct';

const mockPropsGames: IGamesState = prevState;

describe('CardContainer', () => {
	it('should render correctly', () => {
		render(
			<Provider store={store}>
				<CardContainer>
					{mockPropsGames.products.map((game) => (
						<CardProduct key={game.id} product={game} />
					))}
				</CardContainer>
			</Provider>
		);

		expect(screen.getByRole('heading', { name: 'Battle Field' })).toBeInTheDocument();
		expect(screen.getAllByRole('heading', { name: /R\$/i })).toHaveLength(3);
	});
});
