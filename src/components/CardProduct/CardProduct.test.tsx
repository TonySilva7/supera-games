import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardProduct from '.';
import { store } from '../../app/store';
import { IProduct } from '../../types';
import { MyButton } from '../CardTotal/styles';

const productPropsMock: IProduct = {
	id: 1,
	name: 'Mario Bros',
	price: 100,
	score: 5,
	image: 'mario-bros.png',
};

describe('CardProduct', () => {
	it('should be defined', () => {
		expect(CardProduct).toBeDefined();
	});

	it('should render correctly', () => {
		render(
			<Provider store={store}>
				<CardProduct product={productPropsMock} />
			</Provider>
		);

		expect(screen.getByRole('img', { name: productPropsMock.name })).toHaveAttribute(
			'src',
			'/assets/img/mario-bros.png'
		);

		expect(screen.getByRole('heading', { name: 'Mario Bros' })).toBeInTheDocument();

		expect(screen.getByRole('heading', { name: 'R$ 100,00' })).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();

		expect(screen.getByRole('textbox')).toHaveValue('1');
	});

	it('should call on <MyButton /> click', () => {
		const fnOnClick = jest.fn();
		render(
			<Provider store={store}>
				<MyButton onClick={fnOnClick} />
			</Provider>
		);

		const button = screen.getByRole('button', { name: '' });
		fireEvent.click(button);

		expect(fnOnClick).toHaveBeenCalled();

		expect(fnOnClick).toHaveBeenCalledTimes(1);

		fireEvent.click(button);
		expect(fnOnClick).toHaveBeenCalledTimes(2);
	});
});
