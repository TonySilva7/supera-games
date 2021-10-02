import Aside from '../../components/Aside';
import CardContainer from '../../components/CardContainer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { WrapperMain } from './styles';

export default function Main() {
	return (
		<WrapperMain>
			<Header />
			<div>
				<Aside />
				<CardContainer />
			</div>
			<Footer />
		</WrapperMain>
	);
}
