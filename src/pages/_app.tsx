//
//  Dodatkowo dodałem linijki pod:
//
//  0.  Startowy Next.js component
//
//  1.  "Next-Auth", a dokładniej żeby "Session" sexownie było dostępne w całej apce
//
//  2.  "Redux"
//
//  3.  "Layout" - pod zawartośc stronki, ktora ma być na KAŻDEJ page. Np. nawigacja górnja i footer dolny z informacjami/kontaktem etc.
//
import "src/styles/sass/globals.scss";

import type { AppProps } from "next/app";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import store from "../store/redux/store-redux";
import { Provider } from "react-redux";

import Layout from "../components/0-layout-i-wrappers/layout/layout";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    //
    //  2.  "Redux"
    //
    <Provider store={store}>
      {/* 
          1.  "Next-Auth", a dokładniej żeby "Session" sexownie było dostępne w całej apce
      */}
      <SessionProvider session={pageProps.session}>
        {/* 
        3.  "Layout" - pod zawartośc stronki, ktora ma być na KAŻDEJ page. Np. nawigacja górnja i footer dolny z informacjami/kontaktem etc.
        */}

        <Layout>
          {/* 
            0.  Startowy Next.js component
          */}
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
