// Util functions should be pure funciton - same input gives you the same output
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProps = {
  theme: "colored",
  hideProgressBar: true,
  closeOnClick: true,
  autoClose: 1500,
};

const getAllDocumentsFromColl = async (setLoadingState) => {
  try {
    const response = await fetch("/api/items-manager/get-item", {
      method: "GET",
    });

    const data = await response.json();
    if (data.status !== 200) {
      throw data;
    } else {
      setLoadingState("finished");
      return data;
    }
  } catch (err) {
    console.error(err);
    toast.error(`${err.name} | ${err.message}`, toastProps);
  }
};

export default getAllDocumentsFromColl;
