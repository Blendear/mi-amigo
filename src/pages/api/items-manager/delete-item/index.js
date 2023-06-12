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
  //           _._._. PUT =
  if (req.method === "PUT") {
    res.status(200).json({ testMessage: "Success, response is allright!" });
  } else {
    res.status(400).json({ testMessage: "Request was wrong" });
  }
};

export default handler;

//~~ _.  API Route for CRUD operations on user's items
//
//       _._. Handle request from the user - based on the type (GET, POST etc.)
//
//           _._._. PUT =
//
//       _._. Declare the shape of the response from the server
//
//           _._._. AAA
//
