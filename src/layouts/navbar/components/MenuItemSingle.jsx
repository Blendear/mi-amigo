//
//~~ _.  Single menu item (Link, Image, Button)
//
import styles from "src/styles/sass/styles-all.module.scss";
import SVGItemsToBuy from "./SVGItemsToBuy";
import SVGSettings from "./SVGSettings";
import { MdSettings } from "react-icons/md";
import { ImList } from "react-icons/im";

const MenuItemSingle = ({ svg, title, isActive, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles[`navbar__menu-item-container`]} ${
        styles[isActive ? "" : "navbar__menu-item-container--disabled"]
      }`}
    >
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
      <div className={styles["navbar__menu-item-title"]}>{title}</div>
    </button>
  );
};
export default MenuItemSingle;
