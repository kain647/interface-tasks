import React, { useState } from "react";
import Clock from "../clock";
import { GoThreeBars } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";

import {
  Container,
  Header,
  HeaderContainer,
  ImageContainer,
  Avatar,
  //Plus,
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
  Box,
  BoxContainer,
  InputContainer
} from "./styles";

const Profile = props => {
  const images = [
    "https://bit.ly/2Hwyl9o",
    "http://bit.ly/2YuJwn7",
    "https://bit.ly/2TDHVKB",
    "https://bit.ly/35xKKlP",
    "https://bit.ly/3kIumFp"
  ];

  const tasks = [
    {
      id: 1,
      time: "24",
      photo: images[0],
      title: "Coffee with Adam",
      subtitle: "Starbucks"
    },
    {
      id: 2,
      time: "35",
      photo: images[1],
      title: "Lunch with Kate",
      subtitle: "Restaurant"
    },
    {
      id: 3,
      time: "60",
      photo: images[2],
      title: "Training",
      subtitle: "Boxing hall"
    },
    {
      id: 4,
      time: "20",
      photo: images[3],
      title: "Visit doctor",
      subtitle: "Ophthalmologist"
    },
    {
      id: 5,
      time: "120",
      photo: images[4],
      title: "Meeting a friend",
      subtitle: "Bar friends"
    },
    {
      id: 6,
      time: "24",
      photo: images[0],
      title: "Coffee with Adam",
      subtitle: "Starbucks"
    },
    {
      id: 7,
      time: "35",
      photo: images[1],
      title: "Lunch with Kate",
      subtitle: "Restaurant"
    },
    {
      id: 8,
      time: "60",
      photo: images[2],
      title: "Training",
      subtitle: "Boxing hall"
    },
    {
      id: 9,
      time: "20",
      photo: images[3],
      title: "Visit doctor",
      subtitle: "Ophthalmologist"
    },
    {
      id: 10,
      time: "120",
      photo: images[4],
      title: "Meeting a friend",
      subtitle: "Bar friends"
    }
  ];

  const [checked, setChecked] = useState({});

  const handleClick = id => {
    const value = checked[id];
    const newValue = value === undefined ? true : !value;
    const newState = {
      ...checked,
      [id]: newValue
    };
    setChecked(newState);
  };

  const taskNumber = tasks.length;
  const activeNumber = tasks.filter(task => checked[task.id]).length;
  const activeTask = taskNumber - activeNumber;

  //const textTask = activeTask > 1 ? "Tasks" : "Task";
  const textTask = `Task${activeTask > 1 ? "s" : ""}`;

  const [isShow, setIsShow] = useState(false);
  const toggle = () => setIsShow(!isShow);
  //console.log(toggle)


  return (
    <Container>
      <ImageContainer>
        <HeaderContainer>
          <Header>
            <GoThreeBars />
            <InputContainer isShow={isShow}>
              <input type="search" placeholder="Search..."  />
            </InputContainer>
            <RiSearch2Line onClick={toggle} />
          </Header>
          <Avatar />
          <TitleContainer>
            <Title>
              {activeTask} {textTask}
            </Title>
            <Subtitle>
              <Clock />
            </Subtitle>
          </TitleContainer>
        </HeaderContainer>
        <Box>
          {/*<Plus>*/}
          {/*  <BiPlus />*/}
          {/*</Plus>*/}
        </Box>
      </ImageContainer>
      {tasks.map(task => {
        const { time, photo, title, subtitle, id } = task;
        const active = checked[id];
        return (
          <Task
            key={id}
            time={time}
            photo={photo}
            title={title}
            subtitle={subtitle}
            active={active || false}
            onClick={() => {
              handleClick(id);
            }}
          />
        );
      })}
    </Container>
  );
};

const Task = props => {
  const { time, photo, title, subtitle, active, onClick } = props;
  return (
    <InfoContainer onClick={onClick} active={active}>
      <TimeContainer>
        <Time>{time}</Time>
        <Minutes>min</Minutes>
      </TimeContainer>
      <BoxContainer>
        <AvatarTasks photo={photo} />
        <TasksContainer>
          <TitleTasks>{title}</TitleTasks>
          <SubtitleTasks>{subtitle}</SubtitleTasks>
        </TasksContainer>
      </BoxContainer>
      <CheckBox>
        <input type="checkbox" checked={active} readOnly />
      </CheckBox>
    </InfoContainer>
  );
};

export default Profile;
