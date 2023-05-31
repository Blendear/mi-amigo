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

const MenuItemSingle = ({ svg, title, isActive, handleClick }) => {
  return (
    //
    //       _._. Container div, with dynamic background visual - onClick opens "ItemDetails" modal   &    it's creater for easily positioning it's content and showing which menu item is active (dynamically changed based on "isActive" property)
    //
    <button
      onClick={handleClick}
      className={
        styles[`${isActive ? "a__css-class-name" : "b__css-class-name"}`]
      }
    >
      {/* 
      //       _._. SVG
      */}
      {
        {
          itemsToBuy: <div>svg itemstobuy </div>,
          // itemsToBuy: <SVGItemsToBuy />,
          settings: <div>svg settings </div>,
          // settings: <SVGSettings />,
        }[svg]
      }

      {/* 
      //       _._. Title
      */}
      <div className={styles["title"]}>{title}</div>
      <div className={styles[""]}>{isActive ? "Active" : "Inactive"}</div>
    </button>
  );
};
export default MenuItemSingle;