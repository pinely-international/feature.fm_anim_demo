import styled from 'styled-components';

export const Solid = styled.div<{
  width: number;
  height: number;
  color: string;
}>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	background-color: ${({ color }) => color};
`;
