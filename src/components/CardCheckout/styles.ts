import styled from 'styled-components';

export const WrapperCardCheckout = styled.article`
	/* display: flex;
	align-items: center;
	justify-content: flex-start; */
	display: grid;
	grid-template-columns: 9rem 34rem 14rem 23rem 17rem 1fr;
	grid-template-rows: 1fr;
	column-gap: 0.5rem;
	grid-template-areas: 'image title price quantity total button';
	place-items: center center;
	position: relative;

	padding: 0 2rem;
	min-width: 80vw;
	height: 10rem;
	border-radius: 0.6rem;
	margin-top: 1rem;
	background: linear-gradient(
		270deg,
		rgba(250, 250, 250, 0.92) 1.02%,
		rgba(245, 245, 245, 0.78) 97.89%
	);

	img {
		grid-area: image;
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
		justify-self: flex-start;
		/* margin-left: 1rem; */
	}

	h3 {
		grid-area: price;
		font-size: 1.5rem;
		/* margin-left: 20rem; */
		color: #555;
	}

	h2 {
		grid-area: total;
		color: #f35c24;
		font-size: 2rem;
		/* margin-left: 20rem; */
	}

	input {
		grid-area: quantity;
		color: var(--blue);
		height: 4rem;
		width: 4rem;
		border-radius: 50rem;
		text-align: center;
		box-shadow: inset var(--shadow);
		font-size: 1.7rem;
		font-weight: bold;
		/* margin-left: 6rem; */
	}

	button {
		grid-area: button;
		display: flex;
		align-self: center;
		justify-self: flex-end;
		/* margin-left: 6rem; */
		cursor: pointer;

		& > svg {
			fill: #444;
		}
	}
`;

export const InfoBarWrapper = styled.div`
	/* display: flex; */
	display: grid;
	grid-template-columns: 9rem 35rem 14rem 23rem 17rem 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'product product price quantity total button';
	place-items: center center;

	margin-top: 1rem;
	padding: 1rem;
	border-radius: 0.4rem;
	min-width: 80vw;

	background-color: rgba(34, 34, 34, 0.8);

	small {
		font-size: 1.3rem;
		color: var(--white);
	}

	& > small:first-child {
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
	}
`;
