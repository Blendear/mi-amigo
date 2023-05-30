//
//~~ _.  Single menu item (Link, Image, Button)
//
//       _._. Image as Link - opens "ItemDetails" modal
//
//       _._. Title as Link - opens "ItemDetails" modal
//
//       _._. Amounts and units of measurment
//
//           _._._. Numbers - needed to buy, current amount and wanted amount
//
//           _._._. Background - dynamically changed based on "isActive" property
//
//       _._. Edit and confirm amounts and units of measurment (Buttons) - conditionally rendered, depending on "is the "Amounts..." container clicked"
//

import styles from "src/styles/sass/styles-all.module.scss";

const MenuItemSingle = () => {
  return <div className={styles["css-class-name"]}>MenuItemSingle</div>;
};
export default MenuItemSingle;
