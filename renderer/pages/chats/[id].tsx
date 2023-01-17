import Image from "next/image";
import Modals from "../../components/Modals/Modals";
import Overlays from "../../components/Overlays/Overlays";
import Prompt from "../../components/Prompt/Prompt";
import PromptOverlay from "../../components/PromptOverlay/PromptOverlay";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { useRecoilValue } from "recoil";
import { auth, db } from "../../config/firebase";
import { modalState } from "../../recoils/modalState";
import { promptState } from "../../recoils/promptState";
import {
  ChatBox,
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
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

export default function Chats() {
  const [authUser] = useAuthState(auth);
  const [chatInput, setChatInput] = useState<any>("");

  const modals = useRecoilValue(modalState);
  const prompt = useRecoilValue(promptState);

  const router = useRouter();
  const id: any = router.query.id;

  const option = {
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  const [chatRooms] = useCollection(collection(db, "chatRooms"), option);
  const [messages]: any = useCollection(
    collection(db, "chatRooms", id, "messages"),
    option
  );

  const q = query(
    collection(db, `chatRooms/${id}/messages`),
    orderBy("timestamp")
  );

  const [messageItems]: any = useCollectionData(q);
  console.log(messageItems, "변화");
  console.log(messages, "정렬전 ");

  const chatItems = chatRooms?.docs.map((doc: any) => {
    const id = doc.id;
    const data = doc.data();
    return { id, ...data };
  });

  const targetItem = chatItems?.find((item) => item.id === id);

  const onChange = (e: any) => {
    setChatInput(e.target.value);
  };

  const addChatMessages = async (e: any) => {
    e.preventDefault();

    setChatInput(chatInput);
    await addDoc(collection(db, "chatRooms", id, "messages"), {
      name: authUser.displayName,
      email: authUser.email,
      message: chatInput,
      timestamp: serverTimestamp(),
    });
  };

  const formattedDate = new Intl.DateTimeFormat("ko-KR").format(new Date());
  const dates = formattedDate.split(".");
  const years = dates[0] + "년";
  const month = dates[1] + "월";
  const days = dates[2] + "일";
  const resultsDates = `${years}${month}${days}`;

  const options: any = {
    hour: "numeric",
    minute: "numeric",
    dayPeriod: "short",
  };

  const formattedTime = new Intl.DateTimeFormat("ko-KR", options).format(
    new Date()
  );

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
              <Small>{resultsDates}</Small>
              <Line />
            </DatesBox>

            {messageItems?.map((item: any) => (
              <ChatContentBox>
                <Contents>
                  <img
                    src={
                      "https://user-images.githubusercontent.com/69576865/212462529-ecc7efdc-c7d8-41ba-a315-50be16e9b6f9.svg"
                    }
                    alt="logo"
                  />
                  <ChatInfo>
                    <ChatDiv>
                      <ChatName>{item.name}</ChatName>
                      <Small>{formattedTime}</Small>
                    </ChatDiv>
                    <ChatText>{item.message}</ChatText>
                  </ChatInfo>
                </Contents>
              </ChatContentBox>
            ))}

            {/* <ChatContentBox>
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
            </ChatContentBox> */}
          </ChatContainer>
        </ScrollLine>

        <ChatForm onSubmit={addChatMessages}>
          <Input
            type="text"
            value={chatInput}
            onChange={onChange}
            placeholder="철학자들의 모임에 메시지 보내기"
          />
          <Button type="submit" hidden></Button>
        </ChatForm>
      </Right>
    </ChatBox>
  );
}
