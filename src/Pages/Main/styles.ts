import styled from 'styled-components';
import img from '../../assets/img/bg.png';

export const WrapperMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;

	background: url(${img}) no-repeat 100% 20% fixed;
	background-size: cover;

	min-height: 100vh;

	& > div {
		display: inherit;
		flex-direction: row;

		padding: 0 1rem;
		width: 100vw;
		align-items: space-between;
		justify-content: space-between;
	}
`;
