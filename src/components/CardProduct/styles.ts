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
	transition: var(--boomerang);

	&:hover {
		transform: scale(1.04);
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;

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
		padding: 0 0.7rem;
		background: var(--gray-gradient);
		border-radius: 0 0 1.2rem 1.2rem;

		h1 {
			margin-top: 2rem;
			margin-bottom: 0.3rem;
			color: var(--white);
			font-size: 2rem;
			font-weight: normal;
			text-align: center;
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
				transition: var(--boomerang);

				&:hover {
					box-shadow: inset var(--shadow);
					box-shadow: inset var(--shadow);
				}
			}
		}
	}
`;

export const MyButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;

	cursor: pointer;
	font-size: 1.8rem;
	padding: 1rem 3.5rem;
	border-radius: 50rem;
	/* background-color: var(--blue); */
	background: linear-gradient(171deg, rgb(122 175 255), rgba(122, 175, 255, 0.8));
	color: var(--white);

	transition: all 400ms ease;

	&:before {
		content: 'Adicionar';
		position: absolute;

		color: var(--blue);
		top: 0;
		left: -11rem;
		background: rgb(226 237 255);
		padding: 0.8rem 2.3rem;
		border-radius: 50rem;
		border: solid 2px rgb(160 198 255);
		box-shadow: inset 0px 0px 11px 3px rgb(0 0 0 / 18%);

		transition: var(--boomerang);
	}

	&:hover:before {
		left: 1rem;
	}
`;
