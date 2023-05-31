//
//~~ _.  List of items to buy in the currently active shop || all shops - depends on the chosen image
//
//       _._. Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
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
  ]);

  return (
    <ul className={styles["list-container"]}>
      {itemsToRender.map((item) => (
        <li key={item.name} className="___hook1___">
          <SingleItemToBuy variant="list-view" />
        </li>
      ))}
    </ul>
  );
};
export default ListOfItemsToBuy;
