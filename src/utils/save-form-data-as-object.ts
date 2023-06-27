// Util functions should be pure funciton - same input gives you the same output

const handleSaveFormDataAsObject = (e) => {
  console.log("form html element :", e.amountCurrent);
  let formData = new FormData();

  const colorOfCurrentAmount =
    e.amountCurrent.value > e.amountMaxExpected.value * 0.66
      ? "bg-color--success"
      : e.amountCurrent.value > e.amountMaxExpected.value * 0.15
      ? "bg-color--warning"
      : "bg-color--danger";

  formData.append(e.imageURL.name, e.imageURL.value); //hook2 reamke into separate component or add useref to save the "isURLInputOpen" state?
  formData.append(e.itemName.name, e.itemName.value);
  formData.append("colorOfCurrentAmount", colorOfCurrentAmount);
  formData.append(e.amountCurrent.name, e.amountCurrent.value);
  formData.append(e.amountMaxExpected.name, e.amountMaxExpected.value);
  formData.append(e.expirationDateDay.name, e.expirationDateDay.value);
  formData.append(e.expirationDateTime.name, e.expirationDateTime.value);
  formData.append(e.numberOfMeasurement.name, e.numberOfMeasurement.value);
  formData.append(e.unitOfMeasurement.name, e.unitOfMeasurement.value);
  formData.append(e.isOpen.name, e.isOpen.value);
  formData.append(e.repeatability.name, e.repeatability.value);
  // formData.append(e._.name, e._.value);

  return Object.fromEntries(formData);
};
export default handleSaveFormDataAsObject;
