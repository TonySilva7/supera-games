import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, removeFromCart, selectIsSelectedItem } from '../../features/games/gamesSlice';
import { IItem, IProduct } from '../../types';
import { MyButton, Wrapper } from './styles';

export default function CardProduct({ product }: { product: IProduct }) {
	const [quantity, setQuantity] = useState<number>(1);
	const [isSelectedItem, setIsSelectedItem] = useState<boolean>(false);
	const baseUrlImage = '/assets/img';
	const dispatch = useAppDispatch();

	const listItensSelected: IItem[] = useAppSelector(selectIsSelectedItem);
	// Testa se o item já está selecionado
	const isSelected = listItensSelected.some((it) => it.product.id === product.id);

	function handleAddToCart() {
		if (isSelected) {
			dispatch(removeFromCart(product.id));
			setIsSelectedItem(false);
		} else {
			const isSelected = !isSelectedItem;
			setIsSelectedItem(isSelected);
			dispatch(addToCart({ product, quantity, isSelected }));
		}
	}

	function handleChangeQuantity(value: number) {
		//valida o atributo value
		if (Number.isNaN(value)) {
			setQuantity(1);
			return;
		}

		if (value === 0) {
			setQuantity(1);
		}
		setQuantity(value);
	}

	return (
		<Wrapper isSelected={isSelected}>
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
					<input
						type='text'
						name='card-product'
						value={quantity}
						onChange={(e) => handleChangeQuantity(Number(e.target.value))}
					/>
					<MyButton onClick={() => handleAddToCart()}>Adicionar</MyButton>
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
