import CardCheckout, { InfoBar } from '../../components/CardCheckout';
import CardContainer from '../../components/CardContainer';
import CardTotal from '../../components/CardTotal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { WrapperCheckout } from './styles';

export default function Checkout() {
	return (
		<WrapperCheckout>
			<Header />
			<CardContainer>
				<div>
					<InfoBar />
					<CardCheckout />
					<CardCheckout />
					<CardCheckout />
					<CardTotal />
				</div>
			</CardContainer>
			<Footer />
		</WrapperCheckout>
	);
}
