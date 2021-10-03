import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Aside from '../../components/Aside';
import CardContainer from '../../components/CardContainer';
import CardProduct from '../../components/CardProduct';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getGames } from '../../features/games/gamesSlice';
import { baseURL } from '../../services/api';
import { WrapperMain } from './styles';

export default function Home() {
	const dispatch = useAppDispatch();
	const games = useAppSelector((state) => state.games.products);

	useEffect(() => {
		dispatch(getGames(baseURL));
	}, [dispatch]);

	return (
		<WrapperMain>
			<Header />
			<div>
				<Aside />
				<CardContainer>
					{games.map((game) => (
						<CardProduct key={game.id} product={game} />
					))}
				</CardContainer>
			</div>
			<Footer />
		</WrapperMain>
	);
}
