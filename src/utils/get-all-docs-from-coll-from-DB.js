// Util functions should be pure funciton - same input gives you the same output

const getAllDocumentsFromColl = async () => {
  return (
    fetch("/api/items-manager/get-item", {
      method: "GET",
    })
      //hook2 - catch errors - should impement it, or is the code safe?
      .then((response) => response.json())
      .then((data) => {
        //   // return data;
        // console.log("GET response data:", data);
        return data;
      })
  );
  // .then((data) => console.log("response:", data));
};

export default getAllDocumentsFromColl;
