import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
