import type { ReactNode } from 'react';
import styled from 'styled-components';
import iconSearch from '../../../assets/icons/search.svg';
import { Hamburger } from '../hamburger.ts';
import { Header } from '../header.ts';

interface Props {
  children?: ReactNode;
}

export function Feed({ children }: Props) {
  return (
    <Container>
      <Header>
        <h1>My Links</h1>
        <span>15 in total</span>
        <Hamburger />
      </Header>
      <Actions>
        <Search>
          <img src={iconSearch} alt="Search Icon" />
          <span>Search</span>
        </Search>
        <Selected>
          <div>9</div>
          <span>Selected</span>
        </Selected>
        <Tabs>
          <Tab active>Enabled</Tab>
          <Tab>Archived</Tab>
        </Tabs>
      </Actions>
      <Children>{children}</Children>
    </Container>
  );
}

const Container = styled.div`
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 94px;
		width: 100%;
		background: linear-gradient(0, #fafafa 20%, rgb(255 255 255 / 0) 100%);
	}
`;

const Actions = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 9px;
	padding-bottom: 9px;
`;

const Search = styled.div`
	padding-bottom: 9px;
	display: flex;
	gap: 9px;
	border-bottom: 2px solid #dedede;
	grid-column: span 2;
	
	span {
		font-size: 9px;
	}
`;

const Selected = styled.div`
	display: flex;
	font-size: 9px;
	align-items: center;
	gap: 5px;
	border-bottom: 2px solid transparent;

	div {
		width: 17px;
		background: black;
		border-radius: 50%;
		aspect-ratio: 1 / 1;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Tabs = styled.div`
	display: grid;
	column-gap: 12px;
	grid-template-columns: repeat(2, auto);
	align-items: center;
`;

const Tab = styled.span<{ active?: boolean }>`
	height: 12px;
	font-size: 9px;
	font-weight: ${({ active = false }) => (active ? 500 : 400)};
	border-bottom: ${({ active }) => (active ? '2px solid black' : '2px solid transparent')};
`;

const Children = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
