import { Container, Image } from "./styles";

export default function Modals() {
  return (
    <Container>
      <div>
        <h1>친구를 이동건 그룹으로 초대하기</h1>
        <h1># 철학자들의 모임</h1>
      </div>
      <div>
        <Image
          src="https://user-images.githubusercontent.com/69576865/212329281-6180fd52-4cac-4f52-a3a7-6b66f395c340.svg"
          alt="avatar-logo"
        />
        <h1>이동수</h1>
        <div>초대...</div>
      </div>
    </Container>
  );
}
