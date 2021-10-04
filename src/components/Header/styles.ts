import styled, { keyframes } from 'styled-components';

const animationCart = keyframes`
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.17);
	}
`;

export const WrapperHeader = styled.header<{ hasItem: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	position: sticky;
	z-index: 2;

	width: 100vw;
	height: 8rem;
	padding: 0 2rem;

	border-bottom: solid 1px var(--orange);
	box-shadow: -2px 3px 7px rgba(0, 0, 0, 0.4);
	background: linear-gradient(89.56deg, #a4a0a1 13%, #343434 100%);

	a:first-child {
		& > svg:nth-child(1) {
			width: 18rem;
		}
	}

	a:last-child {
		display: flex;
		position: relative;
		width: 7rem;
		pointer-events: ${({ hasItem }) => (hasItem ? 'visiblePainted' : 'none')};

		&:hover {
			/* animation: name duration timing-function delay iteration-count direction fill-mode; */
			animation: ${animationCart} 300ms ease-in-out forwards;
		}

		h1 {
			&:hover {
				transform: scale(1.2);
			}

			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			transition: var(--boomerang);

			top: -0.2rem;
			right: 0.9rem;
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			background-color: var(--orange);
			color: var(--white);
			transform: ${({ hasItem }) => (hasItem ? 'scale(1.0)' : 'scale(0)')};
			opacity: ${({ hasItem }) => (hasItem ? 1 : 0)};
		}

		svg {
			transform: ${({ hasItem }) => (hasItem ? 'translateX(0)' : 'translateX(1rem)')};
			opacity: ${({ hasItem }) => (hasItem ? 1 : 0.3)};
			transition: var(--boomerang);
			fill: var(--white);
		}
	}
`;
