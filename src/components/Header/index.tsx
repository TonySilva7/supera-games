import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { selectQntItens } from '../../features/games/gamesSlice';
import { WrapperHeader } from './styles';

export default function Header() {
	const qntItens = useAppSelector(selectQntItens);
	return (
		<WrapperHeader hasItem={qntItens > 0}>
			<Link to='/'>
				<Logo />
			</Link>

			<Link to='/checkout'>
				<GiShoppingCart size={45} />

				<h1>{qntItens}</h1>
			</Link>
		</WrapperHeader>
	);
}
