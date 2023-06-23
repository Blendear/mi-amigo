// Util functions should be pure funciton - same input gives you the same output
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProps = {
  theme: "colored",
  hideProgressBar: true,
  closeOnClick: true,
  autoClose: 1500,
};
const handleAddDocToCollInDB = async (collPathString, docID, newDocData) => {
  const reqBody = {
    collPathString: collPathString,
    docID: docID,
    newDocData: newDocData,
  };
  fetch("/api/items-manager/add-item", {
    method: "POST",
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    //hook2 - catch errors - should impement it, or is the code safe?
    .then((response) => response.json())
    .then(
      (data) =>
        // console.log("response:", data.status)
        data.status === 400
          ? toast.error(`${docID} already exists!`, toastProps)
          : toast.success(`Added ${docID} successfully!`, toastProps)
      //
    );
  //hook2 - how to send this response data to the future toast - through save and get in redux?
};

export default handleAddDocToCollInDB;
