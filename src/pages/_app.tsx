import { AuthProvider } from "../contexts/AuthContext";
import { GlobalStyle } from "../styles/globalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default MyApp;
