//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ShopToVisitSingle from "./ShopToVisitSingle";

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
    <ul className={styles["shops-list-container"]}>
      <li key={"all-shops"} className="all-shops">
        <ShopToVisitSingle isActive={true} />
      </li>
      {shopsToRender.map((item) => (
        <li key={item.name} className="___">
          <ShopToVisitSingle isActive={false} />
        </li>
      ))}
    </ul>
  );
};
export default ShopsToVisitGallery;
