import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../app/hooks';
import { removeFromCart } from '../../features/games/gamesSlice';
import { baseUrlImage } from '../../services/api';
import { IItem } from '../../types';
import { InfoBarWrapper, WrapperCardCheckout } from './styles';

export default function CardCheckout({ item }: { item: IItem }) {
	const [quantity, setQuantity] = useState(item.quantity);

	const dispatch = useAppDispatch();
	return (
		<WrapperCardCheckout>
			<img src={`${baseUrlImage}/${item.product.image}`} alt='' />
			<h1>{item.product.name}</h1>

			<h3>R$ {item.product.price}</h3>

			<input type='text' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
			<h2>R$ {item.total}</h2>

			<button onClick={() => dispatch(removeFromCart(item.id))}>
				<FaTrashAlt size={20} />
			</button>
		</WrapperCardCheckout>
	);
}

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
