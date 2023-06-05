//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import SingleItemToBuy from "./SingleItemToBuy";
import { useState } from "react";

const ListOfItemsToBuy = () => {
  const [itemsToRender, setItemsToRender] = useState([
    {
      name: "mieso-photo",
      title: "mieso",
      "amount-current": 3,
      "amount-wanted": 12,
      "unit-of-measurment": "kg",
    },
    {
      name: "jajko-photo",
      title: "jajko",
      "amount-current": 13,
      "amount-wanted": 20,
      "unit-of-measurment": "szt.",
    },
    {
      name: "jajko-photo",
      title: "jajko",
      "amount-current": 13,
      "amount-wanted": 20,
      "unit-of-measurment": "szt.",
    },
    {
      name: "jajko-photo",
      title: "jajko",
      "amount-current": 13,
      "amount-wanted": 20,
      "unit-of-measurment": "szt.",
    },
    {
      name: "jajko-photo",
      title: "jajko",
      "amount-current": 13,
      "amount-wanted": 20,
      "unit-of-measurment": "szt.",
    },
  ]);

  return (
    <ul className={styles["landing-page__list-of-items-container"]}>
      {itemsToRender.map((item) => (
        <li key={item.name} className={styles["item-edit-view__container"]}>
          <SingleItemToBuy variant="list-view" />
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
