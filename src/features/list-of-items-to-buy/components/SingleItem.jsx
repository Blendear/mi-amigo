//
//~~ _.  Single item, clickable container - onClick opens "ItemDetails" modal as "variant : edit-item"
//
//       _._. Variant name - "list view" or "create/edit item view", used depending on "does the user see it on the laning page as a list item, or when he tries to create/edit an item?"
//
//       _._. Image
//
//       _._. Title
//
//       _._. Needed amount
//
//           _._._. Background - dynamicaly changing color, depending on the "current amount" / "needed amount" ratio
//
//           _._._. Amount you need to buy (Number, Text) - with unit of measurment
//
//           _._._. Current amount in your supplies, at home (Number)
//
//           _._._. Wanted amount in total
//

import styles from "src/styles/sass/styles-all.module.scss";

const SingleItemToBuy = () => {
  return <div className={styles["nazwa-css-classy"]}>Single item</div>;
};
export default SingleItemToBuy;
