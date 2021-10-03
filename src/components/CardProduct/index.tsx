import { FaStar } from 'react-icons/fa';
import { IProduct } from '../../types';
import { MyButton, Wrapper } from './styles';
export default function CardProduct({ product }: { product: IProduct }) {
	const baseUrlImage = '/assets/img';

	return (
		<Wrapper>
			<header>
				<div>
					<img src={`${baseUrlImage}/${product.image}`} alt={product.name} />
				</div>
			</header>

			<footer>
				<h1>{product.name}</h1>

				<span>{factoryStars(product.score, product.id)}</span>

				<h2>R$ {product.price}</h2>
				<div>
					<input type='text' placeholder='1' />
					<MyButton>Adicionar</MyButton>
				</div>
			</footer>
		</Wrapper>
	);
}

const factoryStars = (score: number, id: number): JSX.Element[] => {
	// receives a number and returns a array of stars
	const stars: JSX.Element[] = [];
	const color = '#f6f1c5';
	const size = 13;

	score > 0 && score <= 80 && stars.push(<FaStar key={'000'} size={size} fill={color} />);
	score > 80 && score <= 160 && stars.push(...makeStarsCollection(2, id));
	score > 160 && score <= 240 && stars.push(...makeStarsCollection(3, id));
	score > 240 && score <= 320 && stars.push(...makeStarsCollection(4, id));
	score > 320 && stars.push(...makeStarsCollection(5, id));

	return stars;
};

// make function to return a array of stars
const makeStarsCollection = (numStar: number, id: number): JSX.Element[] => {
	const stars: JSX.Element[] = [];
	for (let i = 0; i < numStar; i++) {
		stars.push(<FaStar key={id * i} size={13} fill={'#f6f1c5'} />);
	}

	return stars;
};
