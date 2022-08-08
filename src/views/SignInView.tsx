import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 1.5rem 3.5rem;
  gap: 0.75rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;  // 24px
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  background-color: transparent;
  padding: 0.625rem;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.soft};
  padding: 0.625rem 1.5rem;
  cursor: pointer;
`;

const More = styled.div`
  display: flex;
  font-size: 0.625rem;
  ${({ theme }) => theme.textSoft};
  margin-top: 0.625rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  margin-left: 2.5rem;
`;

const Link = styled.span``;


const SignInView = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue to MyTube portal</Subtitle>
        <Input placeholder="Your username" />
        <Input type="password" placeholder="Your password" />
        <Button>Sign In</Button>

        <Subtitle>or </Subtitle>
        <Input placeholder="Your username" />
        <Input placeholder="Your email" />
        <Input type="password" placeholder="Your password" />
        <Button>Sign In</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignInView;
