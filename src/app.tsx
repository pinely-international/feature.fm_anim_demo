import styled from 'styled-components';
import {
  Celly,
  ExpandHorizontallyFromRight,
  ExpandVerticallyFromBottom,
  ExpandVerticallyFromMiddle,
  ExpandVerticallyFromTop,
  Pattern,
  SlideVerticallyFromBottom,
} from './components';

export function App() {
  return (
    <Container>
      <ExpandVerticallyFromBottom top={200} left={60} delay={1.5} timing={0.5}>
        <Pattern width={150} height={130} type="strike" />
      </ExpandVerticallyFromBottom>
      <ExpandVerticallyFromBottom top={60} left={400}>
        <Pattern width={250} height={500} color="black" type="solid" />
      </ExpandVerticallyFromBottom>
      <ExpandVerticallyFromMiddle top={0} left={210} delay={0.5} timing={0.5}>
        <Celly type="bio" />
      </ExpandVerticallyFromMiddle>
      <SlideVerticallyFromBottom top={140} left={510} delay={1} timing={0.5}>
        <Celly type="actions" />
      </SlideVerticallyFromBottom>
      <ExpandVerticallyFromTop top={810} left={631} delay={0.5} timing={0.5}>
        <Pattern width={169} height={172} type="wave" />
      </ExpandVerticallyFromTop>
      <ExpandHorizontallyFromRight top={560} left={400} timing={0.5}>
        <Pattern width={400} height={250} color="#9b62ff" type="solid" />
      </ExpandHorizontallyFromRight>
      <ExpandVerticallyFromMiddle top={600} left={440} delay={1.5} timing={0.5}>
        <Celly type="feed" />
      </ExpandVerticallyFromMiddle>
    </Container>
  );
}

const Container = styled.div`
	border: 1px solid red;
	position: relative;
	width: 900px;
	height: 1100px;
`;
