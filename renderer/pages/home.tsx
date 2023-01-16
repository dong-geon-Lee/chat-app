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
import { modalState } from "../recoils/modalState";
import Modals from "../components/Modals/Modals";
import Overlays from "../components/Overlays/Overlays";

export default function Home() {
  const [user] = useAuthState(auth);
  const prompt = useRecoilValue(promptState);
  const modals = useRecoilValue(modalState);

  return (
    <Container>
      {!user && <Login />}

      {modals && (
        <>
          <Modals />
          <Overlays />
        </>
      )}

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
