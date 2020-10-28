import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  min-width: 350px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
  color: gray;
`;
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  background-image: url("https://www.noozhawk.com/images/made/images/uploads/slideshows/031720-Snow-Camino-Cielo-4-rh_4032_3024_99_s.jpeg");
`;
export const Avatar = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-content: center;
  opacity: 80%;
  align-items: center;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://image.freepik.com/free-vector/businessman-male-elegant-avatar_24877-18075.jpg");
`;
export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fc3469;
  font-size: 28px;
  z-index: 1;
  position: absolute;
  right: 50px;
  bottom: -15px;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  :last-child {
    margin-bottom: 0;
  }
`;
export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;
export const Time = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
`;
export const Minutes = styled.div`
  display: flex;
  font-size: 12px;
`;
export const AvatarTasks = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ photo }) => `url(${photo})`};
`;
export const TitleContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e9e8f0;
  margin-bottom: 50px;
`;
export const Title = styled.div`
  display: flex;
  font-size: 28px;
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 12px;
  text-transform: uppercase;
`;
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;
export const TitleTasks = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
`;
export const SubtitleTasks = styled.div`
  display: flex;
  font-size: 12px;
`;
export const CheckBox = styled.div`
  display: flex;
  text-decoration: line-through;
  input {
    cursor: pointer;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
`;
export const Box = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;
