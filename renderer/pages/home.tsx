import React from "react";
import Head from "next/head";
import Login from "./login";
import { Button, Container, Title } from "../styles/home";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export default function Home() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  console.log(user);

  if (!user) return <Login />;

  return (
    <Container priority={true}>
      <Head>
        <Title>Home page</Title>
      </Head>

      <h1>목업 준비</h1>
      <Button onClick={signOut}>로그아웃</Button>
    </Container>
  );
}
