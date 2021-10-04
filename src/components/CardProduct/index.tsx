import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	addToCart,
	changeQuantity,
	removeFromCart,
	selectCart,
	selectIsSelectedItem,
} from '../../features/games/gamesSlice';
import { baseUrlImage } from '../../services/api';
import { IItem, IProduct } from '../../types';
import { MyButton, Wrapper } from './styles';

export default function CardProduct({ product }: { product: IProduct }) {
	// find item from product id
	const cart = useAppSelector(selectCart);
	const item = cart.items.find((item) => item.id === product.id);

	const [quantity, setQuantity] = useState<number>(item?.quantity || 1);
	const [isSelectedItem, setIsSelectedItem] = useState<boolean>(false);
	// const baseUrlImage = '/assets/img';
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

	function handleChangeQuantity(qnt: number, id: number) {
		//valida o atributo qnt
		if (Number.isNaN(qnt)) {
			setQuantity(1);
			return;
		}
		if (qnt === 0) {
			setQuantity(1);
		}
		setQuantity(qnt);
		dispatch(changeQuantity({ id, qnt }));
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

				<h2>R$ {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h2>
				<div>
					<input
						type='text'
						name='card-product'
						value={quantity}
						onChange={(e) => handleChangeQuantity(Number(e.target.value), product.id)}
					/>
					<MyButton isSelected={isSelected} onClick={() => handleAddToCart()}>
						{isSelected ? 'Remover' : 'Adicionar'}
					</MyButton>
				</div>
			</footer>
		</Wrapper>
	);
}

const factoryStars = (score: number, id: number): JSX.Element[] => {
	// Recebe um valor e retorna um array de estrelas
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

//  Cria coleção de estrelas
const makeStarsCollection = (numStar: number, id: number): JSX.Element[] => {
	const stars: JSX.Element[] = [];
	for (let i = 0; i < numStar; i++) {
		stars.push(<FaStar key={id * i} size={13} fill={'#f6f1c5'} />);
	}

	return stars;
};
