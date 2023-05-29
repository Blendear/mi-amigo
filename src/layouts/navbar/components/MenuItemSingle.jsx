//
//~~ _.  Single menu item (Link, Image, Button)
//
//       _._. Link & Image
//
//       _._. Title
//
//       _._. Background - dynamically changed based on "isActive" property
//

import styles from "src/styles/sass/styles-all.module.scss";

const MenuItemsLists = () => {
  return <div className={styles["css-class-name"]}>MenuItemsLists</div>;
  //   <button
  //     className={
  //       navbarVisibility
  //         ? styles["layout-strona-glowna__navbar-gorny__III--open"]
  //         : styles["layout-strona-glowna__navbar-gorny__III--closed"]
  //     }
  //     onClick={handlerShowNavbar}
  //   >
  //     <FaIcons.FaBars />
  //   </button>
};
export default MenuItemsLists;
