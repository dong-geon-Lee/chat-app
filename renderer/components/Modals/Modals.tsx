import { collection, doc, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AvatarBox,
  CloseX,
  Container,
  GroupTitle,
  Header,
  HeaderInfo,
  Img,
  InviteBtn,
  InviteText,
  RoomHeader,
  RoomText,
  Strong,
  TextBox,
  UserInfoBox,
  UserName,
  UserWrapper,
} from "./styles";

export default function Modals() {
  const [user] = useAuthState(auth);
  const [chatUsers, setChatUsers] = useState([]);
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const router = useRouter();
  const chatRoomId: any = router.query.id;

  const option = {
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  const [users]: any = useCollection(collection(db, "users"), option);
  const userLists = users?.docs.map((doc: any) => doc.data());

  const authUserId = user?.uid;
  const findUser: any = userLists?.filter((x: any) => x.id === authUserId);
  const otehrUsers: any = userLists?.filter((x: any) => x.id !== authUserId);
  const [userInfo] = findUser || "";

  const closeModals = () => {
    setModals(false);
    setOverlays(false);
  };

  const addChatUser = async (addUserEmail: string, chatRoomId: string) => {
    try {
      if (chatUsers.find((x) => x === addUserEmail)) return;
      setChatUsers((prevState: any) => [...prevState, addUserEmail]);

      const chatRef = doc(db, "chatRooms", chatRoomId);
      const list = [...chatUsers, addUserEmail];
      await updateDoc(chatRef, {
        users: list,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <TextBox>
            <GroupTitle>친구를 {userInfo?.name} 그룹으로 초대하기</GroupTitle>
            <CloseX
              src="https://user-images.githubusercontent.com/69576865/212525600-d0c566fe-3910-4bda-9c3a-c31b6b886f1b.svg"
              alt="xIcons"
              onClick={closeModals}
            />
          </TextBox>

          <RoomHeader>
            <Strong>#</Strong>
            <RoomText>{router.query.chatRoom}</RoomText>
          </RoomHeader>
        </HeaderInfo>
      </Header>

      <UserWrapper>
        {otehrUsers?.map((item: any) => (
          <UserInfoBox key={item.id}>
            <AvatarBox>
              <Img
                src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
                alt="avatar-logo"
              />
              <UserName>{item.name}</UserName>
            </AvatarBox>

            <InviteBtn onClick={() => addChatUser(item.email, chatRoomId)}>
              <InviteText>초대...</InviteText>
            </InviteBtn>
          </UserInfoBox>
        ))}
      </UserWrapper>
    </Container>
  );
}
