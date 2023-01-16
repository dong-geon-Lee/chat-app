import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #35393f;
  width: 58rem;
  z-index: 10;
  border-radius: 0.6rem;
`;

export const Header = styled.div`
  border-bottom: 1px solid #262a2d;
`;

export const HeaderInfo = styled.header`
  padding: 2.4rem;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GroupTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
`;

export const CloseX = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const RoomHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Strong = styled.strong`
  font-size: 2.4rem;
  color: #b9bbbe;
`;

export const RoomText = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2;
  color: #b9bbbe;
`;

export const UserWrapper = styled.div`
  overflow-y: scroll;
  height: 30rem;

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

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.4rem;

  &:hover {
    background-color: #868e96;
  }

  &:hover div + div {
    background-color: #0ead69;
    cursor: pointer;
  }
`;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Img = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  object-fit: cover;
  display: block;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.3rem;
`;

export const UserName = styled.h1`
  font-size: 2.2rem;
  color: #f6f6f6;
`;

export const InviteBtn = styled.div`
  color: #f6f6f6;
  border: 1px solid #3aa55d;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
`;

export const InviteText = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;
