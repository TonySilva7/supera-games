import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-evenly;

	padding: 3rem;
	width: 97%;
	min-height: calc(100vh - 20rem);
	margin: 2rem 0;
	border: 1px solid rgba(255, 255, 255, 0.55);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 12px;
	background: rgba(255, 255, 255, 0.18);

	& > div {
		display: flex;
		flex-direction: column;
	}
`;
