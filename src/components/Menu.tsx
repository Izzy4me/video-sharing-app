import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HelpIcon from "@mui/icons-material/Help";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PetsIcon from "@mui/icons-material/Pets";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoImg from "../assets/images/logo.png";


const Container = styled.div`
  flex: 1;
  background-color: ${props => props.theme.bgLighter};
  height: 100vh;
  color: ${props => props.theme.text};
  font-size: 1em;
  position: sticky;
  top: 0;
  // Placing it on the same top and making scrollable with the entire content
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Img = styled.img`
  height: 3rem;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  cursor: pointer;
  padding: 0.25rem 0rem;
`;

const Hr = styled.hr`
  margin: 1rem 0rem;
  border: 0.5px solid ${( props ) => props.theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  margin-top: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

  interface Props {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
  };

  const Menu = (props: Props) => {
    return (
      <Container>
        <Wrapper>
          <Logo>
            <Img src={LogoImg} />
            MyTube
          </Logo>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryIcon />
            Library
          </Item>
          <Item>
            <SlideshowIcon />
            Your videos
          </Item>
          <Item>
            <WatchLaterIcon />
            To watch
          </Item>
          <Item>
            <ThumbUpIcon />
            Liked videos
          </Item>
          <Hr />
          <Login>
            Sign in to like videos, comment and subscribe.
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Login>

          <Hr />
          <Item>
            <SettingsIcon />
            Settings
          </Item>
          <Item>
            <HistoryIcon />
            History
          </Item>
          <Item>
            <HelpIcon />
            Help
          </Item>
          <Item>
            <AnnouncementIcon />
            Report issue
          </Item>
          <Item
            onClick={() => { props.setDarkMode(!props.darkMode) }}
          >
            <LightModeIcon />
            Light Mode
          </Item>
          <Hr />
          <Item>
            <EmojiEventsIcon />
            Events
          </Item>
          <Item>
            <SportsEsportsIcon />
            Sport
          </Item>
          <Item>
            <LandscapeIcon />
            Nature
          </Item>
          <Item>
            <PetsIcon />
            Animals
          </Item>
        </Wrapper>
      </Container>
    );
  };

export default Menu;
