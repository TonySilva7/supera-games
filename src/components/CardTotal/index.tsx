import { CardTotalWrapper } from './styles';
export default function CardTotal() {
	return (
		<CardTotalWrapper>
			<div>
				<h2>Frete</h2>
				<h1>R$ 20,00</h1>

				<h2>Subtotal</h2>
				<h1>R$ 369,90</h1>

				<h2>Total</h2>
				<h1>R$ 379,90</h1>
			</div>
			<button>Finalizar Compra</button>
		</CardTotalWrapper>
	);
}
