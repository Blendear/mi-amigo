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
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }: any) {
  // AppProps<{
  //   session: Session;
  // }> //hook2 - I set this to "any" for now, because i dont know how to type it properly yet
  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/*//       _._. "Auth0" - or actually code for making it available easily through the whole app*/}

      <UserProvider>
        {/*//       _._. "Next-Auth" - or actually code for making the "Session" available easily through the whole app*/}
        {/* <SessionProvider session={pageProps.session}> */}
        {/*//       _._. "Layout" - components visible on every single page (footer, navbar etc.)*/}
        <Layout>
          {/*//       _._. The body of the currently active page of the app.*/}
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
      {/* </SessionProvider> */}
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
//       _._. "Auth0" - or actually code for making it available easily through the whole app
//
//       _._. "Next-Auth" - or actually code for making the "Session" available easily through the whole app
//
//       _._. "Redux"
//
//       _._. "Layout" - components visible on every single page (footer, navbar etc.)
//
//       _._. Allows rendering of toasts in the whole app
//
