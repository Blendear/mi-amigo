// useful, ładnie skomentowany documentation example - https://github.com/nextauthjs/next-auth-typescript-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts
//
//  1.   Opcje autoryzacji - skonfigurujmy
//
//      1.0. Importujmy każdego potrzebnego
//
//      1.1. Providers'ów wypiszmy (to, przez co będziemy się autoryzować - Google, Credentails aka wlasne DB et.c)
//
//           1.1.a. Google
//
//           1.1.a. Facebook
//
//           1.1.c. Credentials - czyli do własnego DB - NIE WARTO przeważnie. 3rd party lepsze
//

import NextAuth, { NextAuthOptions } from "next-auth";

//
//      1.0. Importujmy każdego potrzebnego
//
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import CredentialsProvider from "next-auth/providers/credentials";

//
//  1.   Opcje autoryzacji - skonfigurujmy
//
const authOptions: NextAuthOptions = {
  //
  // hook1 - to "session" \/ potrzebne do czegoś, gdy 3rd party używamy?
  //
  //   session: {
  //     strategy: "jwt",
  //   },
  //
  //      1.1. Providers'ów wypiszmy (to, przez co będziemy się autoryzować - Google, Credentails aka wlasne DB et.c)
  //
  providers: [
    //
    //           1.1.a. Google
    // hook1 - PO CO TO \/. "sign in" nie robi całej roboty? Trzeba ten provider napisać?
    //
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    //
    //           1.1.b. Facebook
    //
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    //
    //           1.1.c. Credentials - czyli typowe np. email/haslo
    //

    // CredentialsProvider({
    //   type: "credentials",
    //   credentials: {},
    //   authorize(credentials, req) {
    //     const { email, password } = credentials as {
    //       email: string;
    //       password: string;
    //     };
    //
    // a) perform you login logic (connecting to my own db etc.) - // https://next-auth.js.org/configuration/databases
    //    * You must install an appropriate node_module for your database
    //    * The Email provider requires a database (OAuth providers do not)
    //    database: process.env.DATABASE_URL,   -   wpisz ten "DATABASE_URL" w ".env" file
    // b) find out user from db
    // c) if everything is fine, do X
    // d) if not, do Y
  ],
};

export default NextAuth(authOptions);
