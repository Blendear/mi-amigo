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
  try {
    const reqBody = {
      collPathString: collPathString,
      docID: docID,
      newDocData: newDocData,
    };
    const response = await fetch("/api/items-manager/add-item", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //hook2 - too much repeating code for error handlers inside "utils" files - find a way to make the error handling from every api-requesting function (4+) into an importable component.
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

export default handleAddDocToCollInDB;
