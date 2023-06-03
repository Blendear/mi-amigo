//
//~~ _.  Details of an item - some
//
//       _._. Image, title and needed amounts - by literally adding "SingleItemToBuy" container as "create/edit view" variant
//
//       _._. Repeatability type toggler (Button) - "single" or "traditional", depending on "does the user wants to buy this item once, or repeatably?"
//
//       _._. Expiration date (Date Picker, Button) - date is chosen by hand or automaticcly, after clicking "Open item"
//
//           _._._. Title
//
//           _._._. Date picker
//
//           _._._. Time picker
//
//           _._._. Toggle "item is open" (Button) - automaticly changes the expiration date, if specific conditions apply
//
//       _._. Prices in specific shops - by chosen amount and unit of measurment
//
//           _._._. Title text
//
//           _._._. Amount & Unit of measurment - to which the price applies
//
//           _._._. Add new price in a new shop (Button)
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
import SingleItemToBuy from "../../list-of-items-to-buy/components/SingleItemToBuy";
import { useState } from "react";

import { ImCheckmark } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";

const ItemDetails = ({ isCreatingNewItem }) => {
  // const [itemData, setItemData] = useState([]);
  const shopPricesToRender = [{ name: "A" }, { name: "B" }];
  return (
    <>
      <div className={styles["item-create-or-edit-view__container"]}>
        <SingleItemToBuy variant="create-or-edit-view" />
      </div>
      {/* 
      //       _._. Repeatability type toggler (Button)
      */}
      <select required>
        <option value="Repeatability">Repeatability</option>
        <option value="Unique">Unique</option>
        <option value="Traditional">Traditional</option>
      </select>
      {/* 
      //       _._. Expiration date (Date Picker, Button) - date is chosen by hand or automaticcly, after clicking "Open item"
      */}
      <div>
        {/*
        //           _._._. Title
        */}
        <div>Earliest expiration date:</div>
        {/* 
        //           _._._. Date picker
        */}
        <input type="date"></input>
        {/* 
        //           _._._. Time picker
        */}
        <input type="time"></input>

        {/* 
        //           _._._. Toggle "item is open" (Button) - automaticly changes the expiration date, if specific conditions apply
        */}
        <button>Unused</button>
      </div>

      {/* 
      //       _._. Prices in specific shops - by chosen amount and unit of measurment
      */}
      <div>
        {/* 
        //           _._._. Title text
        */}
        <div>Cena w sklepach</div>
        {/* 
        //           _._._. Amount & Unit of measurment - to which the price applies
        */}
        <input type="number" placeholder="1"></input>
        <input type="text" placeholder="pc."></input>
        {/* /\ //hook1 add default value, not just palceholder */}
        {/* 
        //           _._._. Add new price in a new shop (Button)
        */}
        <button>+</button>
      </div>

      {/* 
      //           _._._. List of "PriceInASpecificShop" components
      */}
      {shopPricesToRender.map((item) => (
        <li key={item.name} className={styles[""]}>
          {/*
          //                  _._._._. Single "PriceInASpecificShop" - with shop name and the price of that item inside the given shop
          */}
          <div>price </div>
          {/* /\ / hook1 - create acomponent for this */}
        </li>
      ))}
      <div>a</div>

      {/* 
      //       _._. Delete item (Button)
      */}
      <MdDeleteForever />
      {/* 
      //       _._. Save changes (Button)
      */}
      <ImCheckmark />
    </>
  );
};
export default ItemDetails;
