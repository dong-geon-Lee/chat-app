import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Spinner from "../components/Spinner/Spinner";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import {
  BACKGROUND__IMAGE,
  LOGIN__INPUT__ERROR,
  LOGIN__LITMIT__ERROR,
  LOGIN__PASSWORD__ERROR,
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
  Text,
  Title,
} from "../styles/register";

export default function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
    password2: "",
  });

  const { name, email, avatar, password, password2 } = userInput;
  const router = useRouter();

  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!email || !password || !password2) {
        alert(LOGIN__INPUT__ERROR);
        return;
      }

      if (password !== password2) {
        alert(LOGIN__PASSWORD__ERROR);
        return;
      }

      if (password.length < 6) {
        alert(LOGIN__LITMIT__ERROR);
        return;
      }

      const user = await createUserWithEmailAndPassword(email, password);
      await updateProfile({
        displayName: name,
        photoURL: avatar,
      });

      const id = user?.user?.uid;
      await addDoc(collection(db, "users"), {
        id,
        name,
        email,
        password,
        avatar,
      });

      setTimeout(() => {
        router.push("login");
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
      <Form onSubmit={handleRegister}>
        <Text>?????? ?????????</Text>
        <AuthBox>
          <GridBox>
            <Label>?????????</Label>
            <Input
              type="text"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="???????????? ???????????????"
            />
          </GridBox>
          <GridBox>
            <Label>????????????</Label>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="????????? ???????????????"
            />
          </GridBox>
          <GridBox>
            <Label>????????? URL</Label>
            <Input
              type="text"
              value={avatar}
              name="avatar"
              onChange={onChange}
              placeholder="????????? ????????? ???????????????"
            />
          </GridBox>
          <GridBox>
            <Label>????????????</Label>
            <Input
              type="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="??????????????? ???????????????"
            />
          </GridBox>
          <GridBox>
            <Label>???????????? ??????</Label>
            <Input
              type="password"
              value={password2}
              name="password2"
              onChange={onChange}
              placeholder="??????????????? ???????????????"
            />
          </GridBox>
        </AuthBox>
        <Box>
          <Button type="submit">????????????</Button>
          <Link href="/login" className="back__link">
            <Button type="button">????????????</Button>
          </Link>
        </Box>
      </Form>
    </Container>
  );
}
