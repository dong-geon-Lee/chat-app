import Image from "next/image";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import { auth, db } from "../../config/firebase";
import { modalState } from "../../recoils/modalState";
import { promptOverlayState, promptState } from "../../recoils/promptState";
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

  const [, setModals] = useRecoilState(modalState);
  const [, setPrompt] = useRecoilState(promptState);
  const [, setOverlays] = useRecoilState(modalState);
  const [, setPromptOverlay] = useRecoilState(promptOverlayState);

  const router = useRouter();

  const option = {
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  const [chatRooms] = useCollection(collection(db, "chatRooms"), option);
  const [users] = useCollection(collection(db, "users"), option);

  const authUserId = user?.uid;
  const items = users?.docs.map((doc) => doc.data());
  const findUser: any = items?.filter((x: any) => x.id === authUserId);
  const [userInfo] = findUser || "";
  const chatRoomItems = chatRooms?.docs.map((doc) => doc.data());
  const displayChatRooms = chatRoomItems?.filter(
    (chatRommItem) => chatRommItem?.hostUserId === userInfo?.id
  );

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

  const InChatRoom = (id: string) => {
    router.push(`/chats/${id}`);
  };

  return (
    <Left>
      <Header>
        <TextName>{userInfo?.name}</TextName>
        <IconBox>
          <Image
            src="https://user-images.githubusercontent.com/69576865/212540134-ac8b8eb9-f38c-4b06-8aa7-5a949fc403db.svg"
            alt="home"
            width="26px"
            height="26px"
            onClick={handleHome}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="https://user-images.githubusercontent.com/69576865/212540226-681d536d-2c20-4e30-8dd5-3134ab23a1e4.svg"
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
            onClick={openPrompt}
          />
        </Box>

        <ContentBox>
          {displayChatRooms?.slice()?.map((chatItem: any) => (
            <ChatRoom key={chatItem.id}>
              <Strong>#</Strong>
              <TextChat onClick={() => InChatRoom(chatItem.id)}>
                {chatItem.chatRoomName}
              </TextChat>
              <IconsBox>
                <IconImg
                  src="https://user-images.githubusercontent.com/69576865/212469432-e628eed0-03ee-4a6e-963f-a22d535d1c99.svg"
                  alt="user-add-icon"
                  onClick={openModals}
                />
                <IconImg
                  src="https://user-images.githubusercontent.com/69576865/212463054-9ab9e6b8-ad21-4919-9197-581d6c75f5e6.svg"
                  alt="chat-delete-icon"
                  onClick={() => removeChatRoom(chatItem.id)}
                />
              </IconsBox>
            </ChatRoom>
          ))}
        </ContentBox>
      </Main>

      <Footer>
        <img
          src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
          alt="logo"
        />
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
