import styled from 'styled-components';
import insightsIcon from '../../../assets/icons/insights.svg';
import shareIcon from '../../../assets/icons/share.svg';

interface Props {
  gridColumn?: string;
}

export function Footer({ gridColumn }: Props) {
  return (
    <Container gridColumn={gridColumn}>
      <Button>
        <Icon src={insightsIcon} />
        Insights
      </Button>
      <Button>
        <Icon src={shareIcon} />
        Share it!
      </Button>
    </Container>
  );
}

const Container = styled.div<{ gridColumn?: string }>`
	grid-column: ${({ gridColumn }) => gridColumn || 'auto'};
	padding-top: 12px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-top: .5px solid #d8d8d8;
	margin: 0 -10px 0 -10px;
`;

const Button = styled.div<{ icon?: string }>`
	font-size: 8px;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Icon = styled.img`
	width: 15px;
	height: 15px;
`;
