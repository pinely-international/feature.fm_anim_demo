import styled from 'styled-components';
import appleIcon from '../../../assets/icons/apple.svg';
import deezerIcon from '../../../assets/icons/deezer.png';
import spotifyIcon from '../../../assets/icons/spotify.svg';
import youtubeIcon from '../../../assets/icons/youtube.svg';

interface Props {
  type: 'spotify' | 'apple' | 'youtube' | 'deezer';
}

const iconByTypeMap: Record<Props['type'], string> = {
  spotify: spotifyIcon,
  apple: appleIcon,
  youtube: youtubeIcon,
  deezer: deezerIcon,
};

const titleByTypeMap: Record<Props['type'], string> = {
  spotify: 'Spotify',
  apple: 'Apple Music',
  youtube: 'YouTube',
  deezer: 'Deezer',
};

export function Streaming({ type }: Props) {
  return (
    <Container>
      <Icon src={iconByTypeMap[type]} />
      <Text>{titleByTypeMap[type]}</Text>
    </Container>
  );
}

const Container = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

const Icon = styled.img`
	width: 19px;
	height: 19px;
`;

const Text = styled.span`
	font-size: 9.5px;
	font-weight: 400;
`;
