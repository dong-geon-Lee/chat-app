import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Spinner from "../components/Spinner/Spinner";
import { useRouter } from "next/router";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { checkAuthUser } from "../helpers/utils";
import {
  BACKGROUND__IMAGE,
  LOGIN__CHECK__ERROR,
  LOGIN__INPUT__ERROR,
} from "../constants/constants";
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
  const router = useRouter();

  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  const [users] = useCollectionData(collection(db, "users"));
  const checkLogin = checkAuthUser(users, email, password);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        alert(LOGIN__INPUT__ERROR);
        return;
      }

      if (!checkLogin) {
        alert(LOGIN__CHECK__ERROR);
        return;
      }

      signInWithEmailAndPassword(email, password);

      setTimeout(() => {
        router.push("/home");
      }, 1500);
    } catch (error) {
      throw error;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  if (loading) return <Spinner />;

  return (
    <Container>
      <Head>
        <Title>Home page</Title>
      </Head>

      <Image
        src={BACKGROUND__IMAGE}
        alt="back"
        objectFit="cover"
        layout="fill"
        priority
      />
      <Form onSubmit={handleSignIn}>
        <Text>???????????? ?????? ????????????!</Text>
        <AuthBox>
          <GridBox>
            <Label>?????????</Label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="???????????? ???????????????"
            />
          </GridBox>
          <GridBox>
            <Label>????????????</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="???????????? ???????????????"
            />
          </GridBox>
        </AuthBox>
        <Box>
          <Button type="submit">?????????</Button>
          <Span>????????? ????????????????</Span>
          <Link href="/register">????????????</Link>
        </Box>
      </Form>
    </Container>
  );
}
