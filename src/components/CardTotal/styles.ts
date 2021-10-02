import styled from 'styled-components';

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
			'ship shipvalue'
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
			border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		}

		h1 {
			display: flex;
			align-items: center;
			justify-content: flex-start;

			font-size: 2rem;
			width: 100%;
			height: 100%;
			border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		}

		& > h2:nth-of-type(1) {
			grid-area: ship;
		}
		& > h1:nth-of-type(1) {
			grid-area: shipvalue;
		}

		& > h2:nth-of-type(2) {
			grid-area: subtotal;
		}
		& > h1:nth-of-type(2) {
			grid-area: subvalue;
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

	& > button {
		display: flex;
		align-items: center;
		justify-content: center;

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
	}
`;
