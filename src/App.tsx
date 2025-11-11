import styled, { keyframes } from 'styled-components';
import { Celly, Pattern } from './components';

export function App() {
  return (
    <Container>
      <ExpandFromMiddle top={200} left={60}>
        <Pattern width={150} height={130} type="strike" />
      </ExpandFromMiddle>
      <SlideFromLeft top={40} left={400}>
        <Pattern width={250} height={500} color="black" type="solid" />
      </SlideFromLeft>
      <ExpandFromMiddle top={0} left={210}>
        <Celly type="bio" />
      </ExpandFromMiddle>
      <SlideFromBottom top={90} left={510}>
        <Celly type="actions" />
      </SlideFromBottom>
      <SlideFromLeft top={750} left={631}>
        <Pattern width={169} height={172} type="wave" />
      </SlideFromLeft>
      <SlideFromRight top={500} left={400}>
        <Pattern width={400} height={250} color="#9b62ff" type="solid" />
      </SlideFromRight>
      <ExpandFromMiddle top={515} left={440}>
        <Celly type="feed" />
      </ExpandFromMiddle>
    </Container>
  );
}

const expandFromMiddle = keyframes`
	0% {
		transform: scaleY(0);
		opacity: 0;
	}
	50% {
		transform: scaleY(1.1);
		opacity: 1;
	}
	100% {
		transform: scaleY(1);
	}
`;

const slideFromTop = keyframes`
	0% {
		transform: translateY(-100%);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

const slideFromBottom = keyframes`
	0% {
		transform: translateY(100%);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

const slideFromLeft = keyframes`
	0% {
		transform: translateX(-100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

const slideFromRight = keyframes`
  0% {
    transform: translateX(100%);
		opacity: 0;
  }
  100% {
    transform: translateX(0);
		opacity: 1;
  }
`;

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

const ExpandFromMiddle = styled(Item)`
	animation: ${expandFromMiddle} 1s ease-out forwards;
	transform-origin: center;
`;

const SlideFromTop = styled(Item)`
	animation: ${slideFromTop} 1s ease-out forwards;
`;

const SlideFromBottom = styled(Item)`
  animation: ${slideFromBottom} 1s ease-out forwards;
`;

const SlideFromLeft = styled(Item)`
	animation: ${slideFromLeft} 1s ease-out forwards;
`;

const SlideFromRight = styled(Item)`
  animation: ${slideFromRight} 1s ease-out forwards;
`;
