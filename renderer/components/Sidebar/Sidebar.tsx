import Image from "next/image";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import { auth, db } from "../../config/firebase";
import { modalState } from "../../recoils/modalState";
import { promptOverlayState, promptState } from "../../recoils/promptState";
import { ChatProps } from "../../@types/types";
import {
  findChatRooms,
  findCurUser,
  findSharedRoom,
  hiddenIcons,
  option,
} from "../../helpers/utils";
import {
  ADD__USER__ICONS,
  ARROW__ICONS,
  AVATAR__ICONS,
  ENTER__ROOM__FIRST,
  HOME__ICONS,
  LOGOUT__ICONS,
  PLUS__ICONS,
  REMOVE__CHAT__ROOM,
  REMOVE__ROOM__ICONS,
} from "../../constants/constants";
import {
  Box,
  ChatRoom,
  ContentBox,
  Footer,
  Header,
  Headline,
  IconBox,
  IconImg,
  IconsBox,
  Left,
  Main,
  Strong,
  Text,
  TextBox,
  TextChat,
  TextEmail,
  TextId,
  TextName,
  UserInfo,
} from "./styles";

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const authUserId = user?.uid;
  const authUserEmail = user?.email;
  const router = useRouter();

  const [, setModals] = useRecoilState(modalState);
  const [, setPrompt] = useRecoilState(promptState);
  const [, setOverlays] = useRecoilState(modalState);
  const [, setPromptOverlay] = useRecoilState(promptOverlayState);

  const [userLists] = useCollectionData(collection(db, "users"), option);
  const [userInfo] = findCurUser(userLists, authUserId);

  const sortedQuery = query(collection(db, `chatRooms`), orderBy("timestamp"));
  const [chatRoomsItems] = useCollectionData(sortedQuery);
  const displayChatRooms = findChatRooms(chatRoomsItems, userInfo);
  const shareRoomItems = findSharedRoom(chatRoomsItems, userInfo);
  const allChatRooms = [...shareRoomItems, ...displayChatRooms];

  const openModals = (chatRoomId: string, chatRoomName: string) => {
    const { id, chatRoom } = router.query;
    if (id === chatRoomId && chatRoom === chatRoomName) {
      setModals(true);
      setOverlays(true);
    } else {
      alert(ENTER__ROOM__FIRST);
      return;
    }
  };

  const openPrompt = () => {
    setPrompt(true);
    setPromptOverlay(true);
  };

  const removeChatRoom = async (chatRoomId: string, chatRoomName: string) => {
    const { id, chatRoom } = router.query;

    if (id === chatRoomId && chatRoom === chatRoomName) {
      const choiceRoom = confirm(`[ ${chatRoomName} ] 채팅방을 삭제할까요?`);

      if (choiceRoom) {
        alert(REMOVE__CHAT__ROOM);
        await deleteDoc(doc(db, "chatRooms", chatRoomId));
        await deleteDoc(doc(db, "messages", chatRoomId));
        router.push("/home");
        return;
      }
    } else {
      alert(ENTER__ROOM__FIRST);
      return;
    }
  };

  const InChatRoom = (id: string, chatRoom: string) => {
    router.push({ pathname: `/chats/${id}`, query: { id, chatRoom } });
  };

  const handleHome = () => {
    router.push("/home");
  };

  const handleLogout = () => {
    router.push("/login");
    signOut();
  };

  return (
    <Left>
      <Header>
        <TextName>{userInfo?.name}</TextName>
        <IconBox>
          <Image
            src={HOME__ICONS}
            alt="home"
            width="26px"
            height="26px"
            onClick={handleHome}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={LOGOUT__ICONS}
            alt="logout"
            width="26px"
            height="26px"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          />
        </IconBox>
      </Header>

      <Main>
        <Box>
          <Headline>
            <Image
              src={ARROW__ICONS}
              alt="right-arrow"
              width="20px"
              height="20px"
            />
            <Text>Text Channels</Text>
          </Headline>
          <Image
            src={PLUS__ICONS}
            alt="plus-icon"
            width="18px"
            height="18px"
            style={{ cursor: "pointer" }}
            onClick={openPrompt}
          />
        </Box>

        <ContentBox>
          {allChatRooms?.map((chatRoom: ChatProps) => (
            <ChatRoom key={chatRoom.id}>
              <Strong>#</Strong>
              <TextChat
                onClick={() => InChatRoom(chatRoom.id, chatRoom.chatRoomName)}
              >
                {chatRoom.chatRoomName}
              </TextChat>
              <IconsBox>
                <IconImg
                  src={ADD__USER__ICONS}
                  alt="user-add-icon"
                  hidden={hiddenIcons(chatRoom, authUserEmail)}
                  onClick={() => openModals(chatRoom.id, chatRoom.chatRoomName)}
                />
                <IconImg
                  src={REMOVE__ROOM__ICONS}
                  alt="chat-delete-icon"
                  hidden={hiddenIcons(chatRoom, authUserEmail)}
                  onClick={() =>
                    removeChatRoom(chatRoom.id, chatRoom.chatRoomName)
                  }
                />
              </IconsBox>
            </ChatRoom>
          ))}
        </ContentBox>
      </Main>

      <Footer>
        <img src={userInfo?.avatar || AVATAR__ICONS} alt="logo" />
        <UserInfo>
          <TextEmail>{userInfo?.email}</TextEmail>
          <TextBox>
            <TextId>{userInfo?.name}</TextId>
            <TextId>#00{userInfo?.id.length}</TextId>
          </TextBox>
        </UserInfo>
      </Footer>
    </Left>
  );
}
