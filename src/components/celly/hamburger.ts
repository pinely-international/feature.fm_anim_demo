import styled from 'styled-components';

export const Hamburger = styled.div`
	height: 2px;
	width: 12px;
	background: black;
	margin-right: 10px;
	
	&::before {
		content: '';
		position: absolute;
		display: block;
		height: 2px;
		width: 6px;
		background: black;
		margin: 5px 0 0 3px;
	}
	
	&::after {
		content: '';
		position: absolute;
		display: block;
		height: 2px;
		width: 6px;
		background: black;
		margin: -5px 0 0 3px;
	}
`;
