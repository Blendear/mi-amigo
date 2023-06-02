//
//~~ _.  A
//
//       _._. AA
//
//           _._._.AAA
//

import styles from "src/styles/sass/styles-all.module.scss";
import ToggleShopsFilterMethodSingle from "./ToggleShopsFilterMethodSingle";

const ToggleShopsFilterMethodList = () => {
  return (
    <div className={styles["landing-page__btn-toggle-method-container"]}>
      <ToggleShopsFilterMethodSingle isActive={true} title="CHEAP" />
      <ToggleShopsFilterMethodSingle isActive={false} title="QUICK" />
    </div>
  );
};
export default ToggleShopsFilterMethodList;
