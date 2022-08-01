import styled from "styled-components";
import { AVATAR_PLAHOLDER_LINK } from "../assets";

const Container = styled.div`
  display: flex;
  gap: 0.875rem;
  margin: 2rem 0;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: ${({ theme }) => theme.text};
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Username = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.span`
  font-size: 0.875rem;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={AVATAR_PLAHOLDER_LINK} />
      <Content>
        <Header>
          <Username>Jacek Śnieg</Username>
          <Date>{Math.ceil(Math.random() * 29 + 1)} days ago</Date>
        </Header>
        <Text>
          Your films are really boring! Try to lorem ipsum more... The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </Text>
      </Content>
    </Container>
  );
};

export default Comment;
