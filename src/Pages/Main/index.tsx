import Aside from '../../components/Aside';
import ContainerProduct from '../../components/ContainerProduct';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { WrapperMain } from './styles';

export default function Main() {
	return (
		<WrapperMain>
			<Header />
			<div>
				<Aside />
				<ContainerProduct />
			</div>
			<Footer />
		</WrapperMain>
	);
}
