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

				input {
					margin-right: 0.5rem;
					cursor: pointer;
				}
			}
		}
	}
`;
