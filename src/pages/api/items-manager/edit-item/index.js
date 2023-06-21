import { db } from "../../../../features/authentication/lib/init-firebase";
import { getDoc, updateDoc, doc } from "firebase/firestore";

const handler = async (req, res) => {
  //           _._._. PUT = If item exists, update it
  if (req.method === "PUT") {
    const collPathString = req.body.collPathString;
    const docID = req.body.docID;
    const newDocData = req.body.newDocData;
    const docSnap = doc(db, collPathString, docID);

    if (docSnap) {
      await updateDoc(docSnap, newDocData);
      res.status(200).json({
        itemData: newDocData,
        message: `Item with id : ${docID} was succesfully updated!`,
      });
    } else {
      res.status(404).json({
        type: "item-doesnt-exist",
        title:
          "The updated item doesn't exist! There must a error with our database!",
        status: 404,
        message:
          "Please contact the developer. If you clicked an item to edit, then the item should crearly exist and the problem is on our side.",
        instance: "/item-manager/edit-item",
      });
    }
  } else {
    res.status(400).json({
      type: "incorrect-type-of-request",
      title: "Incorrect type of request",
      status: 400,
      message:
        "The request should be a PUT request. The user's request was of a different type.",
      instance: "/item-manager/edit-item",
    });
  }
};

export default handler;

//~~ _.  API Route for CRUD operations on user's items
//
//       _._. Handle request from the user - based on the type (GET, POST etc.)
//
//           _._._. PUT = If item exists, update it
//
