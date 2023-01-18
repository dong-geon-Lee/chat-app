import Head from "next/head";
import { useRouter } from "next/router";
import { formattedPath } from "../../helpers/utils";
import { Main } from "./styles";

export default function Layout({ children }) {
  const router = useRouter();
  const pathName = formattedPath(router);

  return (
    <>
      <Head>
        <title>{pathName} page</title>
      </Head>
      <Main>{children}</Main>
    </>
  );
}
