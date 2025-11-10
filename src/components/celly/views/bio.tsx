import styled from 'styled-components';
import { Hamburger } from '../hamburger.ts';
import { Header } from '../header.ts';

export function Bio() {
  return (
    <Container>
      <Header>
        <h1>My Bio Link</h1>
        <span />
        <Hamburger />
      </Header>
      <Image src="https://placecats.com/230/118" alt="Bio Link Artwork" />
    </Container>
  );
}

const Container = styled.div``;

const Image = styled.img`
	width: 230px;
	height: 118px;
`;
