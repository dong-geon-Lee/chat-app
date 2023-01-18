import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, db } from "../../config/firebase";
import { X__ICONS } from "../../constants/constants";
import { promptOverlayState, promptState } from "../../recoils/promptState";
import {
  Bottom,
  Box,
  Button,
  Center,
  ChannelInput,
  Circle,
  CloseBtn,
  Container,
  Footer,
  Header,
  Img,
  Strong,
  SubText,
  Text,
  Title,
  TypeBox,
  TypeContent,
  TypeText,
  Wrapper,
} from "./styles";

export default function Prompt() {
  const [, setPrompt] = useRecoilState(promptState);
  const [, setPromptOverlay] = useRecoilState(promptOverlayState);
  const [chatRoomName, setChatRoomName] = useState("");

  const [user] = useAuthState(auth);
  const { uid, email } = user;

  const closePrompt = () => {
    setPrompt(false);
    setPromptOverlay(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomName(e.target.value);
  };

  const AddChatRoom = async () => {
    try {
      const newChatRef = doc(collection(db, "chatRooms"));

      await setDoc(newChatRef, {
        id: newChatRef.id,
        chatRoomName,
        timestamp: serverTimestamp(),
        hostUserId: uid,
        hostUserEmail: email,
        users: [],
      });

      setChatRoomName("");
      closePrompt();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>채널 만들기</Title>
          <Img src={X__ICONS} alt="xIcons" onClick={closePrompt} />
        </Header>

        <Center>
          <TypeText>채널 유형</TypeText>
          <TypeBox>
            <TypeContent>
              <Strong>#</Strong>
              <Box>
                <Text>Text</Text>
                <SubText>
                  메시지,이미지,GIF,이모지,의견,농담을 전송하세요
                </SubText>
              </Box>
            </TypeContent>
            <Circle></Circle>
          </TypeBox>
        </Center>

        <Bottom>
          <TypeText>채널 이름</TypeText>
          <ChannelInput
            type="text"
            value={chatRoomName}
            onChange={onChange}
            placeholder="# 새로운 채널"
          />
        </Bottom>
      </Wrapper>

      <Footer>
        <CloseBtn onClick={closePrompt}>취소</CloseBtn>
        <Button onClick={AddChatRoom}>채널 만들기</Button>
      </Footer>
    </Container>
  );
}
