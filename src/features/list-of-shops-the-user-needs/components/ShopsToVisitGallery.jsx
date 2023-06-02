//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ShopToVisitSingle from "./ShopToVisitSingle";
import { useState } from "react";

const ShopsToVisitGallery = () => {
  const [shopsToRender, setShopsToRender] = useState([
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
    </div>
  );
};
export default ShopsToVisitGallery;
