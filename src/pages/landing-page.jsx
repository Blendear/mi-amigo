//
//~~ _.  A
//
//       _._. AA
//
//           _._._. AAA
//
//~~ _. Add Firebase / Firestore DataBase connection (for talking with your database, for example for CRUD operations)
//
//       _._. Connect to Firestore DB ("db" is our custom name - we gave it inside "init-firebase.ts") - for making CRUD operation on our database   &   import neede funtions to operate on colections, documents etc.
//
//       _._. Connect with a specific Collection of name "___" (for example "zakupki-i-zapasy") - to operate on this collection
//
//       _._. Get all Documents from chosen Collection   &   save their data
//
//           _._._. Get all Documents asynchronously and on every page load (useEffetc with empty dependencies array) from our specified Colleciton ("zakupki-i-zapasy")
//
//           _._._. Change the structure of the data (to "only sexy, readable data format & id of the document - aka documents name") - using build in firestore function "docs" property.   &   save it (set useState)
//
//           _._._. Render the data from Documents (example below)
//

import styles from "src/styles/sass/styles-all.module.scss";
import { useState, useEffect } from "react";
//
//       _._. Connect to Firestore DB ("db" is our custom name - we gave it inside "init-firebase.ts") - for making CRUD operation on our database   &   import neede funtions to operate on colections, documents etc.
//
import { db } from "../features/authentication/lib/init-firebase";
import { collection, getDocs } from "firebase/firestore";

const LandingPage = () => {
  //
  //       _._. Get all Documents from chosen Collection   &   save their data
  //
  const [dataFromDB, setDataFromDB] = useState([]);
  //
  //           _._._. Get all Documents asynchronously and on every page load (useEffetc with empty dependencies array) from our specified Colleciton ("zakupki-i-zapasy")
  //
  const collectionReference = collection(db, "zakupki-i-zapasy");

  useEffect(() => {
    console.log("useEffect started");
    //hook1 - refacotr this into 3rd party component \/ it makes a lot of code in this index.ts file
    const getAllDocumentsFromASpecificCollection = async () => {
      const allDocuments = await getDocs(collectionReference);
      console.log("our data : ", allDocuments);
      //
      //           _._._. Change the structure of the data (to "only sexy, readable data format & id of the document - aka documents name") - using build in firestore function "docs" property.   &   save it (set useState)
      //
      setDataFromDB(
        allDocuments.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }))
      );
    };

    getAllDocumentsFromASpecificCollection();
  }, []);

  return (
    <div>
      <div>landing page</div>
      {/* 
      //           _._._. Render the data from Documents (example below)
      */}
      <div>
        {dataFromDB.map((document, index) => {
          return (
            <div key={index}>
              <div>______________</div>
              <div>ID Dokumentu : {document.id}</div>
              <div>
                Przykładowa pozycja danych z dokumentu : {document.żarełko}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LandingPage;
