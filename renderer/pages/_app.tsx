import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout/layout";
import GlobalStyle from "../styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
