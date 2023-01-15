import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #35393f;
  width: 50rem;
  z-index: 10;
  border-radius: 0.6rem;
`;

export const Wrapper = styled.div`
  padding: 2.4rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
`;

export const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem 0;
  gap: 1.2rem;
`;

export const TypeText = styled.h2`
  color: #b9bbbe;
  font-weight: 600;
`;

export const TypeBox = styled.div`
  background-color: #444951;
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TypeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Strong = styled.strong`
  font-size: 3.4rem;
  color: #b5b6b9;
`;

export const Box = styled.div``;

export const Text = styled.p`
  font-size: 1.8rem;
  color: #dcdeee;
`;

export const SubText = styled.p`
  font-size: 1.4rem;
  color: #b9bbbe;
`;

export const Circle = styled.div`
  background-color: #fff;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: 5px outset #000;
  outline: 5px solid #fff;
`;

export const Bottom = styled.div`
  margin: 2rem 0;
`;

export const ChannelInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  margin: 1rem 0;
  background-color: #202225;
  color: #dcddde;
  font-size: 1.8rem;

  &::placeholder {
    color: #87898c;
    font-size: 1.6rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 4.2rem;
  background-color: #2f3136;
  padding: 1.8rem;
`;

export const CloseBtn = styled.button`
  font-size: 1.8rem;
  font-weight: 600;
  background-color: inherit;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.6rem 2.6rem;
  border-radius: 0.4rem;
  background-color: #5864f2;
  color: #fff;

  transition: all 0.3s ease;

  &:hover {
    background-color: #5e60ce;
  }
`;
