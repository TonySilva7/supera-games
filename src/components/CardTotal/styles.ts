import styled, { keyframes } from 'styled-components';

const cartAnimation = keyframes`
	0 {
		transform: scale(1);
		z-index: 1;
	}
	50% {
		transform: scale(1.2);
		box-shadow: var(--shadow);
		z-index: 2;
	}
	100% {
		transform: scale(1);
		z-index: 2;
		margin-right: 4rem;
	}
`;

export const CardTotalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;

	margin-top: 2rem;

	div {
		display: grid;
		grid-template-rows: repeat(3, 33.33%);
		grid-template-columns: repeat(2, 50%);
		grid-template-areas:
			'shipping shipvalue'
			'subtotal subvalue'
			'total totalvalue';

		place-items: center start;

		box-shadow: var(--shadow);
		padding: 1rem 2rem;
		width: 30rem;
		height: 20rem;
		border-radius: 1.2rem;
		border: solid 1px rgba(255, 255, 255, 0.8);
		background-color: rgba(34, 34, 34, 0.85);
		color: var(--white-gray);

		h2 {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			height: 100%;
			font-weight: normal;
		}

		h1 {
			display: flex;
			align-items: center;
			justify-content: flex-start;

			font-size: 2rem;
			width: 100%;
			height: 100%;
		}

		& > h2:nth-of-type(1) {
			grid-area: shipping;
			border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		}
		& > h1:nth-of-type(1) {
			grid-area: shipvalue;
			border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		}

		& > h2:nth-of-type(2) {
			grid-area: subtotal;
			border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		}
		& > h1:nth-of-type(2) {
			grid-area: subvalue;
			border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		}

		& > h2:nth-of-type(3) {
			grid-area: total;
		}
		& > h1:nth-of-type(3) {
			grid-area: totalvalue;
			font-size: 2.5rem;
			color: var(--green);
		}
	}

	@media (max-width: 768px) {
		align-self: center;

		div {
			grid-template-columns: repeat(30%, 70%);
			h2 {
				font-size: 1.5rem;
			}
			h1 {
				font-size: 1.9rem;
			}

			& > h1:nth-of-type(3) {
				font-size: 2.2rem;
			}
		}
	}
`;

export const MyButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	width: 30rem;
	height: 5rem;
	margin-top: 1rem;
	font-size: 2rem;
	font-weight: bold;
	box-shadow: var(--shadow);
	border-radius: 50rem;
	color: #7ba941;
	background-color: var(--green-light);

	transition: all 700ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

	&:before {
		display: flex;
		align-items: center;
		justify-content: center;
		content: 'Confirmar';
		position: absolute;

		width: 25rem;
		height: 5rem;
		top: 0;
		bottom: 0;
		left: -22rem;
		border-radius: 50rem;
		border: solid 2px var(--green-light);
		box-sizing: border-box;
		box-shadow: inset 0px 0px 11px 3px #0000002e;
		color: #7cab3f;
		background: linear-gradient(45deg, #c4f684, #edffd6);

		transition: var(--boomerang);
	}

	&:hover:before {
		left: 2rem;
	}

	p {
		margin-left: 4rem;
	}

	&:hover {
		span {
			animation: ${cartAnimation} 700ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
		}
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: var(--boomerang);

		padding: 0.5rem;
		border-radius: 50%;
		background: #fff;
		width: 4rem;
		height: 4rem;
		margin-right: 1rem;

		svg {
			fill: var(--orange);
			padding: 0;
		}
	}
`;
