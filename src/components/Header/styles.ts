import styled from 'styled-components';

export const WrapperHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100vw;
	height: 8rem;
	padding: 0 2rem;

	border-bottom: solid 1px var(--orange);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	background: linear-gradient(89.47deg, rgba(102, 115, 126, 0.49) 0%, rgba(52, 52, 52, 0.82) 100%);

	& > svg:nth-child(1) {
		width: 18rem;
	}

	div {
		display: flex;
		position: relative;
		width: 7rem;

		h1 {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			right: 0;

			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			background-color: var(--orange);
			color: var(--white);
		}
	}
`;
