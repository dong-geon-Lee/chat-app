import { useRecoilState } from "recoil";
import { promptOverlayState, promptState } from "../../recoils/promptState";
import { Container } from "./styles";

export default function PromptOverlay() {
  const [, setPrompt] = useRecoilState(promptState);
  const [, setPromptOverlay] = useRecoilState(promptOverlayState);

  const closePrompt = () => {
    setPrompt(false);
    setPromptOverlay(false);
  };

  return <Container onClick={closePrompt}></Container>;
}
