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
  Text,
} from "../styles/login";
import Image from "next/image";
import img from "../public/images/star.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInput;
  const [signInWithEmailAndPassword, loading]: any =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    setTimeout(() => {
      router.push("/home");
    }, 1500);
  };

  const onChange = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Head>
        <Title>Home page</Title>
      </Head>

      <Image src={img} alt="back" objectFit="cover" layout="fill" priority />
      <Form onSubmit={handleSignIn}>
        <Text>돌아오신 것을 환영해요!</Text>

        <AuthBox>
          <GridBox>
            <Label>이메일</Label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="이메일을 입력하세요"
            />
          </GridBox>
          <GridBox>
            <Label>비밀번호</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호 입력하세요"
            />
          </GridBox>
        </AuthBox>
        <Box>
          <Button type="submit">로그인</Button>
          <Span>계정이 필요한가요?</Span>
          <Link href="/register">가입하기</Link>
        </Box>
      </Form>
    </Container>
  );
}
