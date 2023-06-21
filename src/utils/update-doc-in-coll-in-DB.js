// Util functions should be pure funciton - same input gives you the same output

const handleUpdateDocInCollInDB = async (collPathString, docID, newDocData) => {
  //                  _._._._. Get reference the document we want to update - by passing : databaseReference, collectionName, documentName
  const reqBody = {
    collPathString: collPathString,
    docID: docID,
    newDocData: newDocData,
  };

  fetch("/api/items-manager/edit-item", {
    method: "PUT",
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    //hook2 - catch errors - should impement it, or is the code safe?
    .then((response) => response.json())
    .then((data) => console.log("PUT response:", data));
  //hook2 - how to send this response data to the future toast - through save and get in redux?
};

export default handleUpdateDocInCollInDB;
