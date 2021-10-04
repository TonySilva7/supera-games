import { useAppSelector } from '../../app/hooks';
import CardCheckout, { InfoBar } from '../../components/CardCheckout';
import CardContainer from '../../components/CardContainer';
import CardTotal from '../../components/CardTotal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { selectCart } from '../../features/games/gamesSlice';
import { WrapperCheckout } from './styles';

export default function Checkout() {
	const cart = useAppSelector(selectCart);

	return (
		<WrapperCheckout>
			<Header />
			<CardContainer>
				<div>
					<InfoBar />

					{cart.items.map((item) => (
						<CardCheckout key={item.id} item={item} />
					))}
					{/* <CardCheckout /> */}
					<CardTotal />
				</div>
			</CardContainer>
			<Footer />
		</WrapperCheckout>
	);
}
