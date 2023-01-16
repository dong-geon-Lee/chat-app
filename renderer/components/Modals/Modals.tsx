import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { db } from "../../config/firebase";
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
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const option = {
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  const [users] = useCollection(collection(db, "users"), option);
  const [chatRooms] = useCollection(collection(db, "chatRooms"), option);

  const items = users?.docs.map((doc) => doc.data());
  const chatRoomItems = chatRooms?.docs.map((doc) => doc.data());

  console.log(items);
  console.log(chatRoomItems);

  const closeModals = () => {
    setModals(false);
    setOverlays(false);
  };

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <TextBox>
            <GroupTitle>친구를 이동건 그룹으로 초대하기</GroupTitle>
            <CloseX
              src="https://user-images.githubusercontent.com/69576865/212525600-d0c566fe-3910-4bda-9c3a-c31b6b886f1b.svg"
              alt="xIcons"
              onClick={closeModals}
            />
          </TextBox>

          <RoomHeader>
            <Strong>#</Strong>
            <RoomText>철학자들의 모임</RoomText>
          </RoomHeader>
        </HeaderInfo>
      </Header>

      <UserWrapper>
        {items?.map((item: any) => (
          <UserInfoBox key={item.id}>
            <AvatarBox>
              <Img
                src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
                alt="avatar-logo"
              />
              <UserName>{item.name}</UserName>
            </AvatarBox>

            <InviteBtn>
              <InviteText>초대...</InviteText>
            </InviteBtn>
          </UserInfoBox>
        ))}
      </UserWrapper>
    </Container>
  );
}
