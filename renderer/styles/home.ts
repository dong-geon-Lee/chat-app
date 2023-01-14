import styled from "styled-components";

export const Container = styled.div``;

export const TextName = styled.h1`
  color: #fff;
`;

export const Text = styled.h1`
  color: #96989e;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Button = styled.button``;

export const ChatBox = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export const Left = styled.div`
  background-color: #2f3136;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 1fr 0.1fr;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  border-bottom: 1px solid #000;
`;

export const Right = styled(Left)`
  background-color: #35393f;
  grid-template-rows: 0.1fr 1.5fr 0.18fr;
`;

export const Main = styled.main`
  padding: 1.6rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  line-height: 2;
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ContentBox = styled.div`
  margin: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const ChatRoom = styled.div`
  display: flex;
  color: #96989e;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;

  &:hover {
    background-color: #35393f;
    cursor: pointer;
  }
`;

export const TextChat = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Strong = styled.h1`
  font-size: 2.6rem;
  display: block;
  color: #96989e;
`;

export const Footer = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: #292b2f;

  & img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background-color: #fff;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextEmail = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TextId = styled.h1`
  color: #96989e;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ScrollLine = styled.div`
  overflow-y: scroll;
`;

export const HeaderRight = styled(Header)``;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  gap: 1.8rem;
`;

export const HeaderStrong = styled(Strong)`
  font-size: 3.3rem;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  line-height: 2;
  color: #fff;
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

export const ChatContentBox = styled.div``;

export const Contents = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  & img {
    width: 4.2rem;
    height: 4.2rem;
    object-fit: cover;
    background-color: #fff;
    border-radius: 50%;
    padding: 0.4rem;
    cursor: pointer;
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

export const DatesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 1fr;
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

export const ChatForm = styled.form`
  padding: 1.6rem;
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

export const ChatInfo = styled.div`
  /* display: flex; */
  width: 100%;
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
