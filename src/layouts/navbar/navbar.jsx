//
//~~ _. Navbar
//
//       _._. Menu items - only 2 for now, so instead of using links, I show the "settings" as a modal - so that coming back to the landing page "Items To Buy" doesn't need to load all the data again
//

import styles from "src/styles/sass/styles-all.module.scss";

import { useState } from "react";

import { MenuItemSingle } from "./index";

const Navbar = () => {
  const [showAsActive, setShowAsActive] = useState("itemsToBuy");

  return (
    <nav className={styles["navbar__container"]}>
      <MenuItemSingle
        svg={"itemsToBuy"}
        title={"ITEMS TO BUY"}
        isActive={showAsActive === "itemsToBuy" && true}
        handleClick={() => {
          setShowAsActive("itemsToBuy");
        }}
      />
      <MenuItemSingle
        svg={"settings"}
        title={"SETTINGS"}
        isActive={showAsActive === "settings" && true}
        handleClick={() => {
          setShowAsActive("settings");
        }}
      />
    </nav>
  );
};

export default Navbar;
