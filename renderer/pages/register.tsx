import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import img from "../public/images/star.jpg";
import {
  AuthBox,
  Box,
  Button,
  Container,
  Form,
  GridBox,
  Input,
  Label,
  Title,
} from "../styles/register";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e: any) => {
    e.preventDefault();

    console.log("회원가입완료");
    router.push("/login");
  };

  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>
      <Image src={img} alt="back" objectFit="cover" layout="fill" priority />
      <Form onSubmit={handleRegister}>
        <Title>계정 만들기</Title>
        <AuthBox>
          <GridBox>
            <Label>이메일</Label>
            <Input type="text" />
          </GridBox>
          <GridBox>
            <Label>사용자명</Label>
            <Input type="text" />
          </GridBox>
          <GridBox>
            <Label>비밀번호</Label>
            <Input type="password" />
          </GridBox>
          <GridBox>
            <Label>비밀번호 확인</Label>
            <Input type="password" />
          </GridBox>
        </AuthBox>
        <Box>
          <Button type="submit">회원가입</Button>
          <Button>
            <Link href="/login">뒤로가기</Link>
          </Button>
        </Box>
      </Form>
    </Container>
  );
}
