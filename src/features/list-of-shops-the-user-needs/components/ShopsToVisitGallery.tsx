//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import ShopToVisitSingle from "./ShopToVisitSingle";
import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { ShopFromDB } from "../../../types";

const ShopsToVisitGallery = () => {
  //hook2 - TS - giving a type to this useState break my code, if I dont do {x, setX} instead of [x, setX]. Why? - link to discussion : https://stackoverflow.com/questions/42141393/react-js-error-invalid-attempt-to-destructure-non-iterable-instance
  const [shopsToRender] = useState<[] | ShopFromDB[]>([
    {
      name: "Kaufland",
    },
    {
      name: "Lidl",
    },
  ]);
  // ONE is active, the rest is loaded, bu inactive. bacause we render only 1 logo
  return (
    <div className={styles["landing-page__shops-to-visit-container"]}>
      <div className={styles["landing-page__shops-title"]}>
        Visit this shops
      </div>
      <ul className={styles["landing-page__shops-image"]}>
        <li key={"all-shops"}>
          <ShopToVisitSingle isActive={true} />
        </li>
        {shopsToRender.map((item) => (
          <li key={item.name} className="___">
            <ShopToVisitSingle isActive={false} />
          </li>
        ))}
      </ul>
      <BsArrowLeftSquareFill
        size="2rem"
        onClick={() => {
          console.log("prev shop");
        }}
      />
      <BsArrowRightSquareFill
        size="2rem"
        onClick={() => {
          console.log("next shop");
        }}
      />
    </div>
  );
};
export default ShopsToVisitGallery;

//
//~~ _.  Choose "active shop" from a iterable list of recommended (Left/Right Buttons, Image) - shop list depends on the chosen method   &   the "cheapestAt" and "existsInThisShops" properties on every item in "myNeededSupplies"
//
