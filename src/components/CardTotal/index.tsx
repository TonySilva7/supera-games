import { MdAddShoppingCart } from 'react-icons/md';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkout, selectCart, selectItens } from '../../features/games/gamesSlice';
import { ICart, IItem } from '../../types';
import { CardTotalWrapper, MyButton } from './styles';

export default function CardTotal({ cart }: { cart: ICart }) {
	const shippingList: IItem[] = useAppSelector(selectItens);
	const myCart: ICart = useAppSelector(selectCart);
	const dispatch = useAppDispatch();
	const history = useHistory();

	let totalShipment = shippingList.reduce((acc, item) => acc + item.shipping, 0);
	const temp = totalShipment;

	totalShipment = myCart.total > 250 ? 0 : totalShipment;

	function handleCheckout() {
		dispatch(checkout());
		toast.success('Compra realizada com sucesso!', {
			position: toast.POSITION.TOP_CENTER,
		});

		setTimeout(() => {
			history.push('/');
		}, 3000);
	}

	return (
		<CardTotalWrapper>
			<div>
				<h2>Frete</h2>

				{myCart.total > 250 ? (
					<h1>
						<s>R$ {temp.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</s>
					</h1>
				) : (
					<h1>R$ {totalShipment.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h1>
				)}

				<h2>Subtotal</h2>
				<h1>R$ {myCart.total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h1>

				<h2>Total</h2>
				<h1>
					R$ {(myCart.total + totalShipment).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
				</h1>
			</div>

			<MyButton onClick={() => handleCheckout()}>
				<p>Finalizar Compra</p>
				<span>
					<MdAddShoppingCart size={25} />
				</span>
			</MyButton>
		</CardTotalWrapper>
	);
}
