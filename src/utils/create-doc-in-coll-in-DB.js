// Util functions should be pure funciton - same input gives you the same output

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
    .then((data) => console.log("response:", data));
  //hook2 - how to send this response data to the future toast - through save and get in redux?
};

export default handleAddDocToCollInDB;
