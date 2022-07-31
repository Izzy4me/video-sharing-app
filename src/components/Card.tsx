import { Link } from "react-router-dom";
import styled from "styled-components";
import { AVATAR_PLAHOLDER_LINK, VIDEO_PLACEHOLDER_LINK } from "../assets";

const Container = styled.div`
  width: 350px;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 0.75rem;
  gap: 0.875rem;
`;

const ChannelAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: gray;
`;

const VideoTitle = styled.h1`
  margin: 0px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin: 8px 0px 6px 0px;
`;

const Info = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSoft};
`;

interface Props {
  id: string;
}

const Card = (props: Props) => {
  return (
    <Link to={`/video/${props.id}`} style={{textDecoration: "none"}}>
      <Container>
        <Image src={VIDEO_PLACEHOLDER_LINK} />
        <Details>
          <ChannelAvatar src={AVATAR_PLAHOLDER_LINK} />
          <Description>
            <VideoTitle>Video placeholder #{props.id}</VideoTitle>
            <ChannelName>IzzyTV</ChannelName>
            <Info>99,999 views &#x2022; 1 day ago</Info>
          </Description>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
