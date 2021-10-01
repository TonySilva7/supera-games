import { FaOpencart } from 'react-icons/fa';
// import { ReactComponent as CartIcon } from '../../assets/img/cart-icon.svg';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { WrapperHeader } from './styles';

export default function Header() {
	return (
		<WrapperHeader>
			<Logo />
			{/* <CartIcon /> */}
			<div>
				<FaOpencart color={'var(--white)'} size={50} />
				<h1>2</h1>
			</div>
		</WrapperHeader>
	);
}
