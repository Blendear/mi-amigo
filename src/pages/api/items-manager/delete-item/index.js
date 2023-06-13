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
  //           _._._. DELETE =
  if (req.method === "DELETE") {
    res.status(200).json({ testMessage: "Success, response is allright!" });
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
