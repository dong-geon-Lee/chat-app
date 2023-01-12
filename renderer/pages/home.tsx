import React, { useState } from "react";
import Head from "next/head";
import Login from "./login";
import { Container } from "../styles/home";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>
      <Login />
      <h1>Home</h1>
    </Container>
  );
}
