import styled from 'styled-components';
import { Celly, Pattern } from './components';

export function App() {
  return (
    <Container>
      <Item top={200} left={60}>
        <Pattern width={150} height={130} type="strike" />
      </Item>
      <Item top={40} left={400}>
        <Pattern width={250} height={500} color="black" type="solid" />
      </Item>
      <Item top={750} left={631}>
        <Pattern width={169} height={172} type="wave" />
      </Item>
      <Item top={0} left={210}>
        <Celly type="bio" />
      </Item>
      <Item top={90} left={510}>
        <Celly type="actions" />
      </Item>
      <Item top={500} left={400}>
        <Pattern width={400} height={250} color="#9b62ff" type="solid" />
      </Item>
      <Item top={515} left={440}>
        <Celly type="feed" />
      </Item>
    </Container>
  );
}

const Container = styled.div`
	border: 1px solid red;
	position: relative;
	width: 1000px;
	height: 1000px;
`;

const Item = styled.div<{ top: number; left: number }>`
	position: absolute;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}px;
`;
