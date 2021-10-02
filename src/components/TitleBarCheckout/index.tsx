import { FaCartPlus } from 'react-icons/fa';
import { TitleBarWrapper } from '.';

export const TitleBar = (): JSX.Element => {
	return (
		<TitleBarWrapper>
			<span>
				<h1>Meu Carrinho</h1>
				<FaCartPlus />
			</span>
		</TitleBarWrapper>
	);
};
