import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { ReactComponent as Avatar } from '../../assets/img/avatar.svg';
import { sortByName, sortByPrice, sortByScore } from '../../features/games/gamesSlice';
import { WrapperAside } from './styles';

export default function Aside() {
	const [isCheckedName, setIsCheckedName] = useState(false);
	const [isCheckedPrice, setIsCheckedPrice] = useState(false);
	const [isCheckedScore, setIsCheckedScore] = useState(false);
	const dispatch = useAppDispatch();

	function handleSortName() {
		setIsCheckedName(!isCheckedName);
		dispatch(sortByName(!isCheckedName));
	}

	function handleSortPrice() {
		setIsCheckedPrice(!isCheckedPrice);
		dispatch(sortByPrice(!isCheckedPrice));
	}

	function handleSortScore() {
		setIsCheckedScore(!isCheckedScore);
		dispatch(sortByScore(!isCheckedScore));
	}

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
							<input type='checkbox' checked={isCheckedPrice} onChange={() => handleSortPrice()} />
						</span>
						Por preço
					</li>
					<li>
						<span>
							<input type='checkbox' checked={isCheckedScore} onChange={() => handleSortScore()} />
						</span>
						Mais populares
					</li>
					<li>
						<span>
							<input type='checkbox' checked={isCheckedName} onChange={() => handleSortName()} />
						</span>
						A-Z
					</li>
				</ul>
			</footer>
		</WrapperAside>
	);
}
