//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import ShopToVisitSingle from "../../list-of-shops-the-user-needs/components/ShopToVisitSingle";
import { ShopFromDB } from "../../../types/types";

const ShopPrice = ({ shopData }: ShopFromDB) => {
  return (
    <>
      <div
        className={
          styles[
            "item-create-or-edit-view__prices-in-shops__list-of-prices__item__shop-img"
          ]
        }
      >
        <ShopToVisitSingle shopURL={shopData.imageURL} isActive={true} />
      </div>
      <div
        className={
          styles[
            "item-create-or-edit-view__prices-in-shops__list-of-prices__item__shop-name"
          ]
        }
      >
        {shopData.shopName}
      </div>
      <div
        className={
          styles[
            "item-create-or-edit-view__prices-in-shops__list-of-prices__item__price-value"
          ]
        }
      >
        {`${shopData.price.toFixed(2)} $`}
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
