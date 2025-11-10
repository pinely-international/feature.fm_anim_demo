import styled from 'styled-components';
import { Song } from './song.tsx';
import { Streaming } from './streaming.tsx';

type Props =
  | {
      type: 'spotify' | 'apple' | 'youtube' | 'deezer';
      artist?: never;
      song?: never;
      link?: never;
      visits?: never;
    }
  | {
      type?: never;
      artist: string;
      song: string;
      link: string;
      visits: number;
    };

export function Card({ type, artist, song, link, visits }: Props) {
  return (
    <Container>
      {type ? (
        <Streaming type={type} />
      ) : (
        <Song artist={artist} song={song} link={link} visits={visits} />
      )}
    </Container>
  );
}

const Container = styled.div`
	background: white;
	border-radius: 2.6px;
	padding: 12px 10px;
	box-shadow: 0 .1em .6em rgb(0 0 0 / 20%);
`;
