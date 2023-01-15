import Head from "next/head";
import { useRouter } from "next/router";
import { Main } from "./styles";

export default function Layout({ children }) {
  const router = useRouter();
  const pathString = router.pathname.split("/")[1];
  const pathName = pathString.slice(0, 1).toUpperCase() + pathString.slice(1);

  return (
    <>
      <Head>
        <title>{pathName} page</title>
      </Head>
      <Main>{children}</Main>
    </>
  );
}
