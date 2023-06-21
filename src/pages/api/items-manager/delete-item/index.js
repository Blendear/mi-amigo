import { db } from "../../../../features/authentication/lib/init-firebase";
import { doc, deleteDoc } from "firebase/firestore";

const handler = async (req, res) => {
  //           _._._. DELETE =
  if (req.method === "DELETE") {
    //hook2 - why dont we just add the ref directly (or is it impossible outside an api, to keep the safety?), insetad of "packing" it into a a reqBody and "opening" it right here
    const collPathString = req.body.collPathString;
    const docID = req.body.docID;
    const docSnap = doc(db, collPathString, docID);

    if (docSnap) {
      await deleteDoc(docSnap);
      res.status(200).json({
        message: `Item with id : ${docID} was succesfully deleted!`,
      });
      //hook2 - create a dedicated file for responses data. code wil be cleaner, and some do repeat themselves
    } else {
      res.status(404).json({
        type: "item-doesnt-exist",
        title:
          "The updated item doesn't exist! There must a error with our database!",
        status: 404,
        message:
          "Please contact the developer. If you clicked an item to edit, then the item should crearly exist and the problem is on our side.",
        instance: "/item-manager/delete-item",
      });
    }
  } else {
    res.status(400).json({
      type: "incorrect-type-of-request",
      title: "Incorrect type of request",
      status: 400,
      message:
        "The request should be a DELETE request. The user's request was of a different type.",
      instance: "/item-manager/delete-item",
    });
  }
};

export default handler;

//~~ _.  API Route for CRUD operations on user's items
//
//       _._. Handle request from the user - based on the type (GET, POST etc.)
//
//           _._._. DELETE =
//
//       _._. Declare the shape of the response from the server
//
//           _._._. AAA
//
