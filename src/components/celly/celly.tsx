import { type ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { rand } from '../../utils.ts';
import { Card } from './card';
import { Actions, Bio, Feed } from './views';

interface Props {
  type: 'feed' | 'actions' | 'bio';
}

export function Celly({ type }: Props) {
  const viewByTypeMap = useMemo<Record<Props['type'], ReactNode>>(
    () => ({
      feed: (
        <Feed>
          <Card
            artist="Father John Misty"
            song="Fun times in Babylon"
            link="ffm.to/qgenvke"
            visits={rand(10_000, 99_999)}
          />
          <Card
            artist="Father John Misty"
            song="Fun times in Babylon"
            link="ffm.to/qgenvke"
            visits={rand(10_000, 99_999)}
          />
          <Card
            artist="Father John Misty"
            song="Fun times in Babylon"
            link="ffm.to/qgenvke"
            visits={rand(10_000, 99_999)}
          />
        </Feed>
      ),
      actions: (
        <Actions artist="mxmtoon" song="Mona Lisa">
          <Card type="spotify" />
          <Card type="apple" />
          <Card type="deezer" />
          <Card type="youtube" />
        </Actions>
      ),
      bio: <Bio />,
    }),
    [],
  );

  return <Container>{viewByTypeMap[type]}</Container>;
}

const Container = styled.div`
	width: 230px;
	height: 446px;
	border-radius: 27px;
	padding: 18px;
	overflow: hidden;
	background-color: white;
	filter: drop-shadow(0 .1em 2.6em rgb(0 0 0 / .2));
`;
