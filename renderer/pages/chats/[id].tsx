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
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { MessageProps } from "../../@types/types";
import {
  findCurChatRoom,
  formattedDates,
  generateId,
  option,
} from "../../helpers/utils";
import {
  AVATAR__ICONS,
  BELL__ICONS,
  PIN__ICONS,
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
  ScrollBottom,
} from "../../styles/chats";

export default function Chats() {
  const [chatInput, setChatInput] = useState("");
  const [authUser] = useAuthState(auth);
  const modals = useRecoilValue(modalState);
  const prompt = useRecoilValue(promptState);
  const bottomMessage: any = useRef(null);

  const router = useRouter();
  const id = router.query.id as string;
  const sortedQuery = query(
    collection(db, `chatRooms/${id}/messages`),
    orderBy("timestamp")
  );

  const [messageItems] = useCollectionData(sortedQuery);
  const [chatRooms] = useCollectionData(collection(db, "chatRooms"), option);
  const curChatRoom = findCurChatRoom(chatRooms, id);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const addChatMessages = async (e: React.FormEvent) => {
    e.preventDefault();

    setChatInput(chatInput);
    await addDoc(collection(db, "chatRooms", id, "messages"), {
      id: generateId(id),
      name: authUser.displayName,
      email: authUser.email,
      message: chatInput,
      timestamp: serverTimestamp(),
      avatar: authUser.photoURL,
    });

    setChatInput("");
  };

  useEffect(() => {
    setTimeout(
      bottomMessage?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }),
      10
    );
  }, [chatInput !== "" && chatInput !== " "]);

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
              <Title>#{curChatRoom?.chatRoomName}??? ?????? ??? ???????????????!</Title>
              <MainText>
                #{curChatRoom?.chatRoomName} ????????? ???????????????.
              </MainText>
            </MainContent>
          </MainChat>

          <ChatContainer>
            <DatesBox>
              <Line />
              <Small>{formattedDates()}</Small>
              <Line />
            </DatesBox>

            {messageItems?.map((item: MessageProps) => (
              <ChatContentBox key={item.id}>
                <Contents>
                  <img src={item?.avatar || AVATAR__ICONS} alt="avatar" />
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
                <ScrollBottom ref={bottomMessage}>{}</ScrollBottom>
              </ChatContentBox>
            ))}
          </ChatContainer>
        </ScrollLine>

        <ChatForm onSubmit={addChatMessages}>
          <Input
            type="text"
            value={chatInput}
            onChange={onChange}
            placeholder={`${curChatRoom?.chatRoomName}??? ????????? ?????????`}
          />
          <Button type="submit" hidden></Button>
        </ChatForm>
      </Right>
    </ChatBox>
  );
}
