import { GiShoppingCart } from 'react-icons/gi';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { WrapperHeader } from './styles';

export default function Header() {
	return (
		<WrapperHeader>
			<Logo />

			<div>
				<GiShoppingCart color={'var(--white)'} size={45} />
				<h1>2</h1>
			</div>
		</WrapperHeader>
	);
}
