import styled from 'styled-components';
import { numberFormatter, rand } from '../../../utils.ts';
import { Footer } from './footer.tsx';

interface Props {
  artist: string;
  song: string;
  link: string;
  visits: number;
}

export function Song({ artist, song, link, visits }: Props) {
  return (
    <Container>
      <Image
        src={`https://placecats.com/${rand(35, 45)}/${rand(35, 45)}`}
        alt="Song Artwork"
      />
      <Text fontWeight={700}>{song}</Text>
      <Text>{artist}</Text>
      <Text alignSelf="flex-end" color="#9b9b9b">
        {link}
      </Text>
      <Text gridColum="span 2" color="#9b9b9b">
        {numberFormatter.format(visits)} Visits · Post Release
      </Text>
      <Footer gridColumn="span 2" />
    </Container>
  );
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 40px auto;
	grid-template-rows: 10px 10px 20px 30px 30px;
	grid-column-gap: 15px;
`;

const Image = styled.img`
	width: 40px;
	height: 40px;
	grid-row: span 3;
`;

// TODO: probs makes more sense to have a dedicated Text for each text
const Text = styled.span<{
  fontWeight?: number;
  color?: string;
  gridColum?: string;
  alignSelf?: string;
}>`
	font-size: 8px;
	font-weight: ${({ fontWeight = 400 }) => fontWeight};
	color: ${({ color = 'black' }) => color};
	grid-column: ${({ gridColum }) => gridColum};
	align-self: ${({ alignSelf }) => alignSelf || 'center'};
`;
