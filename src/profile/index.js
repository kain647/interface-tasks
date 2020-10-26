import React from "react";
import { GoThreeBars } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";

import {
  Container,
  Header,
  HeaderContainer,
  ImageContainer,
  Avatar,
  Plus,
  InfoContainer,
  TimeContainer,
  Time,
  Minutes,
  AvatarTasks,
  TitleContainer,
  Title,
  Subtitle,
  TasksContainer,
  TitleTasks,
  SubtitleTasks,
  CheckBox,
  Line,
  Box
} from "./styles";

const Profile = props => {
  const images = [
    "https://bit.ly/2Hwyl9o",
    "http://bit.ly/2YuJwn7",
    "https://bit.ly/2TDHVKB",
    "https://bit.ly/35xKKlP"
  ];
  const tasks = [
    {
      time: "24",
      photo: images[0],
      title: "Coffee with Adam",
      subtitle: "Starbucks"
    },
    {
      time: "35",
      photo: images[1],
      title: "Lunch with Kate",
      subtitle: "Restaurant"
    },
    {
      time: "60",
      photo: images[2],
      title: "Training",
      subtitle: "Boxing hall"
    },
    {
      time: "60",
      photo: images[3],
      title: "Visit doctor",
      subtitle: "Ophthalmologist"
    },
    {
      time: "24",
      photo: images[0],
      title: "Coffee with Adam",
      subtitle: "Starbucks"
    },
    {
      time: "35",
      photo: images[1],
      title: "Lunch with Kate",
      subtitle: "Restaurant"
    },
    {
      time: "60",
      photo: images[2],
      title: "Training",
      subtitle: "Boxing hall"
    },
    {
      time: "60",
      photo: images[3],
      title: "Visit doctor",
      subtitle: "Ophthalmologist"
    },
    {
      time: "24",
      photo: images[0],
      title: "Coffee with Adam",
      subtitle: "Starbucks"
    },
    {
      time: "35",
      photo: images[1],
      title: "Lunch with Kate",
      subtitle: "Restaurant"
    },
    {
      time: "60",
      photo: images[2],
      title: "Training",
      subtitle: "Boxing hall"
    },
    {
      time: "60",
      photo: images[3],
      title: "Visit doctor",
      subtitle: "Ophthalmologist"
    }
  ];

  return (
    <Container>
      <ImageContainer>
        <HeaderContainer>
          <Header>
            <GoThreeBars cursor="pointer" />
            <RiSearch2Line cursor="pointer" />
          </Header>
          <Avatar />
          <TitleContainer>
            <Title>6 Tasks</Title>
            <Subtitle>april 7, 2020</Subtitle>
          </TitleContainer>
        </HeaderContainer>
        <Box>
          {/*<WhiteBox />*/}
          <Plus>
            <BiPlus color="#fff" />
          </Plus>
        </Box>
      </ImageContainer>
      {tasks.map(task => {
        const { time, photo, title, subtitle } = task;
        return (
          <>
            <Tasks
              time={time}
              photo={photo}
              title={title}
              subtitle={subtitle}
            />
            <Line />
          </>
        );
      })}
    </Container>
  );
};

const Tasks = props => {
  const { time, photo, title, subtitle } = props;
  return (
    <InfoContainer>
      <TimeContainer>
        <Time>{time}</Time>
        <Minutes>min</Minutes>
      </TimeContainer>
      <AvatarTasks photo={photo} />
      <TasksContainer>
        <TitleTasks>{title}</TitleTasks>
        <SubtitleTasks>{subtitle}</SubtitleTasks>
      </TasksContainer>
      <CheckBox>
        <input type="checkbox" />
      </CheckBox>
    </InfoContainer>
  );
};

export default Profile;
