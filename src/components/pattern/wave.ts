import styled from 'styled-components';
import wavePattern from '../../assets/wave.svg';

export const Wave = styled.div<{ width: number; height: number }>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	background: url(${wavePattern});
	background-repeat: no-repeat;
	background-size: cover;
`;
