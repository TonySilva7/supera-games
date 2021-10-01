import styled from 'styled-components';
import img from '../../assets/img/bg.png';

export const WrapperMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;

	background: url(${img}) no-repeat 100% 20% fixed;
	background-size: cover;

	min-height: 100vh;
`;
