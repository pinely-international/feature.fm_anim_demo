import type { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  artist: string;
  song: string;
  children: ReactNode;
}

export function Actions({ artist, song, children }: Props) {
  return (
    <Container>
      <Image src="https://placecats.com/230/195" />
      <Text fontSize={11}>{artist}</Text>
      <Text fontSize={18}>{song}</Text>
      <Children>{children}</Children>
    </Container>
  );
}

const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: 140px 25px auto;
	grid-row-gap: 9px;
`;

const Image = styled.img`
	position: absolute;
	inset: -18px 0 -18px -18px;
	width: calc(230px + calc(18px * 2));
	height: calc(195px + 18px);
`;

const Text = styled.span<{ fontSize: number }>`
	font-size: ${({ fontSize }) => fontSize}px;
	font-weight: 400;
	align-self: flex-end;
	z-index: 1;
	margin: 0;
	color: white;
`;

const Children = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
