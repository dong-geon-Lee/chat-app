import React from "react";
import Head from "next/head";
import Login from "./login";
import {
  Box,
  Button,
  ChatBox,
  ChatContainer,
  ChatContentBox,
  ChatDiv,
  ChatForm,
  ChatInfo,
  ChatName,
  ChatRoom,
  ChatText,
  Container,
  ContentBox,
  Contents,
  DatesBox,
  Footer,
  Header,
  HeaderBox,
  HeaderRight,
  HeaderStrong,
  HeaderText,
  Headline,
  ImgBox,
  Input,
  Left,
  Line,
  Logo,
  Main,
  MainChat,
  MainContent,
  MainText,
  Right,
  ScrollLine,
  Small,
  Strong,
  Text,
  TextBox,
  TextChat,
  TextEmail,
  TextId,
  TextName,
  Title,
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
              <Headline>
                <Image
                  src="https://user-images.githubusercontent.com/69576865/212309802-78baa647-6130-4f88-a170-d7b7659ffd96.svg"
                  alt="right-arrow"
                  width="20px"
                  height="20px"
                />
                <Text>Text Channels</Text>
              </Headline>
              <Image
                src="https://user-images.githubusercontent.com/69576865/212322092-25b68461-6f11-441a-9ab5-acfe27b3a83a.svg"
                alt="plus-icon"
                width="18px"
                height="18px"
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
                <TextId>{user.displayName}</TextId>
                <TextId>#00{user.uid.length}</TextId>
              </TextBox>
            </UserInfo>
          </Footer>
        </Left>

        <Right>
          <HeaderRight>
            <HeaderBox>
              <HeaderStrong>#</HeaderStrong>
              <HeaderText>철학자들의 모임</HeaderText>
            </HeaderBox>

            <HeaderBox>
              <Image
                src="https://user-images.githubusercontent.com/69576865/212446527-175c0289-082a-44a0-a8cd-2fa227e1bcc5.svg"
                alt="logo"
                width="28px"
                height="28px"
                style={{ cursor: "pointer" }}
              />

              <Image
                src="https://user-images.githubusercontent.com/69576865/212446683-1f1b2052-987b-47ba-99d7-3e520f21e2c2.svg"
                alt="logo"
                width="28px"
                height="28px"
                style={{ cursor: "pointer" }}
              />

              <Image
                src="https://user-images.githubusercontent.com/69576865/212446644-cc2b9a38-88d9-4bf0-8a77-66b157e63327.svg"
                alt="logo"
                width="28px"
                height="28px"
                style={{ cursor: "pointer" }}
              />
            </HeaderBox>
          </HeaderRight>

          <ScrollLine>
            <MainChat>
              <MainContent>
                <ImgBox>
                  <Logo>#</Logo>
                </ImgBox>
                <Title>#철학자들의 모임에 오신 걸 환영합니다!</Title>
                <MainText>#철학자들의 모임 채널의 시작이에요.</MainText>
              </MainContent>
            </MainChat>

            <ChatContainer>
              <DatesBox>
                <Line />
                <Small>2023년 1월 14일</Small>
                <Line />
              </DatesBox>

              <ChatContentBox>
                <Contents>
                  <img
                    src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
                    alt="logo"
                  />
                  <ChatInfo>
                    <ChatDiv>
                      <ChatName>이동건</ChatName>
                      <Small>오후 3:28</Small>
                    </ChatDiv>
                    <ChatText>
                      안녕하세요. 오늘은 정말 좋은날인거 같아요!
                    </ChatText>
                  </ChatInfo>
                </Contents>
              </ChatContentBox>
              <ChatContentBox>
                <Contents>
                  <img
                    src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
                    alt="logo"
                  />
                  <ChatInfo>
                    <ChatDiv>
                      <ChatName>권은혜</ChatName>
                      <Small>오후 3:28</Small>
                    </ChatDiv>
                    <ChatText>저도 그렇게 생각합니다.</ChatText>
                  </ChatInfo>
                </Contents>
              </ChatContentBox>
            </ChatContainer>
          </ScrollLine>

          <ChatForm>
            <Input type="text" placeholder="철학자들의 모임에 메시지 보내기" />
            <Button type="submit" hidden></Button>
          </ChatForm>
        </Right>
      </ChatBox>
    </Container>
  );
}
