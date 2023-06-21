// Util functions should be pure funciton - same input gives you the same output

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
    .then((data) => console.log("DELETE response:", data));
  //hook2 - how to send this response data to the future toast - through save and get in redux?
};

export default handleDeleteDocFromCollInDB;
