import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	25% { opacity: 1; }
	100% { opacity: 1; }
`;

const expandVertically = keyframes`
	0% {
		transform: scaleY(0);
	}
	100% {
		transform: scaleY(1);
	}
`;

const expandHorizontally = keyframes`
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
`;

const slideVerticallyFromBottom = keyframes`
	from {
		transform: translateY(50%);
	}
	to {
		transform: translateY(0);
	}
`;

const Item = styled.div<{ top: number; left: number }>`
	position: absolute;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}px;
`;

const ExpandVertically = styled(Item)<{ delay?: number; timing?: number }>`
	opacity: 0;
	animation: ${expandVertically} ${({ timing = 1 }) => timing}s ease-out forwards,
						 ${fadeIn} ${({ delay = 0 }) => delay}s ease-out forwards;
`;

export const ExpandVerticallyFromMiddle = styled(ExpandVertically)`
	animation-delay: ${({ delay = 0 }) => delay}s;
	transform-origin: center;
`;

export const ExpandVerticallyFromTop = styled(ExpandVertically)`
	animation-delay: ${({ delay = 0 }) => delay}s;
	transform-origin: top;
`;

export const ExpandVerticallyFromBottom = styled(ExpandVertically)`
	animation-delay: ${({ delay = 0 }) => delay}s;
	transform-origin: bottom;
`;

const ExpandHorizontally = styled(Item)<{ delay?: number; timing?: number }>`
	opacity: 0;
	animation: ${expandHorizontally} ${({ timing = 1 }) => timing}s ease-out forwards,
						 ${fadeIn} ${({ delay = 0 }) => delay}s ease-out forwards;
`;

export const ExpandHorizontallyFromRight = styled(ExpandHorizontally)`
	animation-delay: ${({ delay = 0 }) => delay}s;
	transform-origin: right;
`;

export const SlideVerticallyFromBottom = styled(Item)<{
  delay?: number;
  timing?: number;
}>`
	opacity: 0;
	animation: ${slideVerticallyFromBottom} ${({ timing = 1 }) => timing}s ease-out forwards,
						 ${fadeIn} ${({ delay = 0 }) => delay}s ease-out forwards;
	animation-delay: ${({ delay = 0 }) => delay}s;
`;
