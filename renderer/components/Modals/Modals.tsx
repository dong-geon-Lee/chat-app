import { collection, doc, updateDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { EXIST__CHATROOM__USER, X__ICONS } from "../../constants/constants";
import {
  existChatRoomUser,
  findCurUser,
  findOtherUsers,
  option,
} from "../../helpers/utils";
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
  const [chatUsers, setChatUsers] = useState([]);
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const [user] = useAuthState(auth);
  const authUserId = user?.uid;
  const [userLists] = useCollectionData(collection(db, "users"), option);
  const [userInfo] = findCurUser(userLists, authUserId);
  const otherUsers = findOtherUsers(userLists, authUserId);

  const router = useRouter();
  const chatRoomId = router.query.id as string;

  const closeModals = () => {
    setModals(false);
    setOverlays(false);
  };

  const addChatUser = async (addUserEmail: string, chatRoomId: string) => {
    try {
      if (existChatRoomUser(chatUsers, addUserEmail)) {
        alert(EXIST__CHATROOM__USER);
        return;
      }

      setChatUsers((prevState) => [...prevState, addUserEmail]);
      const userLists = [...chatUsers, addUserEmail];

      const chatRoomRef = doc(db, "chatRooms", chatRoomId);
      await updateDoc(chatRoomRef, {
        users: userLists,
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <TextBox>
            <GroupTitle>친구를 {userInfo?.name} 그룹으로 초대하기</GroupTitle>
            <CloseX src={X__ICONS} alt="xIcons" onClick={closeModals} />
          </TextBox>

          <RoomHeader>
            <Strong>#</Strong>
            <RoomText>{router.query.chatRoom}</RoomText>
          </RoomHeader>
        </HeaderInfo>
      </Header>

      <UserWrapper>
        {otherUsers?.map((item: any) => (
          <UserInfoBox key={item.id}>
            <AvatarBox>
              <Img src={item.avatar} alt="avatar-logo" />
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
