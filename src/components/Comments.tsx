import styled from "styled-components";
import Comment from "./Comment";
import { AVATAR_PLAHOLDER_LINK } from "../assets";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding-top: 0.75rem;
  padding-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const TextInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.text};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={AVATAR_PLAHOLDER_LINK} />
        <TextInput placeholder="Add a comment..." />
      </NewComment>
      {["0", "1", "2", "3", "4", "5", "6", "7", "8"].map((id: string) => {
        return <Comment key={id} />;
      })}
    </Container>
  );
}

export default Comments;
