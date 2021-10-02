import styled from 'styled-components';
import img from '../../assets/img/bg-checkout.jpg';

export const WrapperCheckout = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	position: relative;
	background: rgba(255, 255, 255, 0.5);

	&::after {
		position: absolute;
		content: '';
		/* opacity: 0.5; */
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: url(${img}) no-repeat 100% 20% fixed;
		background-size: cover;
		z-index: -1;
	}

	& > div {
		display: inherit;
		flex-direction: row;

		padding: 0 1rem;
		width: 100vw;
		align-items: space-between;
		justify-content: space-between;
	}
`;
