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
  const reqBody = {
    collPathString: collPathString,
    docID: docID,
  };

  fetch("/api/items-manager/delete-item", {
    method: "DELETE",
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    //hook2 - catch errors - should impement it, or is the code safe?
    .then((response) => response.json())
    .then((data) =>
      data.status === 200
        ? toast.success(`Deleted ${docID} successfully!`, toastProps)
        : toast.error(`Error occured`, toastProps)
    );
  //hook2 - how to send this response data to the future toast - through save and get in redux?
};

export default handleDeleteDocFromCollInDB;
