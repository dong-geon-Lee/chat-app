import styled from "styled-components";

export const Left = styled.div`
  background-color: #2f3136;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 9rem 1fr 0.1fr;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  border-bottom: 1px solid #000;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

export const TextName = styled.h1`
  color: #fff;
`;

export const Text = styled.h1`
  color: #96989e;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
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

  &:hover img {
    opacity: 1;
  }
`;

export const TextChat = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 15rem;
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-left: auto;

  & img {
    opacity: 0;
  }
`;

export const IconImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    transform: scale(1.35);
  }
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
    display: block;
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
