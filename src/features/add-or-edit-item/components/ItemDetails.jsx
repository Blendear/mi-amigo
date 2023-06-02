//
//~~ _.  Details of an item - some
//
//       _._. Image, title and needed amounts - by literally adding "SingleItemToBuy" container as "create/edit view" variant
//
//       _._. Repeatability type toggler (Button) - "single" or "traditional", depending on "does the user wants to buy this item once, or repeatably?"
//
//       _._. Expiration date (Date Picker, Button) - date is chosen by hand or automaticcly, after clicking "Open item"
//
//           _._._. Date picker
//
//           _._._. Toggle "item is open" (Button) - automaticly changes the expiration date, if specific conditions apply
//
//       _._. Prices in specific shops - by chosen amount and unit of measurment
//
//           _._._. Amount & Unit of measurment - to which the price applies
//
//           _._._. List of "PriceInASpecificShop" components
//
//                  _._._._. Single "PriceInASpecificShop" - with shop name and the price of that item inside the given shop
//
//       _._. Delete item (Button)
//
//       _._. Save changes (Button)
//

import styles from "src/styles/sass/styles-all.module.scss";

const ItemDetails = ({ isCreatingNewItem }) => {
  return (
    <>
      <h1>
        {" "}
        {isCreatingNewItem
          ? "create new item modal"
          : "edit existing item modal"}
      </h1>
    </>
  );
};
export default ItemDetails;
