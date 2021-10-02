import Aside from '../../components/Aside';
import CardContainer from '../../components/CardContainer';
import CardProduct from '../../components/CardProduct';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { WrapperMain } from './styles';

export default function Home() {
	return (
		<WrapperMain>
			<Header />
			<div>
				<Aside />
				<CardContainer>
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
					<CardProduct />
				</CardContainer>
			</div>
			<Footer />
		</WrapperMain>
	);
}
