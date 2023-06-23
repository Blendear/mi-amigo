//
// Table of content for this file is written at the bottom
//
import "src/styles/sass/globals.scss";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import { ToastContainer } from "react-toastify";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/*//       _._. "Next-Auth" - or actually code for making the "Session" available easily through the whole app*/}
      <SessionProvider session={pageProps.session}>
        {/*//       _._. "Layout" - components visible on every single page (footer, navbar etc.)*/}
        <Layout>
          {/*//       _._. The body of the currently active page of the app.*/}
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      {/* //       _._. Allows rendering of toasts in the whole app */}
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;

//
//~~ _.  Main file of the app
//
//       _._. The body of the currently active page of the app.
//
//       _._. "Next-Auth" - or actually code for making the "Session" available easily through the whole app
//
//       _._. "Redux"
//
//       _._. "Layout" - components visible on every single page (footer, navbar etc.)
//
//       _._. Allows rendering of toasts in the whole app
//
