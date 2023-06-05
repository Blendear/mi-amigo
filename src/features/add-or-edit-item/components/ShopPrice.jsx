//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ShopToVisitSingle from "../../list-of-shops-the-user-needs/components/ShopToVisitSingle";

const ShopPrice = ({ propA, propB }) => {
  return (
    <>
      <ShopToVisitSingle isActive={true} />
      <div>Nazwa sklepu</div>
      <div>|</div>
      <div>5,50</div>
      <div>zł</div>
    </>
  );
};
export default ShopPrice;
