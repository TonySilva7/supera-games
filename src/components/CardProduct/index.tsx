import img from '../../assets/img/mortal-kombat-xl.png';
import { Wrapper } from './styles';

export default function CardProduct() {
	return (
		<Wrapper>
			<header>
				<div>
					<img src={img} alt='Mortal Kombat X' />
				</div>
			</header>
			<footer>
				<h1>Mortal Kombat</h1>
				<h2>R$ 249,90</h2>
				<div>
					<input type='text' placeholder='1' />
					<button>Adicionar</button>
				</div>
			</footer>
		</Wrapper>
	);
}
