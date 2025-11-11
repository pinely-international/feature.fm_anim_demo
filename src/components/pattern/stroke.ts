import styled from 'styled-components';

export const Stroke = styled.div<{ width: number; height: number }>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	background: repeating-linear-gradient(135deg, black, black 5px, white 5px, white 35px);
`;
