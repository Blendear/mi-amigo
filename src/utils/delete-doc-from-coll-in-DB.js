// Util functions should be pure funciton - same input gives you the same output
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProps = {
  theme: "colored",
  hideProgressBar: true,
  closeOnClick: true,
  autoClose: 1500,
};

const handleDeleteDocFromCollInDB = async (collPathString, docID) => {
  //                  _._._._. Get reference the document we want to update - by passing : databaseReference, collectionName, documentName
  try {
    const reqBody = {
      collPathString: collPathString,
      docID: docID,
    };
    const response = await fetch("/api/items-manager/delete-item", {
      method: "DELETE",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.status !== 200) {
      throw data;
    } else {
      toast.success(data.message, toastProps);
    }
  } catch (err) {
    console.error(err);
    toast.error(`${err.name} | ${err.message}`, toastProps);
  }
};

export default handleDeleteDocFromCollInDB;
