import Image from "next/image";
import Modals from "../../components/Modals/Modals";
import Overlays from "../../components/Overlays/Overlays";
import Prompt from "../../components/Prompt/Prompt";
import PromptOverlay from "../../components/PromptOverlay/PromptOverlay";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useRecoilValue } from "recoil";
import { auth, db } from "../../config/firebase";
import { modalState } from "../../recoils/modalState";
import { promptState } from "../../recoils/promptState";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { findCurChatRoom, formattedDates, option } from "../../helpers/utils";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  BELL__ICONS,
  PIN__ICONS,
  DEFAULT__AVATAR,
  USERS__ICONS,
} from "../../constants/constants";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
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

export default function Chats() {
  const [chatInput, setChatInput] = useState("");
  const [authUser] = useAuthState(auth);
  const modals = useRecoilValue(modalState);
  const prompt = useRecoilValue(promptState);

  const router = useRouter();
  const id = router.query.id as string;
  const orderedQuery = query(
    collection(db, `chatRooms/${id}/messages`),
    orderBy("timestamp")
  );

  const [messageItems] = useCollectionData(orderedQuery);
  const [chatRooms] = useCollectionData(collection(db, "chatRooms"), option);
  const curChatRoom = findCurChatRoom(chatRooms, id);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const addChatMessages = async (e: React.FormEvent) => {
    e.preventDefault();

    setChatInput(chatInput);
    await addDoc(collection(db, "chatRooms", id, "messages"), {
      name: authUser.displayName,
      email: authUser.email,
      message: chatInput,
      timestamp: serverTimestamp(),
      avatar: authUser.photoURL,
    });

    setChatInput("");
  };

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
            <HeaderText>{curChatRoom?.chatRoomName}</HeaderText>
          </HeaderBox>

          <HeaderBox>
            <Image
              src={BELL__ICONS}
              alt="logo"
              width="28px"
              height="28px"
              style={{ cursor: "pointer" }}
              priority
            />

            <Image
              src={PIN__ICONS}
              alt="logo"
              width="28px"
              height="28px"
              style={{ cursor: "pointer" }}
              priority
            />

            <Image
              src={USERS__ICONS}
              alt="logo"
              width="28px"
              height="28px"
              style={{ cursor: "pointer" }}
              priority
            />
          </HeaderBox>
        </HeaderRight>

        <ScrollLine>
          <MainChat>
            <MainContent>
              <ImgBox>
                <Logo>#</Logo>
              </ImgBox>
              <Title>#{curChatRoom?.chatRoomName}에 오신 걸 환영합니다!</Title>
              <MainText>
                #{curChatRoom?.chatRoomName} 채널의 시작이에요.
              </MainText>
            </MainContent>
          </MainChat>

          <ChatContainer>
            <DatesBox>
              <Line />
              <Small>{formattedDates()}</Small>
              <Line />
            </DatesBox>

            {messageItems?.map((item) => (
              <ChatContentBox key={item.id}>
                <Contents>
                  <img src={item?.avatar || DEFAULT__AVATAR} alt="logo" />
                  <ChatInfo>
                    <ChatDiv>
                      <ChatName>{item?.name}</ChatName>
                      <Small>
                        {item?.timestamp?.toDate().toLocaleTimeString("ko-KR")}
                      </Small>
                    </ChatDiv>
                    <ChatText>{item?.message}</ChatText>
                  </ChatInfo>
                </Contents>
              </ChatContentBox>
            ))}
          </ChatContainer>
        </ScrollLine>

        <ChatForm onSubmit={addChatMessages}>
          <Input
            type="text"
            value={chatInput}
            onChange={onChange}
            placeholder={`${curChatRoom?.chatRoomName}에 메시지 보내기`}
          />
          <Button type="submit" hidden></Button>
        </ChatForm>
      </Right>
    </ChatBox>
  );
}
