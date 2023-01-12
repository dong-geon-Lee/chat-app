import {
  AuthBox,
  Box,
  Button,
  Container,
  Form,
  GridBox,
  Input,
  Label,
  Span,
  Title,
} from "./styles";
import Image from "next/image";
import img from "../../public/images/star.jpg";
import Link from "next/link";

export default function Login() {
  return (
    <Container>
      <Image src={img} alt="back" objectFit="cover" layout="fill" priority />

      <Form>
        <Title>돌아오신 것을 환영해요!</Title>
        <AuthBox>
          <GridBox>
            <Label>이메일</Label>
            <Input type="text" />
          </GridBox>
          <GridBox>
            <Label>비밀번호</Label>
            <Input type="password" />
          </GridBox>
        </AuthBox>
        <Box>
          <Button>로그인</Button>
          <Span>계정이 필요한가요?</Span>
          <Link href="/register">가입하기</Link>
        </Box>
      </Form>
    </Container>
  );
}
