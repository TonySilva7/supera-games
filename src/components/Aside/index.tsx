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
						<span>
							<input type='checkbox' />
						</span>
						Menor preço
					</li>
					<li>
						<span>
							<input type='checkbox' />
						</span>
						Mais populares
					</li>
					<li>
						<span>
							<input type='checkbox' />
						</span>
						A-Z
					</li>
				</ul>
			</footer>
		</WrapperAside>
	);
}
