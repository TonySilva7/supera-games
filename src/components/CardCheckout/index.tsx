import { BaseSyntheticEvent, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	changeQuantity,
	removeFromCart,
	selectCart,
} from '../../features/games/gamesSlice';
import { baseUrlImage } from '../../services/api';
import { IItem } from '../../types';
import { InfoBarWrapper, WrapperCardCheckout } from './styles';

export default function CardCheckout({ item }: { item: IItem }) {
	const dispatch = useAppDispatch();
	const [quantity, setQuantity] = useState(item.quantity);
	const history = useHistory();
	const cart = useAppSelector(selectCart);

	function validValue(event: BaseSyntheticEvent, id: number) {
		const elem = event.target as HTMLInputElement;

		if (quantity <= 0) {
			setQuantity(1);
			dispatch(changeQuantity({ id, qnt: 1 }));
		}

		elem.blur();
	}

	function handleChangeQuantity(event: BaseSyntheticEvent, id: number) {
		const qnt = Number(event.target.value);
		//valida o atributo qnt
		if (Number.isNaN(qnt)) {
			setQuantity(1);
			return;
		}
		if (qnt === 0) {
			setQuantity(1);
		}

		setQuantity(qnt);
		dispatch(changeQuantity({ id, qnt }));
	}

	function handleRemove(id: number) {
		dispatch(removeFromCart(id));

		if (cart.items.length === 1) {
			toast.warning('Seu carrinho está vazio', {
				position: toast.POSITION.TOP_CENTER,
			});
			setTimeout(() => {
				history.push('/');
			}, 3000);
		}
	}

	return (
		<WrapperCardCheckout>
			<img src={`${baseUrlImage}/${item.product.image}`} alt='' />
			<h1>{item.product.name}</h1>

			<h3>
				R$ {item.product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
			</h3>

			<input
				type='text'
				value={quantity}
				onChange={(e) => handleChangeQuantity(e, item.id)}
				onMouseLeave={(e) => validValue(e, item.id)}
			/>
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
