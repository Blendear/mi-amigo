import { db } from "../../../../features/authentication/lib/init-firebase";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const handler = async (req, res) => {
  //           _._._. GET =
  if (req.method === "GET") {
    const collectionReference = collection(
      db,
      "shopping-assistant/test-user/items"
    );
    let dataFromDB = [];
    const getAllDocumentsFromASpecificCollection = async () => {
      const allDocuments = await getDocs(collectionReference);
      //                  _._._._. Change the structure of the data (to "only sexy, readable data format & id of the document - aka documents name") - using build in firestore function "docs" property.   &   save it (set useState)
      dataFromDB = allDocuments.docs.map((document) => ({
        ...document.data(),
      }));

      res.status(200).json({
        data: dataFromDB,
        coll: "shopping-assistant/test-user/items",
        testMessage: "Success, response is allright!",
      });
    };

    getAllDocumentsFromASpecificCollection();
  } else {
    res.status(400).json({
      type: "incorrect-type-of-request",
      title: "Incorrect type of request",
      status: 400,
      message:
        "The request should be a GET request. The user's request was of a different type.",
      instance: "/item-manager/get-item",
    });
  }
};

export default handler;

//~~ _.  API Route for CRUD operations on user's items
//
//       _._. Handle request from the user - based on the type (GET, POST etc.)
//
//           _._._. GET =
//
//       _._. Declare the shape of the response from the server
//
//           _._._. AAA
//
