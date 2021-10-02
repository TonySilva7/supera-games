// import CardProduct from '../CardProduct';
import { Wrapper } from './styles';

interface PropsChildren {
	children: React.ReactNode;
}

export default function CardContainer({ children }: PropsChildren) {
	return <Wrapper>{children}</Wrapper>;
}
