import styled, { keyframes } from 'styled-components';

const trashShake = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(10deg);
	}
`;

export const WrapperCardCheckout = styled.article<{
	positionLeft: number;
	positionRight: number;
	isOver: boolean;
}>`
	display: grid;
	grid-template-columns: 10% 30% 15% 15% 20% 10%;
	grid-template-rows: 1fr;
	grid-template-areas: 'image title price quantity total button';
	place-items: center center;
	position: relative;
	filter: saturate(${({ isOver }) => (isOver ? '0.1' : '1')});
	opacity: ${({ isOver }) => (isOver ? '0.7' : '1')};
	transition: all 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

	&:nth-child(odd) {
		transform: translateX(${({ positionLeft }) => positionLeft}rem);
	}

	&:nth-child(even) {
		transform: translateX(${({ positionRight }) => positionRight}rem);
	}

	padding: 0 2rem;
	max-width: 80vw;
	height: 10rem;
	border-radius: 0.6rem;
	margin-top: 1rem;
	background: linear-gradient(
		270deg,
		rgba(250, 250, 250, 0.92) 1.02%,
		rgba(245, 245, 245, 0.78) 97.89%
	);
	box-shadow: var(--shadow);

	&:hover {
		transform: scale(1.02);
	}

	img {
		grid-area: image;
		justify-self: start;
		width: 8rem;
		height: 8rem;
		border-radius: 50rem;
		border: solid 0.2rem var(--orange);
	}

	h1 {
		grid-area: title;
		color: var(--dark);
		font-size: 1.8rem;
		font-weight: 400;
		justify-self: start;
	}

	h3 {
		grid-area: price;
		font-size: 1.5rem;
		color: #555;
	}

	h2 {
		grid-area: total;
		color: #f35c24;
		font-size: 2rem;
	}

	input {
		grid-area: quantity;
		color: var(--blue);
		height: 4rem;
		width: 4rem;
		border-radius: 50rem;
		text-align: center;
		font-size: 1.7rem;
		font-weight: bold;
		transition: var(--boomerang);

		&:hover {
			box-shadow: inset var(--shadow);
		}
	}

	button {
		grid-area: button;
		cursor: pointer;
		justify-self: end;

		width: 3.5rem;
		height: 3.5rem;
		border-radius: 100%;
		transition: var(--boomerang);

		&:hover {
			background-color: rgba(255, 255, 255, 1);
			animation: ${trashShake} 0.1s alternate infinite;
		}
		& > svg {
			fill: #444;
		}
	}

	@media (max-width: 768px) {
		grid-template-columns: 22% 24% 14% 30% 10%;
		grid-template-areas: 'image price quantity total button';
		padding: 0 0.8rem;
		max-width: 100vw;

		img {
			height: 7rem;
			width: 7rem;
		}

		h1 {
			display: none;
		}

		h2 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 1.2rem;
		}

		input {
			transform: scale(0.8);
		}

		button {
			transform: scale(0.8);
		}
	}
`;

export const InfoBarWrapper = styled.div`
	display: grid;
	grid-template-columns: 10% 30% 15% 15% 20% 10%;
	grid-template-rows: 1fr;
	grid-template-areas: 'product product price quantity total button';
	place-items: center center;

	margin-top: 1rem;
	padding: 1rem 2rem;
	border-radius: 0.4rem;
	max-width: 80vw;

	background-color: rgba(34, 34, 34, 0.8);

	small {
		font-size: 1.3rem;
		color: var(--white);
	}

	& > small:first-child {
		justify-self: start;
		grid-area: product;
	}

	& > small:nth-child(2) {
		grid-area: price;
	}

	& > small:nth-child(3) {
		grid-area: quantity;
	}

	& > small:nth-child(4) {
		grid-area: total;
	}

	& > :last-child {
		grid-area: button;
		justify-self: end;
	}

	@media (max-width: 768px) {
		grid-template-columns: 20% 21% 30% 19% 10%;
		grid-template-areas: 'product price quantity total button';
		max-width: 100vw;
	}
`;
