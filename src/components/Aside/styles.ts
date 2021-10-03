import styled from 'styled-components';

export const WrapperAside = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	position: sticky;

	top: 10rem;
	padding: 1rem;
	width: 22rem;
	margin: 2rem 2rem 2rem 0;
	max-height: calc(100vh - 20rem);

	background: var(--brown-gradient);
	border: 1px solid rgba(255, 255, 255, 0.34);
	box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
	border-radius: 1.2rem;

	& > header {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 80%;

		button {
			margin: 1rem 0;
			color: var(--white);
			background: none;
			cursor: pointer;
		}

		border-bottom: solid 1px rgba(255, 255, 255, 0.2);
	}

	& > footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 80%;

		h1 {
			color: var(--green);
			margin-top: 1rem;
			font-size: 1.7rem;
		}

		ul {
			margin-top: 1rem;
			li {
				display: flex;
				align-items: center;

				padding: 0.5rem 0;
				font-size: 1.5rem;

				span {
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;

					background-color: none;
					border-radius: 100%;
					width: 3.3rem;
					height: 3.3rem;
					transition: all 150ms ease-in-out;
				}

				span:hover {
					background-color: rgba(255, 255, 255, 0.09);
				}

				/* *********************** */
				input[type='checkbox'] {
					display: flex;
					appearance: none;
					position: relative;
					cursor: pointer;
					/* margin-right: 0.5rem; */
				}

				input[type='checkbox']:before {
					content: '';
					display: block;
					width: 2rem;
					height: 2rem;
					background-color: var(--white-gray);
					border-radius: 0.5rem;
					box-shadow: inset 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
				}

				input[type='checkbox']:disabled:before {
					background-color: rgba(255, 255, 255, 0.4);
				}

				input[type='checkbox']:checked:before {
					content: '';
					display: block;
					background-color: var(--blue);
				}

				input[type='checkbox']:checked:after {
					content: '';
					display: block;
					width: 0.5rem;
					height: 1rem;
					border: solid white;
					border-width: 0 0.3rem 0.3rem 0;
					-webkit-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					transform: rotate(45deg);
					position: absolute;
					top: 0.2rem;
					left: 0.6rem;
				}
			}
		}
	}
`;
