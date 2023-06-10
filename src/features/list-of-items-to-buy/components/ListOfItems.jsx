//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import SingleItemToBuy from "./SingleItemToBuy";
import { useState } from "react";

const ListOfItemsToBuy = ({ itemsFromDB }) => {
  return (
    <ul className={styles["landing-page__list-of-items-container"]}>
      {itemsFromDB.map((item) => (
        <li key={item.name} className={styles["item-edit-view__container"]}>
          <SingleItemToBuy
            variant="list-view"
            itemAlreadyExists={true}
            itemSingle={item}
          />
        </li>
      ))}
    </ul>
  );
};
export default ListOfItemsToBuy;

// hook2 - table of cotnent isnt mpemented in the code
//
//~~ _.  List of items to buy in the currently active shop || all shops - depends on the chosen image
//
//       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
