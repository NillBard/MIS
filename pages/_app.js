import Layout from "../Component/Layout";
import "../styles/index.css";
import { useRouter } from "next/router";
import s from "../styles/authoriztion.module.css";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Wrapper from "../Component/Wrapper";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const checkPath = router.pathname;

  return (
    <>
      <Provider store={store}>
        <Wrapper>
          {checkPath.includes("Login") ||
          checkPath.includes("/Registration") ? (
            <div className={s.auth_layout}>
              <Component {...pageProps} />
            </div>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </Wrapper>
      </Provider>
    </>
  );
}
