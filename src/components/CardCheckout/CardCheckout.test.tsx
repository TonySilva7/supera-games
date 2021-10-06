import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardCheckout from '.';
import { store } from '../../app/store';
import { item1, product1 } from '../../utils/mock/mockGames';

const itemPropsMock = {
	...item1,
	product: {
		...product1,
		name: 'Super Mario Odyssey',
		image: 'mario.png',
	},
};

describe('CardCheckout', () => {
	it('renders correctly', () => {
		render(
			<Provider store={store}>
				<CardCheckout item={itemPropsMock} />
			</Provider>
		);

		expect(
			screen.getByRole('heading', { name: 'Super Mario Odyssey' })
		).toBeInTheDocument();

		expect(screen.getByRole('heading', { name: 'R$ 50,00' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'R$ 100,00' })).toBeInTheDocument();
	});

	// input quantity should have a value of 1
	it('should have a value of 1', () => {
		render(
			<Provider store={store}>
				<CardCheckout item={itemPropsMock} />
			</Provider>
		);

		expect(screen.getByRole('textbox', { name: '' })).toHaveValue('2');

		expect(screen.getByRole('img', { name: '' })).toBeInTheDocument();
		expect(screen.getByRole('img', { name: '' })).toHaveAttribute(
			'src',
			`/assets/img/${itemPropsMock.product.image}`
		);
	});
});
