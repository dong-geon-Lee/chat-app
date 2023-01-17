import styled from "styled-components";

export const ChatBox = styled.div`
  display: grid;
  grid-template-columns: minmax(32rem, 0.2fr) 1fr;
`;

export const Right = styled.div`
  background-color: #35393f;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 9rem 1.5fr 0.13fr;
`;

export const HeaderRight = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  border-bottom: 1px solid #000;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  gap: 1.8rem;
`;

export const HeaderStrong = styled.strong`
  font-size: 3.3rem;
  display: block;
  color: #96989e;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  line-height: 2;
  color: #fff;
`;

export const ScrollLine = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #202225;
  }

  &::-webkit-scrollbar-track {
    background-color: #2e3337;
  }
`;

export const MainChat = styled.main`
  padding: 1.6rem;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-top: auto;
  gap: 1.2rem;
`;

export const ImgBox = styled.div`
  background-color: #4f545c;
  display: inline-block;
  border-radius: 50%;
  padding: 1rem 2rem;
`;

export const Logo = styled.h1`
  font-size: 6.2rem;
  line-height: 1;
  color: #fff;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3.6rem;
  letter-spacing: 0.2px;
`;

export const MainText = styled.p`
  color: #96989e;
  font-size: 1.8rem;
`;

export const ChatContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DatesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 11rem 1fr;
  align-items: center;
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid #41454e;
`;

export const Small = styled.small`
  width: 100%;
  color: #dcddde;
  font-size: 1.4rem;
  text-align: center;
`;

export const ChatContentBox = styled.div``;

export const Contents = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  & img {
    width: 4.6rem;
    height: 4.6rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    display: block;
  }
`;

export const ChatName = styled.h1`
  font-size: 2rem;
  color: #fff;
  width: 100%;
`;

export const ChatText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #dcddde;
`;

export const ChatInfo = styled.div`
  width: 100%;
`;

export const ChatDiv = styled.div`
  display: flex;
  align-items: baseline;

  & h1 {
    flex: 0.2;
    text-align: left;
  }

  & small {
    flex: 3;
    text-align: left;
  }
`;

export const ChatForm = styled.form`
  padding: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.6rem;
  background-color: #40444b;
  color: #dcddde;
  font-size: 1.8rem;
  font-weight: 400;
  border-radius: 1rem;
`;

export const Button = styled.button``;
