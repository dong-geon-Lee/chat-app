import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Spinner from "../components/Spinner/Spinner";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import {
  AuthBox,
  Box,
  Button,
  Container,
  Form,
  GridBox,
  Input,
  Label,
  Text,
  Title,
} from "../styles/register";
import { addDoc, collection } from "firebase/firestore";

export default function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = userInput;
  const [createUserWithEmailAndPassword, loading]: any =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      if (!email || !password || !password2) {
        alert("이메일 또는 비밀번호를 입력해주세요");
        return;
      }

      if (password !== password2) {
        alert("비밀번호가 다릅니다!");
        return;
      }

      await addDoc(collection(db, "users"), {
        displayName: name,
        email,
        password,
      });

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });

      setTimeout(() => {
        router.push("login");
      }, 1500);
    } catch (error) {
      console.error(error);
    }
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

      <Image
        src={
          "https://user-images.githubusercontent.com/69576865/212247453-68a59c52-4349-4964-a993-636b66724fb0.jpg"
        }
        alt="back"
        objectFit="cover"
        layout="fill"
        priority={true}
      />
      <Form onSubmit={handleRegister}>
        <Text>계정 만들기</Text>
        <AuthBox>
          <GridBox>
            <Label>이메일</Label>
            <Input
              type="text"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="이메일을 입력하세요"
            />
          </GridBox>
          <GridBox>
            <Label>사용자명</Label>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="이름을 적어주세요"
            />
          </GridBox>
          <GridBox>
            <Label>비밀번호</Label>
            <Input
              type="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="비밀번호를 입력하세요"
            />
          </GridBox>
          <GridBox>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              value={password2}
              name="password2"
              onChange={onChange}
              placeholder="비밀번호를 입력하세요"
            />
          </GridBox>
        </AuthBox>
        <Box>
          <Button type="submit">회원가입</Button>

          <Link href="/login" className="back__link">
            <Button type="button">뒤로가기</Button>
          </Link>
        </Box>
      </Form>
    </Container>
  );
}
