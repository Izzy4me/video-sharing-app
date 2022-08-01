import { Link } from "react-router-dom";
import styled from "styled-components";
import { AVATAR_PLAHOLDER_LINK, VIDEO_PLACEHOLDER_LINK } from "../assets";

type ComponentSize = "small" | "large";
interface ComponentProps {
  readonly type?: ComponentSize;
};

const Container = styled.div`
  width: ${(props: ComponentProps) => props.type !== "small" && "350px"};
  margin-bottom: ${(props: ComponentProps) => (props.type === "small" ? "0.5rem" : "2rem")};
  cursor: pointer;
  display: ${(props: ComponentProps) => props.type === "small" && "flex"};
  gap: 1rem;
`;

const Image = styled.img`
  height: ${(props: ComponentProps) => (props.type === "small" ? "120px" : "202px")};
  width: 100%;
  min-width: 213px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props: ComponentProps) => props.type !== "small" && "0.75rem"};
  gap: 0.875rem;
  flex: 1;
`;

const ChannelAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: ${(props: ComponentProps) => props.type === "small" && "none"};
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
  type?: ComponentSize;
}

const Card = (props: Props) => {
  return (
    <Link to={`/video/${props.id}`} style={{ textDecoration: "none" }}>
      <Container type={props.type}>
        <Image src={VIDEO_PLACEHOLDER_LINK} type={props.type} />
        <Details type={props.type}>
          <ChannelAvatar src={AVATAR_PLAHOLDER_LINK} type={props.type} />
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
