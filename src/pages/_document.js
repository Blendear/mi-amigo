//
//~~ _.  A - hook1 how to call tjis file. its simply a "index.html" clone for next.js
//
//       _._. "On top of pages content" code, like Modals, Backdrops, Tooltips etc.
//

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* 
        //       _._. "On top of pages content" code, like Modals, Backdrops, Tooltips etc.
        */}
        <div id="modal"></div>
        <div id="backdrop"></div>
        <div id="tooltip"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
