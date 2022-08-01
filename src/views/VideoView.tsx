import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { AVATAR_PLAHOLDER_LINK, YT_VIDEO_IFRAME } from "../assets";
import Comments from "../components/Comments";

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const Content = styled.div`
  flex: 5;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text };
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

const ChannelAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  gap: 0.5rem;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.875rem;
`;

const ChannelDescription = styled.p`
  font-size: 0.75rem;
`;

const Subscribe = styled.button`
  background-color: #47d351;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 0.625rem 1.25rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 1rem 0;
  border: 0.5px solid ${({ theme }) => theme.textSoft};
`;


const VideoView = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* Rickroll video placeholder for now :) */}
          {YT_VIDEO_IFRAME}
        </VideoWrapper>
        <Title>Rickrolled... Again! :D</Title>
        <Details>
          <Info>1,234,567 views &#x2022; Aug 1, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />1
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelAvatar src={AVATAR_PLAHOLDER_LINK} />
            <ChannelDetail>
              <ChannelName>IzzyTV</ChannelName>
              <ChannelCounter>99k subscribers</ChannelCounter>
              <ChannelDescription>
                This is really awesome challen about nothing. It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                here', making it look like readable English. Many desktop publishing packages and web page editors now
                use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                on purpose (injected humour and the like).
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>Reccomendation placeholder</Recommendation>
    </Container>
  );
}

export default VideoView;
