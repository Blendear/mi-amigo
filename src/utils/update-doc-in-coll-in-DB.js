// Util functions should be pure funciton - same input gives you the same output
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "src/styles/sass/styles-all.module.scss";

const toastProps = {
  theme: "colored",
  hideProgressBar: true,
  closeOnClick: true,
  autoClose: 1500,
  className: styles["toast"],
  // style: { color: "white" },
};

const handleUpdateDocInCollInDB = async (collPathString, docID, newDocData) => {
  //                  _._._._. Get reference the document we want to update - by passing : databaseReference, collectionName, documentName
  const reqBody = {
    collPathString: collPathString,
    docID: docID,
    newDocData: newDocData,
  };

  try {
    const response = await fetch("/api/items-manager/edit-item", {
      method: "PUT",
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

export default handleUpdateDocInCollInDB;
