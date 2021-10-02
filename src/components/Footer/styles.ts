import styled from 'styled-components';

export const WrapperFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 8rem;

	background: rgba(255, 255, 255, 0.17);

	small {
		font-size: 1.5rem;

		svg {
			fill: var(--orange);
		}
	}
`;
