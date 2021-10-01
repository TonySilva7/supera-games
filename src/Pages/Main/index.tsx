import ContainerProduct from '../../components/ContainerProduct';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { WrapperMain } from './styles';

export default function Main() {
	return (
		<WrapperMain>
			<Header />
			<ContainerProduct />
			<Footer />
		</WrapperMain>
	);
}
