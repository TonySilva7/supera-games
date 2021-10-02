import { ReactComponent as Avatar } from '../../assets/img/avatar.svg';
import { WrapperAside } from './styles';

export default function Aside() {
	return (
		<WrapperAside>
			<header>
				<Avatar />
				<button>Login</button>
			</header>
			<footer>
				<h1>Ordenar</h1>
				<ul>
					<li>
						<input type='checkbox' /> Menor preço
					</li>
					<li>
						<input type='checkbox' /> Mais populares
					</li>
					<li>
						<input type='checkbox' /> A-Z
					</li>
				</ul>
			</footer>
		</WrapperAside>
	);
}
