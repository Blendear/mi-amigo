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
  return (
    fetch("/api/items-manager/get-item", {
      method: "GET",
    })
      //hook2 - catch errors - should impement it, or is the code safe?
      .then((response) => response.json())
      .then((data) => {
        data.status === 200
          ? setLoadingState("finished")
          : toast.error(`Error occured`, toastProps);
        return data;
      })
  );
};

export default getAllDocumentsFromColl;
