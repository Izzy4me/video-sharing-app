import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
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
  background-color: #090707;
  height: 100vh;
  color: white;
  font-size: 1em;
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
  border: 0.5px solid grayscale;
`;

const Menu = () => {
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
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Hr />
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
        <Item>
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
}

export default Menu;
