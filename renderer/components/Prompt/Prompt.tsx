import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../config/firebase";
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

  const closePrompt = () => {
    setPrompt(false);
    setPromptOverlay(false);
  };

  const onChange = (e: any) => {
    setChatRoomName(e.target.value);
  };

  const AddChatRoom = async () => {
    try {
      await addDoc(collection(db, "chatRooms"), {
        chatRoomName,
      });

      setChatRoomName("");
      closePrompt();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>채널 만들기</Title>
          <Img
            src="https://user-images.githubusercontent.com/69576865/212525600-d0c566fe-3910-4bda-9c3a-c31b6b886f1b.svg"
            alt="xIcons"
            onClick={closePrompt}
          />
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
