import styled from "styled-components";

export const Container = styled.div``;

export const TextName = styled.h1`
  color: #fff;
`;

export const Text = styled.h1`
  color: #96989e;
  text-transform: uppercase;
  font-size: 1.5rem;
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
  margin-top: 1rem;
`;

export const Right = styled.div`
  background-color: #35393f;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 1.6rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.4rem;
`;

export const ContentBox = styled.div`
  margin: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ChatRoom = styled.div`
  display: flex;
  color: #96989e;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const TextChat = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const Strong = styled.h1`
  font-size: 2.6rem;
  display: block;
`;

export const Footer = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: #292b2f;

  & img {
    width: 4.2rem;
    height: 4.2rem;
    object-fit: "cover";
    background-color: #fff;
    border-radius: 50%;
    padding: 0.4rem;
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
