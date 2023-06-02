//
//~~ _.  Single menu item (Link, Image, Button)
//
//       _._. Container div, with dynamic background visual - onClick opens "ItemDetails" modal   &    it's creater for easily positioning it's content and showing which menu item is active (dynamically changed based on "isActive" property)
//
//       _._. SVG
//
//       _._. Title
//

import styles from "src/styles/sass/styles-all.module.scss";

import SVGItemsToBuy from "./SVGItemsToBuy";
import SVGSettings from "./SVGSettings";
import { MdSettings } from "react-icons/md";
import { ImList } from "react-icons/im";

const MenuItemSingle = ({ svg, title, isActive, handleClick }) => {
  return (
    //
    //       _._. Container div, with dynamic background visual - onClick opens "ItemDetails" modal   &    it's creater for easily positioning it's content and showing which menu item is active (dynamically changed based on "isActive" property)
    //
    <button
      onClick={handleClick}
      className={`${styles[`navbar__menu-item-container`]} ${
        styles[isActive ? "" : "navbar__menu-item-container--disabled"]
      }`}
    >
      {/* 
      //       _._. SVG
      */}
      {
        {
          itemsToBuy: (
            <div className={styles["navbar__menu-item-svg"]}>
              <ImList size="50%" />
            </div>
          ),

          settings: (
            <div className={styles["navbar__menu-item-svg"]}>
              <MdSettings size="70%" />{" "}
            </div>
          ),
        }[svg]
      }

      {/* 
      //       _._. Title
      */}
      <div className={styles["navbar__menu-item-title"]}>{title}</div>
    </button>
  );
};
export default MenuItemSingle;
