import Head from "next/head";
import Image from "next/image";
import img from "../public/images/star.jpg";
import Link from "next/link";
import Spinner from "../components/Spinner/Spinner";
import { useRouter } from "next/router";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
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

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInput;
  const [signInWithEmailAndPassword, loading]: any =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const [users] = useCollectionData(collection(db, "users"));

  const check = users?.find(
    (user) => user.email === email && user.password === password
  );

  const handleSignIn = (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      alert("이메일 또는 비밀번호를 입력하세요");
      return;
    }

    if (!check) {
      alert("계정이 존재하지 않거나 잘못된 정보를 입력하였습니다");
      return;
    }

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
    <Container priority={true}>
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
