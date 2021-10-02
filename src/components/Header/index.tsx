import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { WrapperHeader } from './styles';

export default function Header() {
	return (
		<WrapperHeader>
			<Link to='/'>
				<Logo />
			</Link>

			<Link to='/checkout'>
				<GiShoppingCart color={'var(--white)'} size={45} />
				<h1>2</h1>
			</Link>
		</WrapperHeader>
	);
}
