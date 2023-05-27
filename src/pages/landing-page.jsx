//
//~~ _.  A
//
//       _._. AA
//
//           _._._. AAA
//
//~~ _. Use your connection with Firebase / Firestore DataBase for CRUD operations
//
//       _._. Connect to Firestore DB ("db" is our custom name - we gave it inside "init-firebase.ts") - for making CRUD operation on our database   &   import neede funtions to operate on colections, documents etc.
//
//       _._. Connect with a specific Collection of name "___" (for example "zakupki-i-zapasy") - to operate on this collection
//
//       _._. Get all Documents from chosen Collection   &   save their data
//
//           _._._. (CRUD - C) Create new Document to a Collection
//
//                  _._._._. Button - Activate "Create new Document" onClick
//
//           _._._. (CRUD - R) Get all Documents asynchronously and on every page load (useEffetc with empty dependencies array) from our specified Colleciton ("zakupki-i-zapasy")
//
//                  _._._._. Change the structure of the data (to "only sexy, readable data format & id of the document - aka documents name") - using build in firestore function "docs" property.   &   save it (set useState)
//
//                  _._._._. Render the data from Documents (example below)
//
//           _._._. (CRUD - U) Update new Document to a Collection - activated onClick (for example)
//
//                  _._._._. Get reference the document we want to update - by passing : databaseReference, collectionName, documentName
//
//                  _._._._. Create a variable for the updated data (for example a hardcoded string + a random number)
//
//                  _._._._. Get the build-in update function and add the updated data variable into it
//
//                  _._._._. Button with prop - Activate "Update new Document" onClick (I passed the document id as a prop, for the fun of it - can be added inside the function tho)
//
//           _._._. (CRUD - D) Delete a Document from a Collection - activated onClick (for example)
//
//                  _._._._. Get reference the document we want to delete - by passing : databaseReference, collectionName, documentName
//
//                  _._._._. Get the build-in delete function and pass the document reference into it
//
//                  _._._._. Button with prop - Activate "Delete t h a t Document" onClick (I passed the document id as a prop, for the fun of it - can be added inside the function tho)
//

import styles from "src/styles/sass/styles-all.module.scss";
import { useState, useEffect } from "react";
//
//       _._. Connect to Firestore DB ("db" is our custom name - we gave it inside "init-firebase.ts") - for making CRUD operation on our database   &   import neede funtions to operate on colections, documents etc.
//
import { db } from "../features/authentication/lib/init-firebase";
import {
  addDoc,
  collection, // gets a reference to a chosen collection
  getDocs,
  updateDoc,
  doc, // gets a reference to a chosen document
  deleteDoc,
} from "firebase/firestore";

const LandingPage = () => {
  //
  //       _._. Get all Documents from chosen Collection   &   save their data
  //
  const [dataFromDB, setDataFromDB] = useState([]);

  const collectionReference = collection(db, "zakupki-i-zapasy");

  //
  //           _._._. (CRUD - C) Create new Document to a Collection - activated onClick (for example)
  //
  const createDocumentInsideASpecificCollection = async () => {
    await addDoc(collectionReference, {
      giereczka: "overwatch",
      książeczka: "Archiwum Burzowego Światła",
    });
  };
  //
  //           _._._. (CRUD - R) Get all Documents asynchronously and on every page load (useEffetc with empty dependencies array) from our specified Colleciton ("zakupki-i-zapasy")
  //
  useEffect(() => {
    console.log("useEffect started");
    //hook1 - refacotr this into 3rd party component \/ it makes a lot of code in this index.ts file
    const getAllDocumentsFromASpecificCollection = async () => {
      const allDocuments = await getDocs(collectionReference);
      console.log("our data : ", allDocuments);
      //
      //                  _._._._. Change the structure of the data (to "only sexy, readable data format & id of the document - aka documents name") - using build in firestore function "docs" property.   &   save it (set useState)
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
  //
  //           _._._. (CRUD - U) Update new Document to a Collection - activated onClick (for example)
  //
  const updateASpecificDocumentInsideASpecificCollection = async (
    documentID
  ) => {
    //
    //                  _._._._. Get reference the document we want to update - by passing : databaseReference, collectionName, documentName
    //
    const exampleDocumentReference = doc(
      db, //which database
      "zakupki-i-zapasy", // which collection - trap1 - dont add "collecitonReference" here, because its not a string. and "doc()" acceptcs only strings. you could create dedicated state for storing those strings tho
      documentID // which document
    );
    //
    //                  _._._._. Create a variable for the updated data (for example a hardcoded string + a random number)
    //
    const newUpdatedData = "update'owane żarełko - update nr".concat(
      (Math.random() * 100).toFixed(1)
    );
    //
    //                  _._._._. Get the build-in update function and add the updated data variable into it
    //
    await updateDoc(exampleDocumentReference, {
      żarełko: newUpdatedData,
    });
  };
  //
  //           _._._. (CRUD - D) Delete a Document from a Collection - activated onClick (for example)
  //
  const deleteASpecificDocumentInsideASpecificCollection = async (
    documentID
  ) => {
    //
    //                  _._._._. Get reference the document we want to delete - by passing : databaseReference, collectionName, documentName
    //
    const exampleDocumentReference = doc(
      db, //which database
      "zakupki-i-zapasy", // which collection - trap1 - dont add "collecitonReference" here, because its not a string. and "doc()" acceptcs only strings. you could create dedicated state for storing those strings tho
      documentID // which document
    );
    //
    //                  _._._._. Get the build-in delete function and pass the document reference into it
    //
    await deleteDoc(exampleDocumentReference);
  };

  return (
    <div>
      <div>landing page</div>
      {/* 
      //                  _._._._. Render the data from Documents (example below)
      */}
      <div>
        {dataFromDB.map((document, index) => {
          return (
            <div key={index}>
              <div>______________</div>
              <div>
                {`ID Dokumentu : `}
                {`( ${document.id} )`}
              </div>
              <div>
                {`Property "żarełko" Dokumentu : `}
                {`[ ${document.żarełko} ]`}
              </div>
            </div>
          );
        })}
      </div>
      {/* 
      //                  _._._._. Button - Activate "Create new Document" onClick
      */}
      <div>
        <button onClick={createDocumentInsideASpecificCollection}>
          CREATE Dokument Placeholderowy w DB
        </button>
      </div>
      {/* 
      //                  _._._._. Button with prop - Activate "Update new Document" onClick (I passed the document id as a prop, for the fun of it - can be added inside the function tho)
      */}
      <div>
        <button
          onClick={() => {
            updateASpecificDocumentInsideASpecificCollection("tobi-i-zuza");
          }}
        >
          {`UPDATE konkretny Dokument w DB (np. doc o ID "tobi-i-zuza", wartość jego property "żarełko")`}
        </button>
      </div>
      {/* 
      ///                  _._._._. Button with prop - Activate "Delete t h a t Document" onClick (I passed the document id as a prop, for the fun of it - can be added inside the function tho)

      */}
      <div>
        <button
          onClick={() => {
            deleteASpecificDocumentInsideASpecificCollection(
              "id dokumentu do usuniecia"
            );
          }}
        >
          {`DELETE konkretny Dokument w DB (np. musialbys wpisac id do usuniecia, wiec prze tmy nie bedzie dzialac)`}
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
