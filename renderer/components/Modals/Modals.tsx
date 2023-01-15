import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../recoils/ModalState";
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
              src="https://user-images.githubusercontent.com/69576865/212520617-409e6e86-1bc0-4115-984a-de5a88c872b4.svg"
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
        <UserInfoBox>
          <AvatarBox>
            <Img
              src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
              alt="avatar-logo"
            />
            <UserName>이동수</UserName>
          </AvatarBox>

          <InviteBtn>
            <InviteText>초대...</InviteText>
          </InviteBtn>
        </UserInfoBox>
        <UserInfoBox>
          <AvatarBox>
            <Img
              src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
              alt="avatar-logo"
            />
            <UserName>이동수</UserName>
          </AvatarBox>

          <InviteBtn>
            <InviteText>초대...</InviteText>
          </InviteBtn>
        </UserInfoBox>
        <UserInfoBox>
          <AvatarBox>
            <Img
              src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
              alt="avatar-logo"
            />
            <UserName>이동수</UserName>
          </AvatarBox>

          <InviteBtn>
            <InviteText>초대...</InviteText>
          </InviteBtn>
        </UserInfoBox>
        <UserInfoBox>
          <AvatarBox>
            <Img
              src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
              alt="avatar-logo"
            />
            <UserName>이동수</UserName>
          </AvatarBox>

          <InviteBtn>
            <InviteText>초대...</InviteText>
          </InviteBtn>
        </UserInfoBox>
      </UserWrapper>
    </Container>
  );
}
