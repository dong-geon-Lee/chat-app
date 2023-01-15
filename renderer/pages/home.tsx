import Login from "./login";
import Sidebar from "../components/Sidebar/Sidebar";
import Image from "next/image";
import img from "../public/images/listen.jpg";
import Prompt from "../components/Prompt/Prompt";
import PromptOverlay from "../components/PromptOverlay/PromptOverlay";
import { ChatBox, Container } from "../styles/home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRecoilValue } from "recoil";
import { promptState } from "../recoils/promptState";

export default function Home() {
  const [user] = useAuthState(auth);
  const prompt = useRecoilValue(promptState);

  return (
    <Container priority={true}>
      {!user && <Login />}
      {prompt && (
        <>
          <Prompt />
          <PromptOverlay />
        </>
      )}

      <ChatBox>
        <Sidebar />
        <Image src={img} />
      </ChatBox>
    </Container>
  );
}
