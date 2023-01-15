import Head from "next/head";
import Login from "./login";
import Sidebar from "../components/Sidebar/Sidebar";
import { ChatBox, Container } from "../styles/home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <Container priority={true}>
      <Head>
        <title>Home page</title>
      </Head>

      {!user && <Login />}
      <ChatBox>
        <Sidebar />
      </ChatBox>
    </Container>
  );
}
