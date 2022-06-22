import { Toaster } from "react-hot-toast";
import GlobalStyles from "../components/GlobalStyles";

import "../styles/fonts.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
