import React from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => (theme.bgLighter)};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0.5em 0.5em 0.5em 0.5em;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          {/* TODO: Change light/dark mode for context api and this could be affected */}
          <SearchInput placeholder="Search..." />
          <SearchOutlinedIcon />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
