import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	min-height: calc(100vh - 20rem);

	margin: 2rem 0;

	background: rgba(255, 255, 255, 0.18);
	mix-blend-mode: normal;
	border: 1px solid rgba(255, 255, 255, 0.55);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 12px;
`;