import Image from "next/image";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import { auth, db } from "../../config/firebase";
import { modalState } from "../../recoils/modalState";
import { promptOverlayState, promptState } from "../../recoils/promptState";
import {
  findChatRooms,
  findCurUser,
  findSharedRoom,
  option,
} from "../../helpers/utils";
import {
  ADD__USER__ICONS,
  ARROW__ICONS,
  AVATAR__ICONS,
  HOME__ICONS,
  LOGOUT__ICONS,
  PLUS__ICONS,
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

  const handleHome = () => {
    router.push("/home");
  };

  const handleLogout = () => {
    router.push("/login");
    signOut();
  };

  const openModals = () => {
    setModals(true);
    setOverlays(true);
  };

  const openPrompt = () => {
    setPrompt(true);
    setPromptOverlay(true);
  };

  const removeChatRoom = async (id: string) => {
    await deleteDoc(doc(db, "chatRooms", id));
  };

  const InChatRoom = (id: string, chatRoom: string) => {
    router.push({ pathname: `/chats/${id}`, query: { id, chatRoom } });
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
          {allChatRooms?.map((chatItem: any) => (
            <ChatRoom key={chatItem.id}>
              <Strong>#</Strong>
              <TextChat
                onClick={() => InChatRoom(chatItem.id, chatItem.chatRoomName)}
              >
                {chatItem.chatRoomName}
              </TextChat>
              <IconsBox>
                <IconImg
                  src={ADD__USER__ICONS}
                  alt="user-add-icon"
                  onClick={openModals}
                  hidden={chatItem.hostUserEmail !== user?.email}
                />
                <IconImg
                  src={REMOVE__ROOM__ICONS}
                  alt="chat-delete-icon"
                  onClick={() => removeChatRoom(chatItem.id)}
                  hidden={chatItem.hostUserEmail !== user?.email}
                />
              </IconsBox>
            </ChatRoom>
          ))}
        </ContentBox>
      </Main>

      <Footer>
        <img src={user?.photoURL || AVATAR__ICONS} alt="logo" />
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
