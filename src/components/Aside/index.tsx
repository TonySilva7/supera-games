import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { ReactComponent as Avatar } from '../../assets/img/avatar.svg';
import { getGames, sortByName, sortByPrice, sortByScore } from '../../features/games/gamesSlice';
import { baseURL } from '../../services/api';
import { WrapperAside } from './styles';

export default function Aside() {
	const [isCheckedName, setIsCheckedName] = useState(false);
	const [isCheckedPrice, setIsCheckedPrice] = useState(false);
	const [isCheckedScore, setIsCheckedScore] = useState(false);
	const dispatch = useAppDispatch();

	function handleSortName() {
		setIsCheckedName(!isCheckedName);
		if (!isCheckedName) {
			dispatch(sortByName(!isCheckedName));
		} else {
			dispatch(getGames(baseURL));
		}
	}

	function handleSortPrice() {
		setIsCheckedPrice(!isCheckedPrice);
		if (!isCheckedPrice) {
			dispatch(sortByPrice(!isCheckedPrice));
		} else {
			dispatch(getGames(baseURL));
		}
	}

	function handleSortScore() {
		setIsCheckedScore(!isCheckedScore);
		if (!isCheckedScore) {
			dispatch(sortByScore(!isCheckedScore));
		} else {
			dispatch(getGames(baseURL));
		}
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
							<input
								type='checkbox'
								checked={isCheckedPrice}
								disabled={isCheckedScore || isCheckedName}
								style={{ cursor: `${isCheckedScore || isCheckedName ? 'not-allowed' : 'pointer'}` }}
								onChange={() => handleSortPrice()}
							/>
						</span>
						Por preço
					</li>
					<li>
						<span>
							<input
								type='checkbox'
								checked={isCheckedScore}
								disabled={isCheckedName || isCheckedPrice}
								style={{ cursor: `${isCheckedName || isCheckedPrice ? 'not-allowed' : 'pointer'}` }}
								onChange={() => handleSortScore()}
							/>
						</span>
						Mais populares
					</li>
					<li>
						<span>
							<input
								type='checkbox'
								checked={isCheckedName}
								disabled={isCheckedPrice || isCheckedScore}
								style={{
									cursor: `${isCheckedPrice || isCheckedScore ? 'not-allowed' : 'pointer'}`,
								}}
								onChange={() => handleSortName()}
							/>
						</span>
						A-Z
					</li>
				</ul>
			</footer>
		</WrapperAside>
	);
}
