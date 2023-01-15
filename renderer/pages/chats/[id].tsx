import { collection } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import Modals from "../../components/Modals/Modals";
import Overlays from "../../components/Overlays/Overlays";
import Prompt from "../../components/Prompt/Prompt";
import PromptOverlay from "../../components/PromptOverlay/PromptOverlay";
import Sidebar from "../../components/Sidebar/Sidebar";
import { db } from "../../config/firebase";
import { modalState } from "../../recoils/modalState";
import { promptState } from "../../recoils/promptState";
import {
  Button,
  ChatContainer,
  ChatContentBox,
  ChatDiv,
  ChatForm,
  ChatInfo,
  ChatName,
  ChatText,
  Contents,
  DatesBox,
  HeaderBox,
  HeaderRight,
  HeaderStrong,
  HeaderText,
  ImgBox,
  Input,
  Line,
  Logo,
  MainChat,
  MainContent,
  MainText,
  Right,
  ScrollLine,
  Small,
  Title,
} from "../../styles/chats";
import { ChatBox } from "../../styles/home";

export default function Chats() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  const option = {
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  const [chatRooms] = useCollection(collection(db, "chatRooms"), option);

  const chatItems = chatRooms?.docs.map((doc: any) => {
    const id = doc.id;
    const data = doc.data();
    return { id, ...data };
  });

  const targetItem = chatItems?.find((item) => item.id === id);
  console.log(targetItem);

  console.log(chatItems, "GO");

  const [modals, setModals] = useRecoilState(modalState);
  const [prompt, setPrompt] = useRecoilState(promptState);

  return (
    <ChatBox>
      {modals && (
        <>
          <Modals />
          <Overlays />
        </>
      )}

      {prompt && (
        <>
          <Prompt />
          <PromptOverlay />
        </>
      )}

      <Sidebar />
      <Right>
        <HeaderRight>
          <HeaderBox>
            <HeaderStrong>#</HeaderStrong>
            <HeaderText>{targetItem?.chatRoomName}</HeaderText>
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
              <Title>#{targetItem?.chatRoomName}에 오신 걸 환영합니다!</Title>
              <MainText>
                #{targetItem?.chatRoomName} 채널의 시작이에요.
              </MainText>
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
                  src="https://user-images.githubusercontent.com/69576865/212462529-ecc7efdc-c7d8-41ba-a315-50be16e9b6f9.svg"
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
  );
}
