import { FaTrashAlt } from 'react-icons/fa';
import img from '../../assets/img/call-of-duty-wwii.png';
import { InfoBarWrapper, WrapperCardCheckout } from './styles';

export default function CardCheckout() {
	return (
		<WrapperCardCheckout>
			<img src={img} alt='' />
			<h1>Call Of Duty WWII</h1>

			<h3>R$ 249,90</h3>

			<input type='text' placeholder='1' />
			<h2>R$ 249,90</h2>

			<button>
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
