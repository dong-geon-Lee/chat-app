import React from "react";
import Head from "next/head";
import Login from "./login";
import {
  Box,
  ChatBox,
  ChatRoom,
  Container,
  ContentBox,
  Footer,
  Header,
  Left,
  Main,
  Right,
  Strong,
  Text,
  TextBox,
  TextChat,
  TextEmail,
  TextId,
  TextName,
  UserInfo,
} from "../styles/home";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Image from "next/image";

export default function Home() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  console.log(user);

  if (!user) return <Login />;

  return (
    <Container priority={true}>
      <Head>
        <title>Home page</title>
      </Head>

      <ChatBox>
        <Left>
          <Header>
            <TextName>{user.displayName}</TextName>
            <Image
              src="https://user-images.githubusercontent.com/69576865/212306697-97d9bea3-1c39-490b-abfe-d40f7118aeb8.svg"
              alt="logout"
              width="26px"
              height="26px"
              onClick={signOut}
              style={{ cursor: "pointer" }}
            />
          </Header>

          <Main>
            <Box>
              <Image
                src="https://user-images.githubusercontent.com/69576865/212309802-78baa647-6130-4f88-a170-d7b7659ffd96.svg"
                alt="logo"
                width="20px"
                height="20px"
              />
              <Text>Text Channels</Text>
              <Image
                src="https://user-images.githubusercontent.com/69576865/212322092-25b68461-6f11-441a-9ab5-acfe27b3a83a.svg"
                alt="logo"
                width="16px"
                height="16px"
                style={{ cursor: "pointer" }}
                onClick={() => alert("채팅룸을 만드시겠습니까?")}
              />
            </Box>

            <ContentBox>
              <ChatRoom>
                <Strong>#</Strong>
                <TextChat>과학자들의 모임</TextChat>
              </ChatRoom>
              <ChatRoom>
                <Strong>#</Strong>
                <TextChat>철학자들의 모임</TextChat>
              </ChatRoom>
              <ChatRoom>
                <Strong>#</Strong>
                <TextChat>수학자들의 모임</TextChat>
              </ChatRoom>
            </ContentBox>
          </Main>

          <Footer>
            <img
              src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
              alt="logo"
            />
            <UserInfo>
              <TextEmail>{user.email}</TextEmail>
              <TextBox>
                <TextId>이동건</TextId>
                <TextId>#00{user.uid.length}</TextId>
              </TextBox>
            </UserInfo>
          </Footer>
        </Left>

        <Right>
          <h1>#general</h1>
        </Right>
      </ChatBox>
    </Container>
  );
}
