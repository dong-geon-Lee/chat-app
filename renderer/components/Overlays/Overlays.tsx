import { useRecoilState } from "recoil";
import { modalState } from "../../recoils/modalState";
import { Container } from "./styles";

export default function Overlays() {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(modalState);

  const closeModals = () => {
    setModals(false);
    setOverlays(false);
  };

  return <Container onClick={closeModals}></Container>;
}
