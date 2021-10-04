import { BaseSyntheticEvent, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeQuantity, removeFromCart, selectCart } from '../../features/games/gamesSlice';
import { baseUrlImage } from '../../services/api';
import { IItem } from '../../types';
import { InfoBarWrapper, WrapperCardCheckout } from './styles';

export default function CardCheckout({ item }: { item: IItem }) {
	const dispatch = useAppDispatch();
	const [quantity, setQuantity] = useState(item.quantity);
	const history = useHistory();
	const cart = useAppSelector(selectCart);

	function handleChangeQuantity(event: BaseSyntheticEvent, id: number) {
		const qnt = Number(event.target.value);

		setQuantity(qnt);
		dispatch(changeQuantity({ id, qnt }));
	}

	function handleRemove(id: number) {
		dispatch(removeFromCart(id));

		if (cart.items.length === 1) {
			history.push('/');
		}
	}

	return (
		<WrapperCardCheckout>
			<img src={`${baseUrlImage}/${item.product.image}`} alt='' />
			<h1>{item.product.name}</h1>

			<h3>R$ {item.product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h3>

			<input type='text' value={quantity} onChange={(e) => handleChangeQuantity(e, item.id)} />
			<h2>R$ {item.total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h2>

			<button onClick={() => handleRemove(item.id)}>
				<FaTrashAlt size={20} />
			</button>
		</WrapperCardCheckout>
	);
}

// Retorna a barra de informações do carrinho
export const InfoBar = (): JSX.Element => {
	return (
		<InfoBarWrapper>
			<small>Produto</small>
			<small>Preço</small>
			<small>Quantidade</small>
			<small>Total</small>
			<small>#</small>
		</InfoBarWrapper>
	);
};
