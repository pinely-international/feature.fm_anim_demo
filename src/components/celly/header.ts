import styled from 'styled-components';

export const Header = styled.header`
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	margin-bottom: 28px;
	
	h1 {
		font-size: 14px;
		margin-right: 20px;
	}
	
	span {
		font-size: 9px;
		color: #9b9b9b;
	}
`;
