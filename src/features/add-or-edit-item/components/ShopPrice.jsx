//
// Table of content for this file is written at the bottom
//

import styles from "src/styles/sass/styles-all.module.scss";
import ShopToVisitSingle from "../../list-of-shops-the-user-needs/components/ShopToVisitSingle";

const ShopPrice = ({ propA, propB }) => {
  return (
    <>
      <div
        className={
          styles[
            "item-create-or-edit-view__prices-in-shops__list-of-prices__item__shop-img"
          ]
        }
      >
        <ShopToVisitSingle isActive={true} />
      </div>
      <div
        className={
          styles[
            "item-create-or-edit-view__prices-in-shops__list-of-prices__item__shop-name"
          ]
        }
      >
        Shop name
      </div>
      <div
        className={
          styles[
            "item-create-or-edit-view__prices-in-shops__list-of-prices__item__price-value"
          ]
        }
      >
        5,50 zł
      </div>
    </>
  );
};
export default ShopPrice;

//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//
