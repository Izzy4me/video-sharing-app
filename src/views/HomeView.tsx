import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HomeView = () => {
  return (
    <Container>
      {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map((id: string) => {
        return <Card id={id} key={id} />;
      })}
    </Container>
  );
};

export default HomeView;
