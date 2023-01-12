import type { AppProps } from "next/app";
import Login from "../components/Login/Login";
import GlobalStyle from "../styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
}
