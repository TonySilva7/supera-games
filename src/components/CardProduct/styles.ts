import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	flex-direction: column;

	width: 23rem;
	height: auto;
	margin: 2rem;

	border-radius: 1.2rem;
	background: rgba(255, 255, 255, 0.28);
	box-shadow: var(--shadow);

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		/* border-radius: 1.2rem 1.2rem 0 0; */
		div {
			display: flex;

			align-items: center;
			justify-content: center;
			overflow: hidden;

			width: 22rem;
			height: 26rem;
			padding: 0.5rem;
			border-radius: 1.2rem 1.2rem 0 0;

			img {
				display: flex;
				flex-shrink: 0;
				min-width: 100%;
				min-height: 100%;
				border-radius: 1.2rem 1.2rem 0 0;
				opacity: 0.9;
			}
		}
	}

	footer {
		display: inherit;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;

		width: inherit;
		/* height: 18rem; */

		background: var(--gray-gradient);
		border-radius: 0 0 1.2rem 1.2rem;

		h1 {
			margin-top: 2rem;
			color: var(--white);
			font-size: 2rem;
			font-weight: normal;
		}

		h2 {
			color: var(--green);
			font-size: 2.5rem;
			padding: 1rem 0;
		}

		div {
			display: flex;
			margin-bottom: 2rem;

			input {
				display: flex;
				align-items: center;
				justify-content: center;

				margin-right: 1rem;
				text-align: center;
				font-weight: bold;
				font-size: 1.8rem;
				color: var(--blue);
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
			}

			button {
				display: flex;
				align-items: center;
				justify-content: center;

				cursor: pointer;
				font-size: 1.8rem;
				padding: 1rem 3.5rem;
				border-radius: 50rem;
				background-color: var(--blue);
				color: var(--white);
			}
		}
	}
`;
