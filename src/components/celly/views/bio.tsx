import styled from 'styled-components';
import { Card } from '../card';
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
      <Children>
        <Image src="https://placecats.com/230/118" alt="Bio Link Artwork" />
        <Info>
          <h1>Father John Misty</h1>
          <span>welcome to my bio link</span>
        </Info>
        <Card type="spotify" />
        <Card type="apple" />
        <Image src="https://placecats.com/230/118" alt="Bio Link Artwork" />
      </Children>
      <Action>
        <span>+</span>
        <span>Add something</span>
        <div>
          <div />
        </div>
      </Action>
    </Container>
  );
}

const Container = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 230px;
	height: 118px;
`;

const Children = styled.div`
	margin-top: -20px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const Info = styled.div`
	text-align: center;
	margin: 10px 0;
	
	h1 {
		margin: 0;
		font-size: 12px;
	}
	span {
		margin: 0;
		font-size: 8px;
	}
`;

const Action = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 54px;
	width: calc(100% + calc(18px * 2));
	margin: 0 -18px 0 -18px;
	border-radius: 25px;
	box-shadow: 0 0 10px rgb(0 0 0 / 20%);
	background: white;
	display: flex;
	align-items: center;
	gap: 12px;
	padding-left: 18px;
	
	span:nth-child(2) {
		font-size: 9.4px;
	}
	
	div {
		position: absolute;
		width: 33px;
		height: 33px;
		right: 24px;
		bottom: 12px;
		border-radius: 50%;
		background: #ff5262;
		
		div {
			position: absolute;
			top: 16px;
			left: 15px;
			width: 3px;
			height: 3px;
			background: white;
			
			&:before {
				content: '';
				position: absolute;
				top: -5px;
				left: -4px;
				width: 2px;
				height: 2.5px;
				background: white;
			}
			
			&:after {
				content: '';
				position: absolute;
				top: 6px;
				left: 5px;
				width: 2px;
				height: 2.5px;
				background: white;
			}
		}
	}
`;
