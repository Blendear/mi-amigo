import { db } from "../../../../features/authentication/lib/init-firebase";
import {
  getDoc,
  doc, // gets a reference to a chosen document
  setDoc,
} from "firebase/firestore";

const handler = async (req, res) => {
  //           _._._. POST = Check if items already exists in the DB - if it does, tell it to the user and dont create the item || if it doesnt exist, create it in the DB
  if (req.method === "POST") {
    const collPathString = req.body.collPathString;
    const docID = req.body.docID;
    const newDocData = req.body.newDocData;
    const docSnap = await getDoc(doc(db, collPathString, docID));

    if (docSnap.exists()) {
      res.status(400).json({
        message: `That item "${docID}" already exists! Change the name or edit the existing item c:`,
        reqData: { collPathString, docID, newDocData },
      });
    } else {
      await setDoc(
        doc(db, "shopping-assistant/test-user/items", docID),
        newDocData
      );
      res.status(200).json({
        itemData: newDocData,
        message: `Item with id : ${docID} was succesfully created!`,
      });
    }
    // console.log(collPathString, docID, newDocData);
  } else {
    res.status(400).json({
      type: "incorrect-type-of-request",
      title: "Incorrect type of request",
      status: 400,
      message:
        "The request should be a POST request. The user's request was of a different type.",
      instance: "/item-manager/add-item",
    });
  }
};

export default handler;

//~~ _.  API Route for CRUD operations on user's items
//
//       _._. Handle request from the user - based on the type (GET, POST etc.)
//
//           _._._. POST = Check if items already exists in the DB - if it does, tell it to the user and dont create the item || if it doesnt exist, create it in the DB
//
